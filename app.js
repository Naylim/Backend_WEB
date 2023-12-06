const cors = require("cors");
const express = require("express");

const personaRT = require("./Rutas/personaRt");
const proyectoRT = require("./Rutas/proyectoRt");
const donadorRT = require("./Rutas/donadoresRt");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/personas", personaRT);
app.use("/proyectos", proyectoRT);
app.use("/donadores", donadorRT);

app.listen(4000, ()=> {
    console.log("Server en puerto 4000");
});