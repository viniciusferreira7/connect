FROM node:22.16.0-alpine AS builder

# Instala dependências básicas
RUN apk add --no-cache openssl curl

# Ativa o pnpm via Corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copia os arquivos da raiz do monorepo
COPY ./pnpm-lock.yaml ./package.json ./

# Copia o monorepo inteiro
COPY . .

# Entra na pasta da API
WORKDIR /app/apps/api

# Instala dependências com filtro na API
RUN pnpm install --filter ./apps/api --frozen-lockfile

# Build da API (se necessário)
RUN pnpm build

# ========================
# Etapa final
FROM node:22.16.0-alpine AS production

RUN apk add --no-cache openssl curl
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copia apenas o que foi instalado/buildado da API
COPY --from=builder /app/apps/api /app

# Limpa store do pnpm
RUN pnpm store prune

EXPOSE 3333

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s CMD pnpm run healthcheck-manual

CMD ["sh", "-c", "pnpm run db:deploy && pnpm start"]