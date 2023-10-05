//Install express server
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static( dirname + "/dist/"));

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app. listen(process.env.PORT || 4200);