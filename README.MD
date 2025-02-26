# DevStage - NLW Connect (Node.js)

Este repositório contém o código-fonte do **DevStage**, uma aplicação back-end desenvolvida durante o evento [Next Level Week (NLW) Connect](https://www.rocketseat.com.br/eventos/nlw) da Rocketseat, na trilha de Node.js.

## 📌 Sobre o Projeto

O **DevStage** é uma API REST desenvolvida para gerenciar eventos, permitindo operações como:

- Cadastro e gerenciamento de usuários.
- Registro de participantes em eventos.
- Geração de certificados digitais.
- Monitoramento de indicações.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/): Runtime JavaScript para back-end.
- [TypeScript](https://www.typescriptlang.org/): Superset do JavaScript que adiciona tipagem estática.
- [Fastify](https://www.fastify.io/): Framework web rápido e eficiente.
- [Drizzle ORM](https://orm.drizzle.team/): ORM moderno e otimizado para TypeScript.
- [Docker](https://www.docker.com/): Containerização para PostgreSQL e Redis.
- [PostgreSQL](https://www.postgresql.org/): Banco de dados relacional.
- [Redis](https://redis.io/): Armazenamento em cache e filas.
- [Zod](https://zod.dev/): Biblioteca de validação de dados.
- [Swagger](https://swagger.io/): Documentação interativa da API.

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) versão 14 ou superior.
- [Docker](https://www.docker.com/) instalado para rodar PostgreSQL e Redis.
- Um gerenciador de pacotes como npm ou yarn.


## 🔧 Instalação e Execução


1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Configure as variáveis de ambiente:**
   
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```env
   DATABASE_URL=postgres://user:password@localhost:5432/devstage
   ```
   Certifique-se de substituir `user`, `password` e `localhost` pelas credenciais e host do seu banco de dados.

3. **Inicie o banco de dados com Docker:**
   ```bash
   docker-compose up -d
   ```

4. **Execute as migrações do banco de dados:**
   ```bash
   npm run migrate
   ```

5. **Inicie a aplicação:**
   ```bash
   npm run dev
   ```
   A aplicação estará disponível em `http://localhost:3333`.


## 🎓 Certificado

Este projeto foi desenvolvido por **Lays Vidal de Aguiar** durante o **NLW Connect** da Rocketseat.

<h1 align="center">
  <img src=./assets/Certificado.png>
</h1>

- 📜 Certificado: [Visualizar Certificado](https://app.rocketseat.com.br/certificates/f76f15f2-6142-4c4b-985a-da6442e202c7)
- 🔑 Código de validação: `f76f15f2-6142-4c4b-985a-da6442e202c7`
