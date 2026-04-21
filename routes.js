import express from "express";

const router = express.Router();

/*
  TEMP TEST ROUTE
  This confirms routing is working
*/
router.get("/test", (req, res) => {
  res.json({ message: "✅ API routes are working" });
});

export default router;
