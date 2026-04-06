# Etapa 1: Construcción
FROM rust:1.84-bookworm AS builder

# 1. Dependencias del sistema
RUN apt-get update && apt-get install -y pkg-config libssl-dev binaryen curl

# 2. Target de WASM
RUN rustup target add wasm32-unknown-unknown

# 3. Instalación de herramientas (Separadas y con versiones estables)
RUN cargo install --locked trunk
# Forzamos la .100 porque la .117 está pidiendo Rust Edition 2024 que no es estable
RUN cargo install --locked wasm-bindgen-cli --version 0.2.100

WORKDIR /app
COPY . .

# 4. Sincronizamos el Cargo.lock interno con la versión de la herramienta
RUN cargo update -p wasm-bindgen --precise 0.2.100

# 5. Build con Trunk
RUN trunk build --release

# Etapa 2: Servidor Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copiamos la carpeta dist que genera Trunk
COPY --from=builder /app/dist /usr/share/nginx/html

# Fix para que las rutas de la SPA (Leptos) no den 404 al refrescar
RUN sed -i 's/index.html index.htm;/index.html index.htm; try_files $uri $uri\/ \/index.html;/' /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]