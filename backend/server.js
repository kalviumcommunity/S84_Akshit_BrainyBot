// backend/server.js
import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Health check route
app.get("/", (req, res) => {
  res.send("✅ Brainy Bot Backend Running...");
});

// Zero-shot prompting route
app.post("/api/zero-shot", async (req, res) => {
  const { paperText } = req.body;

  if (!paperText) {
    return res.status(400).json({ error: "Missing paperText" });
  }

  try {
    const startTime = Date.now();

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are an academic assistant. Summarize the given research paper in 3 parts:
1. Abstract (2-3 sentences)
2. Key insights (3 bullet points)
3. Citation in APA format

Text: ${paperText}`
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();
    const latency = Date.now() - startTime;

    res.json({
      ok: true,
      data: data,
      meta: { strategy: "zero-shot", latencyMs: latency }
    });
  } catch (error) {
    console.error("❌ Gemini API error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
