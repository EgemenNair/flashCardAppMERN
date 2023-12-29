import { Request, Response } from "express";
import Deck from "../models/Deck";

export const getDecks = async (req: Request, res: Response) => {
  const decks = await Deck.find();
  res.json(decks);
};

export const addDeck = async (req: Request, res: Response) => {
  const newDeck = new Deck({ title: req.body.title });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
};
