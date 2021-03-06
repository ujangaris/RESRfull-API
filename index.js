//import express
import express from "express";
//import mongoose
import mongoose from "mongoose";
//import route
import route from "./routes/index.js";
//import cors
import cors from "cors";

const app = express();

// connect ke database mongoDB
mongoose.connect("mongodb://localhost:27017/resful_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database Connected"));

// middleware
app.use(cors());
app.use(express.json());
app.use("/product", route);

app.listen("3000", () => console.log("Server running at port: 3000"));
