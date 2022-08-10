
-- /Back-End/base-dados.db

CREATE TABLE "Cliente" (
    "Id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nome"	TEXT NOT NULL,
    "Grupo"	TEXT
)

CREATE TABLE "Contato" (
    "Id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nome"	TEXT NOT NULL,
    "Email"	TEXT,
    "Telefone"	TEXT,
    "WhatsApp"	TEXT,
    "ClienteId"	TEXT NOT NULL
)