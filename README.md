# FIAP - Projeto Tech Challenger - Fase 1

I

Este projeto utiliza Next.js, Tailwind CSS e Prisma com SQLite como banco de dados.
Siga as instruções abaixo para executar o projeto.

## Requisitos

- [Node.js](https://nodejs.org/) (recomendado: versão LTS)

## Instalação

1. Clone o repositório para sua máquina local

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

## Configuração do Banco de Dados

Como o SQLite é um banco de dados baseado em arquivos, ele será automaticamente configurado ao rodar o comando de migração abaixo.

1. Execute as migrações para criar as tabelas no banco de dados:

   ```bash
   npx prisma migrate dev --name init
   ```

2. (Opcional) Para visualizar os dados do banco de dados, você pode utilizar o Prisma Studio:

   ```bash
   npx prisma studio
   ```

## Executando o Projeto

1. Inicie o servidor de desenvolvimento do Next.js:

   ```bash
   npm run dev
   ```

   O projeto estará disponível em [http://localhost:3000](http://localhost:3000).

## Prisma

Prisma é usado para modelar e gerenciar o banco de dados. O esquema do banco de dados é definido em `prisma/schema.prisma`. Após qualquer alteração no esquema, você deve gerar novamente o cliente do Prisma:

```bash
npx prisma generate
```
