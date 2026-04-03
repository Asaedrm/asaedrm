# Etapa 1: Construcción
FROM rust:1.75-slim as builder

# Instalar dependencias necesarias para compilar Wasm y Leptos
RUN apt-get update && apt-get install -y pkg-config libssl-dev Node.js npm binaryen
RUN rustup target add wasm32-unknown-unknown
RUN cargo install --locked cargo-leptos

WORKDIR /app
COPY . .

# Compilar en modo release
RUN cargo leptos build --release -v

# Etapa 2: Runtime (Imagen final ligera)
FROM debian:bookworm-slim
WORKDIR /app

# Copiar el binario y los archivos estáticos desde el builder
# Ajusta 'asaedrm' al nombre de tu proyecto en Cargo.toml
COPY --from=builder /app/target/release/asaedrm /app/
COPY --from=builder /app/target/site /app/site

# Configurar variables de entorno para Leptos
ENV LEPTOS_SITE_ROOT=/app/site
ENV LEPTOS_SITE_ADDR=0.0.0.0:3000
ENV LEPTOS_OUTPUT_NAME=asaedrm

EXPOSE 3000

# Ejecutar el binario
CMD ["./asaedrm"]