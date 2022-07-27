const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {res.send('')});
app.get("/cadastro/cadastro.html", (req, res) => {res.send ("cadastro")})
app.get("/esqueciMinhaSenha/esqueciSenha.html", (req, res) => {res.send ("Esqueci Senha")})
app.get("/login/login.html", (req, res) => {res.send ("login")})
app.get("/paginaDePerfil/perfil.html", (req, res) => {res.send ("perfil")})

app.listen(port, () => {
  console.log()
})