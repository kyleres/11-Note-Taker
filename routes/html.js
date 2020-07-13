//dependencies
const express = require("express");
const path = require("path");
const app = express();

//route for index.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"../public/index.html"));
});

//route for notes.html
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname,"../public/notes.html"));
});

module.exports = app;