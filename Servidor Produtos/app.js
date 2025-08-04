//Importa o modulo express para usar suas funcionalidades
const express = require ("express");

//Cria uma Instância do Express, que representa o aplicativo web
const app = express();
const PORT = 8080;

//Ultima linha do código
app.listen(PORT, ()=>{
    console.log(`Servidor de Produtos rodando na porta ${PORT}.`);
});