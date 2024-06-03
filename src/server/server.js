import express from "express";
import fs from 'node:fs'

const app = express();

app.get("/api/healthcheck", async (req, res) => {
  res.json({ message: "The server is up and running!" });
});

app.get('/api/stats', async (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("./data/candy.json"));
    const { borough, candyCollected, name, sort, order } = req.query;
    let filteredData = data;

    if (name) {
      filteredData = filteredData.filter(person => person.name === name);
    }

    if (borough) {
      filteredData = filteredData.filter(person => person.borough === borough);
    }

    if (candyCollected) {
      filteredData = filteredData.map(person => {
        const filteredCandy = person.candy_collected.filter(candy => candy.name === candyCollected);
        return {
          ...person,
          candy_collected: filteredCandy
        };
      }).filter(person => person.candy_collected.length > 0);
    }

    if (sort) {
      filteredData = filteredData.sort((personA,personB)=> {
        const totalA = personA.candy_collected.reduce((acc, currValue) => {
          return acc + currValue.count;
        },0)

        const totalB = personB.candy_collected.reduce((acc, currValue) => {
          return acc + currValue.count;
        },0)

        if (totalA < totalB) {
          return 1;
        }
        if (totalA > totalB) {
          return -1;
        }
        return 0;
      });
    }

    res.json(filteredData);
  } catch (error) {
    console.error("Error parsing data:", error);
    res.status(500).send("Internal Server Error");
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(
    `Application started successfully! Express is listening on port ${port}.`
  );
});
