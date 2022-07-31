const express = require("express");
const Contenedor = require("./Contenedor.js");

// creo un nuevo Contenedor llamado products
const products = new Contenedor("productos");

const app = express();

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/productos", (req, res) => {
  products.getAll().then((items) => res.send(JSON.stringify(items)));
});

app.get("/productoRandom", (req, res) => {
  products.getRandom().then((item) => res.send(JSON.stringify(item)));
});

app.get("*", (req, res) => {
  res.send("Page not found");
});

const server = app.listen(8080, () => {
  console.log(`Escuchando en el puerto ${server.address().port}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));
