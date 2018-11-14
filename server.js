var express = require("express");

var app = express();
var PORT = 3000;

var exphbs = require("express-handlebars");

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get('/', function(req, res) {
  res.send("<div>HELLO</div>");
})


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  