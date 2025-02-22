# DevStage - Projeto NLW Connect

Este repositório contém o código-fonte da API do **DevStage**, uma aplicação desenvolvida durante o evento [Next Level Week (NLW) Connect](https://www.rocketseat.com.br/eventos/nlw) da Rocketseat, na trilha de Node.js.

## 📌 Sobre o Projeto

O **DevStage** é uma plataforma de inscrição em eventos que permite aos usuários:

- Registrar-se em eventos e obter ingressos.
- Gerar links de convite personalizados.
- Visualizar rankings de indicações.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/): Ambiente de execução JavaScript server-side.
- [TypeScript](https://www.typescriptlang.org/): Superset do JavaScript que adiciona tipagem estática.
- [Drizzle](https://orm.drizzle.team/): ORM para interação com o banco de dados.
- [Docker](https://www.docker.com/): Plataforma para criação e gerenciamento de containers.

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) versão 14 ou superior.
- [Docker](https://www.docker.com/) para execução do banco de dados em um container.

## 🔧 Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/rocketseat-education/nlw-connect-node.git
   cd nlw-connect-node
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```env
   DATABASE_URL=postgres://user:password@localhost:5432/devstage
   ```
   Certifique-se de substituir `user`, `password` e `localhost` pelas credenciais e host do seu banco de dados.

4. **Inicie o banco de dados com Docker:**
   ```bash
   docker-compose up -d
   ```

5. **Execute as migrações do banco de dados:**
   ```bash
   npm run migrate
   ```

6. **Inicie a aplicação:**
   ```bash
   npm run dev
   ```
   A aplicação estará disponível em `http://localhost:3000`.

## 📂 Estrutura do Projeto

- `src/`: Contém o código-fonte da aplicação.
  - `controllers/`: Controladores que gerenciam as requisições e respostas.
  - `models/`: Definições das entidades e interação com o banco de dados.
  - `routes/`: Definição das rotas da API.
  - `services/`: Contém a lógica de negócios da aplicação.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📜 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.

## 🎓 Certificado

Este projeto foi desenvolvido por **Lays Vidal de Aguiar** durante o **NLW Connect** da Rocketseat.

![Certificado](./assets/certificado.png)

- 📜 Certificado: [Visualizar Certificado](https://app.rocketseat.com.br/certificates/f76f15f2-6142-4c4b-985a-da6442e202c7)
- 🔑 Código de validação: `f76f15f2-6142-4c4b-985a-da6442e202c7`
