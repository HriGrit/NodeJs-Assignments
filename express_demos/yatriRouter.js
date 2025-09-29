// let express = require("express");
import express from "express";
let router = express.Router();
// import { studentUsername } from "./yatriController.js";

router.get("/", (req, res) => {
    res.send("hi");
});

router.get("/stud/:username", (req, res) => {
    const username = req.params.username;

    if (username === "Daniel") {
        res.send("Username is Daniel");
    } else {
        res.send("Username is not Daniel");
    }
});

router.post("/prof/:username", (req, res) => {
    return res.send("Welcome to this page ", req.params.username);
});

router.post("/emp", (req, res) => {
    return res.send("Welcome you are new here");
    // return res.send("Welcome to this page ", req.params.username);
});

export default router;
