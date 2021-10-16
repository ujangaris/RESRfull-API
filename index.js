//import express
import express from "express";
//import mongoose
import mongoose from "mongoose";
const app = express();

// connect ke database mongoDB
mongoose.connect("mongodb://localhost:27017/resful_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database Connected"));

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen("3000", () => console.log("Server running at port: 3000"));
