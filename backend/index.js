import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connect from "./config/db.js";
import router from "./routes/Employee.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/api/employee", router);

app.listen(PORT, () => {
  console.log(`server running on port 4000`);
  connect();
});
