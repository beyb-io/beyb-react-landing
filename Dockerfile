FROM node:22.12.0-alpine

WORKDIR /app

# Enable pnpm via Corepack
RUN corepack enable

# Install dependencies from lockfile
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build application
COPY . .
RUN pnpm run build

ENV NODE_ENV=production
EXPOSE 3000

CMD ["pnpm", "run", "start"]
