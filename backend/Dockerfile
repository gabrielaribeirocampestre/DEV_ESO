# 1️⃣ Base image
FROM node:18-alpine

# 2️⃣ Define o diretório de trabalho dentro do container
WORKDIR /app

# 3️⃣ Copia os arquivos de dependências
COPY package*.json ./

# 4️⃣ Instala dependências do projeto e sqlite3
RUN npm install --legacy-peer-deps
RUN npm install sqlite3 --save

# 5️⃣ Instala Nest CLI globalmente
RUN npm install -g @nestjs/cli

# 6️⃣ Copia todo o restante do código para dentro do container
COPY . .

# 7️⃣ Compila o projeto NestJS
RUN npm run build

# 8️⃣ Expõe a porta que o NestJS vai rodar
EXPOSE 3000

# 9️⃣ Comando padrão ao iniciar o container
CMD ["npm", "run", "start:prod"]
