const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const roteador = require("./rotas/produtos");
app.use("/api/products", roteador);

app.listen(4000, () => console.log("API em pé!!"));
