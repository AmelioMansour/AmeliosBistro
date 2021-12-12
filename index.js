const express = require("express");
const path = require("path");
const ejs = require("ejs");
const { request } = require("express");


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

//Nav routes
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/views/index.ejs", (req, res) => {
    res.render("index");
});

app.get("/views/html/about.ejs", (req, res) => {
    res.render("./html/about.ejs");
});

app.get("/views/html/menu.ejs", (req, res) => {
    res.render("./html/menu.ejs");
});
app.get("/views/html/order.ejs", (req, res) => {
    res.render("./html/order.ejs");
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
