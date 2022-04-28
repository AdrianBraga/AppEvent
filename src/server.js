const express = require("express");
const nunjucks = require('nunjucks');

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'))

app.set('view engine', '.njk');

nunjucks.configure('./src/app/views', {
  autoescape: true,
  express: app,
  watch: true
})

app.get("/", (req, res) => {
  return res.render('pages/home')
})

app.listen(5000, () => console.log("Servidor rodando na porta 5000"))