import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/AuthRoutes.js";
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors( { credentials:true, origin:'http://localhost:3000'} ));
app.use(cookieParser())
app.use(express.json());
app.use(router);
app.use(express.static("public"))

app.listen(5000, ()=> console.log('Server up and running...'));