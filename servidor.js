"use strict"
// Importa el módulo de http
const http = require("http");
const fs = require("fs");
const url = require("url");
const { parse } = require('querystring');

const puerto = 8081;

var BD = [
    { nombre: "DD", precio: 500 },
    { nombre: "Portatil", precio: 300 },
    { nombre: "CPU", precio: 250 },
]

var server = http.createServer(function (req, res) {
    switch (req.url) {
        case "/":
            fs.readFile("index.html", function (err, page) {
                res.writeHead(200, { "content-type": "text/html" });
                return res.end(page);
            })
            break;
        case "/producto/save":
            let body = "";
            req.on("data", function (datos) {
                body = datos.toString();
            });
            req.on("end", function () {
                let datos = parse(body);
                res.end(`Producto ${datos.nombre} fue guardado`);
            })
            break;
        case "/producto/get":
            let body = "";
            req.on("data", function (datos) {
                body = datos.toString();
            });
            req.on("end", function () {
                let datos = parse(body);
                let prod = BD.find()
                res.end(`Producto ${datos.nombre} fue guardado`);
            })
            break;
        default:
            res.writeHead(400, { "content-type": "text/html" })
            res.end("<h4>NOT FOUND</h1>");
            break;
    }

})

server.listen(puerto, () => {
    console.log("Servidor escuchando en el puerto 8081...")
});
