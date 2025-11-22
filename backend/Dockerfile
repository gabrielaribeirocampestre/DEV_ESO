# Usando Node 20 Alpine
FROM node:20-alpine

# Instala dependências necessárias para SQLite
RUN apk add --no-cache python3 make g++ sqlite sqlite-dev

# Diretório de trabalho
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências (com peer deps legados se houver)
RUN npm ci --legacy-peer-deps

# Copia o restante do projeto
COPY . .

# Build do NestJS
RUN npm run build

# Expõe a porta do NestJS
EXPOSE 3000

# Comando de inicialização
CMD ["node", "dist/main.js"]
