const express = require('express');

const expressLayouts = require('express-ejs-layouts');

var app = express();

app.set('view engine', 'ejs');

app.use(expressLayouts);

app.use(express.urlencoded());

const port = 3000;

app.get("/", function(req, res) {

    res.render("home", {title: "Home"});

}); 

app.get("/register", function(req, res) {

    res.end("<h1>Formulario de registro</h1>");

});

app.listen(port, function () {

    console.log("Server running! Press CTRL+C to close");

});