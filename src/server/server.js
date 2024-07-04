import express from "express";
import getBoroughs from "./getBoroughs.js";

const app = express();

app.get("/api/healthcheck", async (req, res) => {
  res.json({ message: "The server is up and running!" });
});

app.get('/api/stats', async (req, res) => {
  try {
    const boroughs = getBoroughs();
    res.json(boroughs);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(
    `Application started successfully! Express is listening on port ${port}.`
  );
});
