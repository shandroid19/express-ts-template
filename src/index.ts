require("dotenv").config();
import errorHandler from "./middlewares/errorHandler";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

var app = express();

//Cross-Origin Resource Sharing policy options
var corsOptions = {
  origin: process.env.CLIENT_ORIGIN,
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOptions));

//basic logging
app.use(logger("dev"));

//parse json bodies (req.body)
app.use(express.json());

//parse urlencoded bodies (req.body)
app.use(express.urlencoded({ extended: false }));

//cookie parser middleware
app.use(cookieParser());

//static files from the public folder
app.use(express.static(path.join(__dirname, "public")));

//make use of errorHandler middleware
app.use(errorHandler);

//Get the PORT from env variables, if it does not exist, use 8000
const PORT = parseInt(process.env.PORT || "8000");

//Make the server listen in the specified PORT
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server started on ${PORT}`);
});

export default app;
