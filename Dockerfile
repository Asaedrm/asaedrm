# Etapa 1: Construcción
FROM rust:1.82-bookworm AS builder

# Instalamos lo mínimo necesario
RUN apt-get update && apt-get install -y pkg-config libssl-dev binaryen curl
RUN rustup target add wasm32-unknown-unknown
RUN cargo install --locked cargo-leptos

WORKDIR /app
COPY . .

# Compilamos el proyecto (esto genera la carpeta /target/site)
RUN cargo leptos build --release

# Etapa 2: Servidor Web ligero (Nginx)
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copiamos los archivos estáticos generados al directorio de Nginx
COPY --from=builder /app/target/site /usr/share/nginx/html

# Exponemos el puerto estándar de Nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]