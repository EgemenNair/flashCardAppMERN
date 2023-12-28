// Imports
import express, { Request, Response, Express } from "express";
import mongoose from "mongoose";

// Define express app and PORT
const app: Express = express();
const PORT = 5000;

// Connect to DB
const db = mongoose.connect(
  "mongodb+srv://admin:BwuJeofI0zyZPzZc@flashcardappmern.kctlvfx.mongodb.net/?retryWrites=true&w=majority"
);

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hellooooo");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
