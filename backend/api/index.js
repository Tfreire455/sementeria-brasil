const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Importar controladores e middleware
const dataController = require("../dataController");
const authenticateToken = require("../authMiddleware");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api", authenticateToken, dataController);

// Exportar o aplicativo para uso no Vercel
module.exports = app;
