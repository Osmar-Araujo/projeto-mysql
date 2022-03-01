const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require('dotenv');


dotenv.config();

app.use(bodyParser.json());

const roteador = require("./rotas/produtos");
app.use("/api/products", roteador);

const roteadorUsu = require("./rotas/usuarios");
app.use("/api/usuarios", roteadorUsu);

app.listen(5000, () => console.log("API em pé!!"));
