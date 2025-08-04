//Importa o modulo express para usar suas funcionalidades
const express = require ("express");

//Cria uma Instância do Express, que representa o aplicativo web
const app = express();
const PORT = 80;

//Ultima linha do código
app.listen(PORT, ()=>{
    console.log(`Servidor de  Pedidos rodando na porta ${PORT}.`);
});