# Imagem base Node 20 Alpine
FROM node:20-alpine

# Dependências necessárias para build e SQLite
RUN apk add --no-cache python3 make g++ sqlite sqlite-dev bash

# Define diretório de trabalho
WORKDIR /app

# Copia arquivos de dependência
COPY package*.json ./

# Instala dependências do Node
RUN npm ci --legacy-peer-deps

# Copia todo o projeto
COPY . .

# Garante que o binário do NestJS seja executável
RUN chmod +x node_modules/.bin/nest

# Build do NestJS
RUN npx nest build

# Expõe porta padrão do NestJS
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "dist/main.js"]
