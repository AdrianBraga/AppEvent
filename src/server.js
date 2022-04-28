const express = require("express");
const nunjucks = require('nunjucks');

const app = express()
const routes = require('./app/routes/routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'))
app.use(routes)


app.set('view engine', '.njk');

nunjucks.configure('./src/app/views', {
  autoescape: true,
  express: app,
  watch: true
})

app.listen(5000, () => console.log("Servidor rodando na porta 5000"))