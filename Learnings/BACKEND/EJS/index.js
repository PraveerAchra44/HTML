import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {

    const d = new Date();
    const day = d.getDay();

    let type = "a weekday";
    let adv = "It's Time to work Hard!!";

    if (day === 0 || day === 6) {
        type = "a weekend";
        adv = "It's Time to FUN bhenC***";
    }

    res.render("view.ejs", {
        dayType: type,
        advice: adv
    });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});