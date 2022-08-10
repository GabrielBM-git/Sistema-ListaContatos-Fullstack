# Sistema - Cliente Contatos - Fullstack

---------------------------------------------------------------------------------------------------
Roteiro de Execução:
---------------------------------------------------------------------------------------------------

- Efetue o Clone: [ https://github.com/GabrielBM-git/Sistema-ListaContatos-Fullstack.git ].

---------------------------------------------------------------------------------------------------
(1.) Suportes balanceados
---------------------------------------------------------------------------------------------------

> Via Terminal - Rode o comando: node function.js

---------------------------------------------------------------------------------------------------
(2.) Back-End:
---------------------------------------------------------------------------------------------------

- Para executar a API: Abra um terminal. Entre no diretório 'Back-End' e digite o comando a seguir:

    ./Back-End$ dotnet watch run

- Acesse a API de Dados com o link: http://localhost:5000/swagger/index.html

    - Acesse a API de Dados com o link: http://localhost:5000/api/Cliente/GetAll
    - Acesse a API de Dados com o link: http://localhost:5000/api/Contato/GetAll

---------------------------------------------------------------------------------------------------
(3.) Front-End:
---------------------------------------------------------------------------------------------------

- Para Configurar o Ambiente: Abra um terminal. Entre no diretório 'Front-End' e digite o comando a seguir:

    ./Front-End$ npm install --save-dev @angular-devkit/build-angular --force

- Para Executar a Aplicação: Abra um terminal. Entre no diretório 'Front-End' e digite o comando a seguir:

    ./Front-End$ npm start

- Acesse o Sistema com o link: http://localhost:4200/   (Obs: O 'Back-End' deve estar em execução.) 

---------------------------------------------------------------------------------------------------