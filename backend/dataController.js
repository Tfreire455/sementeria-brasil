const express = require("express");
const router = express.Router();
const xlsx = require("xlsx");
const loadData = require("./utils/loadData"); // Função para carregar dados do Excel
const saveDataToExcel = require("./utils/saveDataToExcel"); // Função para salvar dados no Excel

router.get("/", (req, res) => {
  const data = loadData();
  res.json({ items: data, totalItems: data.length });
});

router.post("/", (req, res) => {
  const newData = req.body;
  let data = loadData();
  const newId = data.length ? Math.max(...data.map((item) => item.id)) + 1 : 1;
  newData["id"] = newId;
  data.push(newData);
  saveDataToExcel(data);
  res.status(201).send("Registro adicionado!");
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedData = req.body;
  let data = loadData();
  const index = data.findIndex((item) => item.id === id);

  if (index !== -1) {
    data[index] = { ...data[index], ...updatedData };
    saveDataToExcel(data);
    res.send("Registro atualizado!");
  } else {
    res.status(404).send("Registro não encontrado!");
  }
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let data = loadData();
  const index = data.findIndex((item) => item.id === id);

  if (index !== -1) {
    data.splice(index, 1);
    saveDataToExcel(data);
    res.send("Registro deletado!");
  } else {
    res.status(404).send("Registro não encontrado!");
  }
});

module.exports = router;
