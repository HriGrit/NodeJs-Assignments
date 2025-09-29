import express from "express";
import yatriRouter from "./yatriRouter.js";

let router = express.Router();

router.use("/yatri/Profile", yatriRouter);

// router.get("/", (req, res) => {
//     res.send("hi");
// });

export default router;
