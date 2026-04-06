// TODO 1: Import and Create express app instance

import express from "express";
import cors from "cors";
import morgan from "morgan";
import { getRandomQuote } from "./quotes.js";

const app = express();

// TODO 1: Define server port
const PORT = 3000;
// TODO 4: Import and Apply CORS middleware
app.use(cors());

// TODO 5: Import and apply Morgan middleware
app.use(morgan("dev"));

// TODO 6.1: Create root route "/"
app.get("/", (req, res) => {
  res.send("Backend server is running");
});

// TODO 6.2: Create "/api/quote" route

app.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});
// TODO 7: Start server using app.listen

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
