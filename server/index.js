const express = require("express");
const helmet = require("helmet");
const frasiGandhi = require("./db-frasiGandhi");

const app = express();

//middleware
app.use(helmet());

//db frasi vangelo
const fraseDelGiorno = [
    "Chi vuol venire dietro di me prenda la sua croce e mi segua",
    "Se vuoi essere perfetto, va, vendi quello che hai e seguimi",
    "Non fare agli altri quello che non vuoi sia fatto a te",
    "Fai agli altri quello che vuoi sia fatto a te",
    "Non dare la perla ai porci"
];
const frasiVangelo = () => {
    const indice = Math.floor(Math.random()*5);
    return fraseDelGiorno [indice];
};

//endpoint main
app.get("/", (req, res) => {
    res.status(200)
    .send("Hello world!");
});

//second endpoint
app.get("/frasi-vangelo", (req, res) => {
    res.status(201)
    .send(frasiVangelo());
});

//third endpoint
app.get("/frasi-gandhi", (req, res) => {
    res.status(202)
    .send(frasiGandhi());
});

app.listen(3000, () => {
    console.log("Hello developers. I'm on port 3000!")
});