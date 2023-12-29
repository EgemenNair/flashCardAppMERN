import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
config();

import * as decksRoute from "./routes/decksRoute";

// Define express app and PORT
const app: Express = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/decks", decksRoute.router);

// Connect to DB, then start server on PORT
mongoose.connect(process.env.MONGO_URL!).then(() => {
  app.listen(PORT, () => {
    console.log(`Server: Listening on port ${PORT}`);
  });
});
