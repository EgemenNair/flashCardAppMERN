// Imports
import express, { Request, Response, Express } from "express";
import mongoose from "mongoose";

import Deck from "./models/Deck";

// Define express app and PORT
const app: Express = express();
const PORT = 5000;

// Middlewares
app.use(express.json());

// Routes
app.post("/decks", async (req: Request, res: Response) => {
  const newDeck = new Deck({ title: req.body.title });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
});

// Connect to DB, then start server on PORT
mongoose
  .connect(
    "mongodb+srv://admin:BwuJeofI0zyZPzZc@flashcardappmern.kctlvfx.mongodb.net/flashCardAppMERN?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server: Listening on port ${PORT}`);
    });
  });
