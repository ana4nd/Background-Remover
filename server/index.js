import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js";


dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();

// middleware
app.use(express.json());
app.use(cors());



// Connect DB
connectDB();


// api routes

app.get("/", (req,res)=>{
    res.send("hello from server")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})