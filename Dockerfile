# -- Etapa de construcción (Build Stage) --
FROM rust:latest as builder

# Instalar dependencias necesarias para Trunk y WASM
RUN rustup target add wasm32-unknown-unknown
RUN cargo install --locked trunk

# Instalar Node.js para Tailwind CSS v4
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar archivos de dependencias de Node
COPY package*.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Compilar el CSS (Tailwind v4 CLI)
RUN npx @tailwindcss/cli -i ./style/input.css -o ./style/output.css

# Construir la aplicación con Trunk en modo release
RUN trunk build --release

# -- Etapa de ejecución (Runtime Stage) --
FROM nginx:alpine

# Copiar los archivos estáticos generados por Trunk al servidor Nginx
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# Configuración básica para manejar Single Page Applications (SPA)
RUN echo "server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files \$uri \$uri/ /index.html; \
    } \
}" > /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
