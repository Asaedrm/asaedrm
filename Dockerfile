# Etapa 1: Construcción
FROM rust:1.82-bookworm AS builder

# Instalamos dependencias del sistema
RUN apt-get update && apt-get install -y pkg-config libssl-dev binaryen curl

# Instalamos la versión EXACTA de la herramienta que pide tu proyecto
# Esto evita el error de "schema version" que ves en tu Fedora
RUN cargo install --locked wasm-bindgen-cli --version 0.2.117
RUN cargo install --locked cargo-leptos --version 0.2.28

RUN rustup target add wasm32-unknown-unknown

WORKDIR /app
COPY . .

# El build ahora ocurrirá dentro de este entorno controlado
RUN cargo leptos build --release

# Etapa 2: Servidor Nginx
FROM nginx:alpine
COPY --from=builder /app/target/site /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]