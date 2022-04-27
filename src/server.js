const express = require("express")

const app = express()

app.get("/", (req, res) => {
  return res.json({ message: "Rota funcionando!" })
})

app.listen(5000, () => console.log("Servidor rodando na porta 5000"))