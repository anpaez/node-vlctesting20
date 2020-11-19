var express = require("express");
var http = require("http");
var app = express();

app.get("/", (req,res) => {
    res.status(200).send("Bienvenido a Shift left de valencia testing");
})

app.get("/hola", (req,res) => {
    res.status(200).send("<h1>¡Hola VLCTesting!</h1>");
});

app.get("/hola/:name", (req, res) => {
    const name = req.params.name;
    res.status(200).send("<h1>¡Hola " + name + "!</h1>" )
})

http.createServer(app).listen(process.env.PORT || 8080), () => {
    console.log("Servidor iniciado");
}