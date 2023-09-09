import express from "express";
const app = express();
const port= 3000
app.listen(port,()=>{ // 3000 is port number
    console.log(`server running on port ${port}.`); // CALLBACK
})