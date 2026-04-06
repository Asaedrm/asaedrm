# Etapa 1: Construcción
FROM rust:1.84-bookworm AS builder

# Instalamos dependencias del sistema necesarias
RUN apt-get update && apt-get install -y pkg-config libssl-dev binaryen curl

# Agregamos el target para WebAssembly
RUN rustup target add wasm32-unknown-unknown

# INSTALACIÓN CLAVE: Fijamos la versión 0.2.100 para evitar el error de Rust 2024
RUN cargo install --locked trunk
RUN cargo install --locked wasm-bindgen-cli --version 0.2.100

WORKDIR /app
COPY . .

# Sincronizamos la versión del proyecto con la herramienta instalada
RUN cargo update -p wasm-bindgen --precise 0.2.100

# Trunk construye todo y lo manda a la carpeta /app/dist
RUN trunk build --release

# Etapa 2: Servidor Nginx ligero
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copiamos el contenido de la carpeta dist generada por Trunk
COPY --from=builder /app/dist /usr/share/nginx/html

# Fix para que las rutas de Leptos (SPA) no den 404 al refrescar
RUN sed -i 's/index.html index.htm;/index.html index.htm; try_files $uri $uri\/ \/index.html;/' /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]