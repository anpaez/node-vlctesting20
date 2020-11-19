var express = require("express");
var http = require("http");
var app = express();

app.get("/", (req,res) => {
    res.status(200).send("Bienvenido a Shift left de valencia testing");
})

http.createServer(app).listen(process.env.PORT || 8080), () => {
    console.log("Servidor iniciado");
}