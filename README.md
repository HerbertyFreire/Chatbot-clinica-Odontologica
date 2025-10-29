# Chatbot Clínica Odontológica - Interface Web

<div align="center">
  <img src="./chat bot.png" alt="CLINICA" width="300"/>

  ![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

  </div>

## 📝 Descrição

Este projeto é uma interface web de chat (frontend) com um servidor intermediário (backend) para se conectar de forma segura a um agente do **Google Dialogflow ES**. Ele foi projetado para simular o atendimento virtual de uma clínica odontológica, permitindo que os usuários agendem consultas e obtenham informações através de um fluxo de conversa natural.

O frontend é construído com HTML, CSS e JavaScript puros, e o backend utiliza Node.js com Express para servir como uma ponte segura, protegendo as chaves da API do Google Cloud.

## 🛠️ Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** Node.js, Express.js
- **API de Conversação:** Google Dialogflow ES

## 🚀 Guia de Instalação e Execução

Siga **todos** os passos abaixo em ordem para configurar e executar o projeto em sua máquina local.

### Passo 1: Pré-requisitos

Antes de começar, certifique-se de que você tem o **Node.js** instalado em seu computador. Ele é necessário para rodar o servidor backend.

- [Baixe e instale o Node.js aqui](https://nodejs.org/)

### Passo 2: Obter o Código do Projeto

Primeiro, você precisa baixar o código do projeto para a sua máquina.

1.  Abra seu terminal ou prompt de comando.
2.  Navegue até o diretório onde você deseja salvar o projeto.
3.  Clone o repositório do GitHub (substitua a URL pelo link do seu repositório):

    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```

4.  Entre na pasta do projeto que foi criada:
    ```bash
    cd nome-do-repositorio
    ```

### Passo 3: Instalar as Dependências

O backend em Node.js precisa de alguns pacotes para funcionar. Com o terminal aberto na pasta do projeto, execute o comando abaixo:

```bash
npm install

## Passo 4: Configurar as Credenciais do Google Cloud

Esta é a etapa mais importante. Você precisará de um arquivo de credenciais e do ID do projeto para autorizar a conexão.

### Habilitar a API do Dialogflow

1. Vá para a página da API do [Dialogflow](https://console.cloud.google.com/).
2. Certifique-se de que seu projeto está selecionado e clique em **"ATIVAR"**.

### Crie e Baixe a Chave de Serviço

1. No Google Cloud Console, vá para **IAM e admin** > **Contas de serviço**.
2. Encontre a conta de serviço que deseja usar ou crie uma nova.
3. Vá na aba **"CHAVES"**, clique em **"ADICIONAR CHAVE"** -> **"Criar nova chave"** e selecione **JSON**. Um arquivo `.json` será baixado.

### Posicione o Arquivo de Credenciais

1. Renomeie o arquivo JSON baixado para `credentials.json`.
2. Mova este arquivo para a raiz do seu projeto (a mesma pasta onde está o `server.js`).

### Atribua a Permissão Correta

1. Volte para a página do **IAM**.
2. Encontre a conta de serviço que você está usando e clique no ícone de lápis (✏️).
3. Clique em **"ADICIONAR OUTRO PAPEL"**.
4. Procure e adicione o papel: **Cliente da API do Dialogflow** (Dialogflow API Client).
5. Clique em **"SALVAR"**.

### ⚠️ IMPORTANTE: Segurança das Credenciais

O arquivo `credentials.json` contém chaves secretas. **NUNCA, JAMAIS** envie este arquivo para um repositório público no GitHub.

