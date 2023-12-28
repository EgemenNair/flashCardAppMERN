// Imports
import mongoose, { Schema } from "mongoose";

// Create Deck schema
const DeckSchema = new Schema({
  title: String,
});

// Create Deck model
const Deck = mongoose.model("Deck", DeckSchema);

export default Deck;
