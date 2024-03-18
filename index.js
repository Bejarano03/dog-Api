const express = require("express");
const app = express();
const port = 3000;
const dogFacts = require("./dog_facts");

app.get("/facts", (req, res) => {
    res.send(dogFacts);
})

app.get("/facts/:id", (req, res) => {
    let total = req.params.id;
    res.send(dogFacts.slice(0, total));
})

app.get("*", (req, res) => {
    res.send("404 Page Not Found");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})