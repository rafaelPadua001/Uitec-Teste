# Projeto Laravel 10, Angular e PostgreSQL
Teste para vaga trainee, projeto que utiliza Laravel 10 para o backend, Angular para o frontend e PostgreSQL como banco de dados.

## Requisitos Mínimos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- PHP 8.2
- Angular
- PostgreSQL

## Guia de Instalação

### PHP 8.2

Certifique-se de ter o PHP 8.2 instalado. Você pode usar [XAMPP](https://www.apachefriends.org/index.html) ou [MAMP](https://www.mamp.info/en/) para ambientes locais, ou instalar o PHP separadamente.

### Angular

Certifique-se de ter o Angular instalado globalmente. Se não tiver, você pode instalar usando o seguinte comando:

```bash

npm install -g @angular/cli

### PostgreSQL


1. **Instalação:**
   - Baixe e instale o PostgreSQL no [site oficial](https://www.postgresql.org/download/).
   - Durante a instalação, configure um usuário e senha para o PostgreSQL.

2. **Criação do Banco de Dados:**
   - Abra um cliente PostgreSQL (pode ser o pgAdmin ou utilize o terminal).
   - Crie um banco de dados vazio para o projeto:

     ```sql
     CREATE DATABASE uitec_test;
     ```

3. **Importação do Arquivo de Dump:**
   - Navegue até o diretório `DB` no seu projeto.
   - Use o seguinte comando para importar o arquivo de dump no banco de dados recém-criado:

     ```bash
     psql -U seu_usuario -d uitec_test -a -f dump-uitec_test-202311100903sql
     ```
   - Substitua `seu_usuario` pelo nome do seu usuário PostgreSQL e `dump-uitec_test-202311100903.sql` pelo nome do seu arquivo de dump.

### Configuração do Laravel (Backend)


Guia de Execução do Projeto Laravel (Backend)
Este guia fornece instruções passo a passo para executar um projeto Laravel localmente. Certifique-se de ter o ambiente configurado corretamente antes de começar.

Pré-Requisitos
Antes de começar, certifique-se de ter instalado:

PHP 8.2 ou superior
Composer
Um servidor de banco de dados (por exemplo, MySQL, PostgreSQL)
Terminal de linha de comando (bash, PowerShell, etc.)


Navegue até o Diretório Backend:

cd Backend
Instale as Dependências:


composer install
Crie um Arquivo de Ambiente:

Copie o arquivo .env.example para um novo arquivo chamado .env:

cp .env.example .env
Abra o arquivo .env em um editor de texto e configure as informações do banco de dados, incluindo o nome do banco de dados, usuário e senha.

Gere a Chave de Aplicação:

php artisan key:generate
Execute as Migrações (Criação das Tabelas):

php artisan migrate

Iniciando o Projeto
Certifique-se de que o servidor PHP está em execução no diretório Backend.
Certifique-se de que o servidor Angular está em execução no diretório Frontend.
Acesse o aplicativo Laravel em http://localhost:8000 e o aplicativo Angular em http://localhost:4200.
