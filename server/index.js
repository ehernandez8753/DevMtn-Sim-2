const express = require("express");
const app = express();
const controller = require("./controller.js");
const massive = require("massive");
require("dotenv").config();
const { SERVER_PORT, CONNECTION_STRING } = process.env;

//MIDDLEWARE
app.use(express.json());

//Set up server
massive(CONNECTION_STRING)
.then( db => {
    app.set("db", db);
    app.listen(SERVER_PORT, () => {console.log("Listening on port ", SERVER_PORT)});
});

//Endpoints

app.get("/api/houses", controller.getAllHouses);
app.post("/api/houses", controller.addNewHouse);
app.delete("/api/houses/:house_id", controller.deleteHouse);


