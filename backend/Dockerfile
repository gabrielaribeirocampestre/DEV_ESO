# Usa Node 18 Alpine como base leve
FROM node:18-alpine

# Define diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala dependências do projeto
RUN npm install --legacy-peer-deps

# Instala Nest CLI globalmente (para rodar build)
RUN npm install -g @nestjs/cli

# Copia todo o restante do projeto
COPY . .

# Executa o build do NestJS
RUN npm run build

# Expõe a porta que o NestJS vai rodar
EXPOSE 3000

# Comando padrão ao iniciar o container
CMD ["npm", "run", "start:prod"]
