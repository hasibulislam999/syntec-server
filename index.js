/**
 * Title: Syntec server
 * Description: Create a backend for Syntec server
 * Author: Hasibul Islam
 * Date: 22/09/2022
 */

/* external imports */
const express = require("express");
const cors = require("cors");
require("dotenv").config();

/* internal imports */
const errorHandler = require("./middlewares/error.middleware");
const dbConnection = require("./utils/db.util");

/* router level routers */
const avatarRouter = require("./routes/avatar.route");
const thumbnailRouter = require("./routes/thumbnail.route");
const userRouter = require("./routes/user.route");
const serviceRouter = require("./routes/service.route");

/* application level connection */
const app = express();
const port = process.env.PORT || 8080;

/* middleware connection */
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* router connection */
app.use("/avatar", avatarRouter);
app.use("/thumbnail", thumbnailRouter);
app.use("/user", userRouter);
app.use("/service", serviceRouter);

/* global error handler */
app.use(errorHandler);

/* DB connection */
dbConnection();

/* enable backend connection */
app.get("/", (req, res) => {
  res.status(200).json({
    acknowledgement: true,
    message: "OK",
    description: "The request is OK",
  });
});

/* enable backend port */
app.listen(port, () => {
  console.log(`Success: Listening on port ${port}`);
});
