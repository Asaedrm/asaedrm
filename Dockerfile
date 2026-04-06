# Etapa 1: Construcción - Rust 1.85 es perfecto para Edition 2024
FROM rust:1.85-bookworm AS builder

# Instalamos dependencias del sistema
RUN apt-get update && apt-get install -y pkg-config libssl-dev binaryen curl
RUN rustup target add wasm32-unknown-unknown

# Instalamos Trunk
RUN cargo install --locked trunk

# INSTALACIÓN CLAVE:
# Forzamos la 0.2.99. Esta versión ya entiende la Edition 2024 pero NO pide Rust 1.88.
RUN cargo install --locked wasm-bindgen-cli --version 0.2.99

WORKDIR /app
COPY . .

# Sincronizamos las dependencias del proyecto con la versión estable
RUN cargo update -p wasm-bindgen --precise 0.2.99

# Build final usando Trunk
RUN trunk build --release

# Etapa 2: Servidor Nginx ligero
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copiamos desde la carpeta dist
COPY --from=builder /app/dist /usr/share/nginx/html

# Fix para rutas SPA (Leptos)
RUN sed -i 's/index.html index.htm;/index.html index.htm; try_files $uri $uri\/ \/index.html;/' /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]