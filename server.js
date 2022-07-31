const express = require("express");
const Contenedor = require("./Contenedor.js");

// creo un nuevo Contenedor llamado products
const products = new Contenedor("productos");

const app = express();
// creo el home
app.get("/", (req, res) => {
  res.send("Home");
});

// si va a /productos corre getAll para obtenre todos los productos
app.get("/productos", async (req, res) => {
  const allProducts = await products.getAll();
  res.send(JSON.stringify(allProducts));
});

// si va a productoRandom corre getRandom para obtener un producto random (nuevo metodo en la clase)
app.get("/productoRandom", async (req, res) => {
  const randomProduct = await products.getRandom();
  res.send(JSON.stringify(randomProduct));
});

// si va a cualquier otra dirección genera un 404
app.get("*", (req, res) => {
  res.send("404 - Page not found");
});

// inicializo la escucha del servidor
const server = app.listen(8080, () => {
  console.log(`Escuchando en el puerto ${server.address().port}`);
});

// en caso de que haya error hago un clg
server.on("error", (error) => console.log(`Error en servidor ${error}`));
