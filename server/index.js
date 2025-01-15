import express from "express";
import dotenv from "dotenv";
import { reactQuestions } from "./data/reactQuestions.js";
import { javascriptQuestions } from "./data/javascriptQuestions.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/api/quiz/react", (req, res) => {
  res.send(reactQuestions);
});

app.get("/api/quiz/js", (req, res) => {
  res.send(javascriptQuestions);
});

app.listen(port, () => {
  console.log(`Quiz Server is running on port: ${port}`);
});
