import express from "express";
import * as deckController from "../controllers/deckController";

export const router = express.Router();

router.route("/").get(deckController.getDecks);
router.route("/").post(deckController.addDeck);
