import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));


//The inormation logged into the form
const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended:true })); //This will show 


function bandNameGenerator (req, res, next) {
    bandName = req.body["street"] + req.body["pet"];
    next();
}

app.use(bandNameGenerator);

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
}); //This will show the index1 file


app.post("/submit", (req, res) => {
    res.send(`<h1>You band name is:</h1><h2>${bandName}</h2>`);
}); //This will show the index2 file

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

