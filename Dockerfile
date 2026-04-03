# Etapa 1: Construcción con una versión más reciente para evitar líos de ediciones
FROM rust:1.84-bookworm AS builder

# Instalamos dependencias del sistema
RUN apt-get update && apt-get install -y pkg-config libssl-dev binaryen curl

# Instalamos las herramientas con versiones estables compatibles
# Bajamos un poco la versión de wasm-bindgen para evitar el error de la edición 2024
RUN cargo install --locked wasm-bindgen-cli --version 0.2.100
RUN cargo install --locked cargo-leptos --version 0.2.28

RUN rustup target add wasm32-unknown-unknown

WORKDIR /app
COPY . .

# Forzamos la actualización de dependencias para que coincidan con la versión .100
RUN cargo update -p wasm-bindgen --precise 0.2.100

# Compilamos
RUN cargo leptos build --release

# Etapa 2: Servidor Nginx
FROM nginx:alpine
COPY --from=builder /app/target/site /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]