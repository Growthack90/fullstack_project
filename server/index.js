const express = require("express");
const helmet = require("helmet");

const app = express();

//middleware
app.use(helmet());


//endpoint main
app.get("/", (req, res) => {
    res.status(200)
    .send("Hello world!");
})

//second endpoint
app.get("/europa", (req, res) => {
    res.status(201)
    .send("Hello Europe!");
})

//third endpoint
app.get("/italia", (req, res) => {
    res.status(202)
    .send("Hello Italy!");
})

app.listen(3000, () => {
    console.log("Hello developers!")
})