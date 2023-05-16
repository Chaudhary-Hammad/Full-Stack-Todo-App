import express  from "express";
import Connection from "../backend/db/database.js";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "../backend/routes/routes.js";



const app = express();
const port = 8000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(routes)

Connection();
app.listen(port,()=>console.log(`server is created at ${port}`));