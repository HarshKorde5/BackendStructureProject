import express from "express";

import cookieParser from "cookie-parser"; 

import cors from "cors"

const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))

app.use(express.json({limit : "16kb"}));    //limit json data size
app.use(express.urlencoded({extended:true,limit:"16kb"}));      //converts url data symbols as required like '+ %20'
app.use(express.static("public"))       //store files,data,imgs on the server side in the specified folder
app.use(cookieParser())
export { app }
