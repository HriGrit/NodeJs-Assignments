let express = require("express");
let router = express.Router();

router.get("/home", function (req, res) {
    res.send("Home");
});

router.post("/add-user", function (req, res) {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).send("Missing Param");
    }

    res.send("Home");
});

module.exports = router;
