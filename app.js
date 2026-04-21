import express from "express";
import cors from "cors";
import routes from "./routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", routes);

// Health check
app.get("/", (req, res) => {
  res.send("✅ eGazette CRM API is running");
});

export default app;