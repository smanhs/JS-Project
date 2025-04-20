import expess   from "express";
import dotenv from "dotenv";

dotenv.config();



const app =expess()
app.listen(process.env.PORT,()=>{
    console.log("server is running on port 8000")
})