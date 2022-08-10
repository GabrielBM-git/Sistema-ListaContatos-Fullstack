# Sistema - Cliente Contatos - Fullstack

---------------------------------------------------------------------------------------------------
Roteiro de Execução:
---------------------------------------------------------------------------------------------------

- Clonar: [ https://github.com/GabrielBM-git/Sistema-ListaContatos-Fullstack.git ].

---------------------------------------------------------------------------------------------------
(1.) Suportes Balanceados:
---------------------------------------------------------------------------------------------------

> Via Terminal - Rode o comando: 

    node function.js

---------------------------------------------------------------------------------------------------
(2.) Back-End:
---------------------------------------------------------------------------------------------------

- Executar a API: Abra um terminal. Entre no diretório 'Back-End' e digite o comando a seguir:

    dotnet watch run

- Acesse a API de Dados: http://localhost:5000/swagger/index.html

    - Acesse a API (Controller): http://localhost:5000/api/Cliente/GetAll
    - Acesse a API (Controller): http://localhost:5000/api/Contato/GetAll

---------------------------------------------------------------------------------------------------
(3.) Front-End:
---------------------------------------------------------------------------------------------------

- Configurar o Ambiente: Abra um terminal. Entre no diretório 'Front-End' e digite o comando a seguir:

    npm install --save-dev @angular-devkit/build-angular --force

- Executar a Aplicação: Abra um terminal. Entre no diretório 'Front-End' e digite o comando a seguir:

    npm start

- Acesse a Aplicação: http://localhost:4200/            (Obs: O 'Back-End' deve estar em execução.) 

---------------------------------------------------------------------------------------------------