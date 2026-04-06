# Etapa 1: Construcción - Usamos Rust 1.85 que tiene mejor soporte para Edition 2024
FROM rust:1.85-bookworm AS builder

# Instalamos dependencias del sistema
RUN apt-get update && apt-get install -y pkg-config libssl-dev binaryen curl
RUN rustup target add wasm32-unknown-unknown

# Instalamos Trunk
RUN cargo install --locked trunk

# INSTALACIÓN CLAVE:
# Para Edition 2024, necesitamos la versión más reciente de wasm-bindgen-cli.
# Ya no fijamos la .100, dejamos que baje la .117 o superior que sí es compatible.
RUN cargo install --locked wasm-bindgen-cli

WORKDIR /app
COPY . .

# Actualizamos las dependencias del proyecto para que coincidan con el compilador
RUN cargo update

# Build final usando Trunk
RUN trunk build --release

# Etapa 2: Servidor Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copiamos desde la carpeta dist
COPY --from=builder /app/dist /usr/share/nginx/html

# Fix para rutas SPA
RUN sed -i 's/index.html index.htm;/index.html index.htm; try_files $uri $uri\/ \/index.html;/' /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]