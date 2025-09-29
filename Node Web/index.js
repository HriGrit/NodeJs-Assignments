let express = require("express");
let app = express();

const PORT = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.get("/views", (req, res) => {
    res.render("index", { title: "Hey", message: "Hello there!" });
});

app.use("/cartify", require("./cartify"));

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
