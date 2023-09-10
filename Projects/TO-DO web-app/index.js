import express from "express"
import bodyParser from "body-parser";
import ejs from "ejs";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let newItems = [];
app.get("/", (req, res) => {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var date = new Date();
    let day = date.toLocaleDateString("en-US", options);
    // console.log(today.toLocaleDateString("en-US", options));

    res.render("index.ejs",{today:day, newListItems:newItems});
})

app.post("/",(req,res)=>{
    let newitem = req.body.newitem;
    newItems.push(newitem);
    res.redirect("/");
})

app.listen(port, () => {
    console.log(`listening on ${port}.`);
})