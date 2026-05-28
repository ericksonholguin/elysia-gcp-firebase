FROM oven/bun AS build

WORKDIR /app

# Cache packages installation
COPY package.json package.json
COPY bun.lock bun.lock

RUN bun install

COPY ./src ./src

ENV NODE_ENV=production
ENV PORT=8080

RUN bun build \
	--compile \
	--minify-whitespace \
	--minify-syntax \
	--outfile server \
	src/index.ts

FROM gcr.io/distroless/base

WORKDIR /app

COPY --from=build /app/server server

ENV NODE_ENV=production
ENV PORT=8080

# Copiar credenciales firebase SOLO para local/dev
COPY ./src/config/elysia-gcp-firebase-firebase-adminsdk-fbsvc-f6e47386d3.json ./firebase-service-account.json


CMD ["./server"]

EXPOSE 8080