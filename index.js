const express = require("express");
require("dotenv").config();
const connectToDatabase = require("./src/database/database"); //arquivo de conexão com o banco
const authService = require("./src/service/auth.service");

const usuario = require("./src/router/usuario.router");//arquivo de rota do usuario
const auth = require("./src/router/auth.router"); //arquivo de rota de auth
const produto = require("./src/router/produto.router"); //arquivo de rota de produto
const categoria = require("./src/router/categoria.router")//arquivo de rota de categoria

const app = express();

const port = 3000;

app.use(express.json()); 

connectToDatabase(); //conectando com o banco

app.use("/usuario", usuario); // chamando as rotas do usuario
app.use("/auth", auth); //chamando as rotas de auth
app.use("/produto", produto); //chamando as rotas de produto
app.use("/categoria", categoria); //chamando as rotas de categoria


app.get("/", (req, res) => {
    res.send({
        message: "Bem vindo ao nosso market-place"
    });
});

app.post("/login", async (req, res) => {
    try{
      const { email, senha } = req.body;
      const user = await authService.loginService(email);

      if(!user){
        return res.status(400).send({ message: "Usuario não encontrado, tente novamente"});
      }
      if(senha != user.senha){
        return res.status(400).send({ message: "Senha invalida"});
      }
      res.send(user); 
    }catch(err){
        console.log(`erro: ${err}`);
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});