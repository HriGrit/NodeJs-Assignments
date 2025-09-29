import express from "express";
import router from "./yatriMiddleware.js";
import yatriRouter from "./yatriRouter.js";
// import

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// app.use("/api/users", require("./users"));

// app.use("/student/yatri/Profile", yatriRouter);
// app.use("/professor/yatri/Profile", yatriRouter);
// app.use("/employee/yatri/Profile", yatriRouter);

app.use("/student", router);
app.use("/professor", router);
app.use("/employee", router);

app.listen(3001, () => console.log("Server started")); // listen to server 3001
