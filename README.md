# CONVERSOR-HTML-PDF

# Puppeteer GitLab Login e PDF Generator

Este é um script em Node.js que automatiza o processo de login no GitLab e gera um PDF de uma URL fornecida.

## Pré-requisitos

- Node.js instalado (versão 14 ou superior)
- NPM (Node Package Manager) instalado

## Instalação das Dependências

Para instalar as dependências necessárias, siga as etapas abaixo:

1. Abra o terminal.

2. Navegue até o diretório do projeto:

3. Execute o seguinte comando para instalar as dependências:
npm install puppeteer


Este comando instalará o Puppeteer (biblioteca de automação de navegador) e o dotenv (para carregar variáveis de ambiente de um arquivo `.env`).

## Configuração

Antes de executar o script, você precisa configurar algumas variáveis de ambiente.

Substitua `seu_nome_de_usuario` e `sua_senha` pelo seu nome de usuário e senha do GitLab.


### LOGIN GITLAB
Substitua `seu_nome_de_usuario` e `sua_senha` pelo seu nome de usuário e senha do GitLab.

## Uso

Para gerar um PDF de uma URL, execute o seguinte comando:

Substitua `URL_DO_SITE` pela URL que você deseja capturar e `NOME_DO_PDF` pelo nome do arquivo PDF desejado.

Por exemplo:

## Notas

- Certifique-se de que o site que você deseja capturar está acessível publicamente.
- O script espera 8 segundos após o login para garantir que a autenticação seja concluída com sucesso. Você pode ajustar esse tempo conforme necessário.
- A qualidade e o layout do PDF gerado podem variar dependendo do conteúdo e do design do site.




