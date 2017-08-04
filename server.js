var express = require("express");

var app = express();

/* serves main page */
app.get("/", function (req, res) {
    res.sendfile('test.html')
});

var port = 3000;
app.listen(port, function () {
    console.log("Listening on " + port);
});