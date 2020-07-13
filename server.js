//dependencies
const express = require("express");

//sets port
const PORT = process.env.PORT || 3000;

//renames express
const app = express();

//parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//routes
app.use(require("./routes/api"));
app.use(require("./routes/html"));

//starts server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});