import  express  from "express";
import morgan from "morgan";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";

//Specifies the direct html file we are pulling from
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

//Once the user has logged the website
//I will recieve information on the console
//Showing a POST /submit 200 in 23ms
//This means the site went through and gave an 
//Ok for everything to go through on the user side
app.use(morgan("tiny"));


app.use(bodyParser.urlencoded({ extended:true })); //This will show 
//The inormation logged into the form

app.post("/submit", (req, res) => {
    console.log(req.body);
    res.sendFile(__dirname + "/public/index2.html");
}); //This will show the index2 file

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
}); //This will show the index1 file


app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});