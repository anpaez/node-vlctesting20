var express = require("express");
var http = require("http");
var app = express();

app.get("/", (req,res) => {
    res.status(200).send("Bienvenido a Shift left de valencia testing");
})

http.createServer(app).listen(8080), () => {
    console.log("Servidor iniciado en el puerto 8080");
}