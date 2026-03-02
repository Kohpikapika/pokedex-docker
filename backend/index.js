import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => res.json({ ok: true }));

// 最小：PokeAPIを叩いてそのまま返す（整形しない。Dockerが主役なので）
app.get("/api/pokemon/:name", async (req, res) => {
  try {
    const name = req.params.name.toLowerCase();
    const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!r.ok) return res.status(404).json({ error: "not_found" });
    const data = await r.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: "server_error" });
  }
});

const port = process.env.PORT ?? 3000;
app.listen(port, () => console.log(`backend listening on ${port}`));