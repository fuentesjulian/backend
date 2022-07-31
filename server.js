const express = require("express");
const Contenedor = require("./Contenedor.js");

// creo un nuevo Contenedor llamado products
const products = new Contenedor("productos");

const app = express();

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/productos", async (req, res) => {
  const allProducts = await products.getAll();
  res.send(JSON.stringify(allProducts));
});

app.get("/productoRandom", async (req, res) => {
  const randomProduct = await products.getRandom();
  res.send(JSON.stringify(randomProduct));
});

app.get("*", (req, res) => {
  res.send("Page not found");
});

const server = app.listen(8080, () => {
  console.log(`Escuchando en el puerto ${server.address().port}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));
