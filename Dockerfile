# Etapa 1: Construcción
FROM rust:1.84-bookworm AS builder

RUN apt-get update && apt-get install -y pkg-config libssl-dev binaryen curl
RUN rustup target add wasm32-unknown-unknown
RUN cargo install --locked trunk wasm-bindgen-cli

WORKDIR /app
COPY . .

# Compilamos con Trunk (esto crea la carpeta /app/dist)
RUN trunk build --release

# Etapa 2: Servidor Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# COPIAMOS DESDE DIST
COPY --from=builder /app/dist /usr/share/nginx/html

# El fix para que no truene al refrescar la página
RUN sed -i 's/index.html index.htm;/index.html index.htm; try_files $uri $uri\/ \/index.html;/' /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]