import cors from "cors";
import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json({ limit: "1mb" }));

// Placeholder data until scraping/analysis pipeline is added.
const snapshots = [
  {
    url: "https://example.com",
    lastChecked: "2024-01-01T00:00:00Z",
    summary: "Homepage parsed; 3 key links extracted.",
    metrics: { links: 14, images: 6, words: 350 }
  },
  {
    url: "https://news.example.com",
    lastChecked: "2024-01-02T12:00:00Z",
    summary: "Detected 5 new articles in the last run.",
    metrics: { articles: 5, authors: 4 }
  }
];

app.get("/health", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.get("/snapshots", (_req, res) => {
  res.json({ data: snapshots });
});

app.post("/scrape", (req, res) => {
  const { url } = req.body ?? {};

  if (!url || typeof url !== "string") {
    return res.status(400).json({ error: "Provide a url string in the request body." });
  }

  // TODO: enqueue scrape job (e.g., Playwright/cheerio) and persist result.
  return res.json({ status: "queued", url, note: "Replace with real scraping + analysis." });
});

app.listen(PORT, () => {
  console.log(`API ready on port ${PORT}`);
});
