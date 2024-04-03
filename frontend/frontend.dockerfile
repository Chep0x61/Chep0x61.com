FROM node:20.12.0-alpine3.19 AS builder

ARG NEXT_PUBLIC_BACKEND_URL

WORKDIR /app

COPY pnpm-lock.yaml package.json ./

RUN npm install -g pnpm

RUN pnpm i

COPY . .

EXPOSE 3000

RUN pnpm run build

FROM nginx:1.25.4-alpine AS runner

COPY --from=builder /app/.next /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/conf.d/default.conf