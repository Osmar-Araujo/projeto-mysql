const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
app.use(bodyParser.json());
app.use(cors())

const roteador = require("./rotas/produtos");
app.use("/api/products", roteador);

const roteadorUsu = require("./rotas/usuarios");
app.use("/api/usuarios", roteadorUsu);

const roteadorEnd = require("./rotas/enderecos");
app.use("/api/enderecos", roteadorEnd);

const roteadorPayCard = require("./rotas/cartoes");
app.use("/api/cartoes", roteadorPayCard);

app.listen(5000, () => console.log("API em pé!!"));
