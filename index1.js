import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended:true })); //This will show 
//The inormation logged into the form

app.post("/submit", (req, res) => {
    console.log(req.body);
    res.sendFile(__dirname + "/public/index2.html");
}); //This will show the index2 file

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
}); //This will show the index1 file



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});