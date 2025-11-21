# 🎮 Fortnite Cosmetics — Backend (NestJS)

Este é o backend desenvolvido para o processo seletivo da **Sistemas ESO**, utilizando **NestJS + TypeORM + SQLite**, seguindo boas práticas de arquitetura, autenticação, organização modular e integração com API externa.

---

## 🚀 Tecnologias Utilizadas

- **NestJS** (framework Node.js)
- **TypeORM**
- **SQLite**
- **Passport + JWT**
- **Axios (API externa)**
- **BCrypt** (hash de senha)
- **Class Validator / Transformer**

---

## 📦 Funcionalidades

### 🔐 Autenticação
- Registro de usuários
- Login com JWT
- Hash seguro de senhas
- Rotas protegidas

### 👤 Usuários
- CRUD de usuários
- Atualização de perfil
- Lista paginada
- Relacionamento com compras (caso usado futuramente)

### 🎨 Cosméticos (Cosmetics)
- Cadastro manual
- Listagem paginada
- Filtros por nome, raridade e tipo
- Integração com API Fortnite
- Armazenamento local no banco

### 🛒 Shop (Loja do Dia)
- Geração automática da loja
- Itens em destaque
- Ligação direta com cosméticos
- Rotas protegidas

### 🔄 Sincronização (Sync)
- Importa cosméticos diretamente da API:
  https://fortnite-api.com/v2/cosmetics/br
- Limpa e recria o banco
- Mantém o backend atualizado com novidades do jogo

---

## 📂 Estrutura do Projeto

src/
├── auth/
├── users/
├── cosmetics/
├── shop/
├── sync/
├── app.module.ts
└── main.ts

yaml
Copiar código

Cada módulo possui:
- Controller
- Service
- Module
- DTOs (quando aplicável)
- Entities

---

## ⚙️ Configuração

Crie um arquivo `.env` na raiz:

JWT_SECRET=mysecretjwt
DB_PATH=cosmetics_db.sqlite

yaml
Copiar código

---

## ▶️ Como executar localmente

Instalar dependências:

npm install

css
Copiar código

Rodar em modo desenvolvimento:

npm run start:dev

css
Copiar código

O servidor ficará disponível em:

http://localhost:3000

yaml
Copiar código

---

## 🐳 Docker

Construir imagem:

docker build -t cosmetics-backend .

yaml
Copiar código

Rodar com docker-compose:

docker-compose up -d

yaml
Copiar código

---

## 🔗 Endpoints Principais

### Auth
POST /auth/register
POST /auth/login

shell
Copiar código

### Users
GET /users
GET /users/:id
PATCH /users/:id
DELETE /users/:id

shell
Copiar código

### Cosmetics
GET /cosmetics
POST /cosmetics
PATCH /cosmetics/:id
DELETE /cosmetics/:id

shell
Copiar código

### Shop
POST /shop/generate
GET /shop
GET /shop/:id

shell
Copiar código

### Sync
POST /sync/cosmetics

yaml
Copiar código

---

## 📄 Sobre o Projeto

Este backend foi criado de forma estruturada, modular, robusta e com autenticação completa, seguindo boas práticas do NestJS e requisitos do desafio técnico.

Pronto para integração com frontend em React e para deploy em produção.

---

## 👤 Autor
**Gabriela Amore**

