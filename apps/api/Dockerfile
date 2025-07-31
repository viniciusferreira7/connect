FROM node:22.16.0-alpine AS builder

RUN apk add --no-cache openssl curl

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json ./

RUN pnpm install --frozen-lockfile --prod

COPY . .

FROM node:22.16.0-alpine AS production

RUN apk add --no-cache openssl curl && \
    corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY --from=builder /app /app

RUN pnpm store prune

EXPOSE 3333

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s CMD pnpm run healthcheck-manual

CMD ["sh", "-c", "pnpm run db:deploy && pnpm run build && pnpm start"]