import express from "express"
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    console.log("hello world!!")
    res.send("<h1>hello from express!!</h1>");
});

app.listen(port,()=>{
    console.log(`server running on port ${port}.`);
})