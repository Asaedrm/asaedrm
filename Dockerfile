# Etapa 1: Construcción
FROM rust:1.84-bookworm AS builder

RUN apt-get update && apt-get install -y pkg-config libssl-dev binaryen curl
RUN rustup target add wasm32-unknown-unknown

# Instalamos Trunk primero (que ya vimos que sí pasa)
RUN cargo install --locked trunk

# Instalamos la versión específica que NO pide Rust 2024
RUN cargo install --locked wasm-bindgen-cli --version 0.2.100

WORKDIR /app
COPY . .

# Obligamos al código a usar la misma versión .100
RUN cargo update -p wasm-bindgen --precise 0.2.100

# Build final
RUN trunk build --release

# Etapa 2: Servidor Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
RUN sed -i 's/index.html index.htm;/index.html index.htm; try_files $uri $uri\/ \/index.html;/' /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]