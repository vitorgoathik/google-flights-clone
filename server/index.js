import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Proxy: searchAirport
app.get('/api/search-airport', async (req, res) => {
  const { query } = req.query;
  try {
    const response = await fetch(
      `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport?query=${encodeURIComponent(query)}&locale=en-US`,
      {
        headers: {
          'X-RapidAPI-Key': process.env.VITE_RAPID_API_KEY,
          'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
        },
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch airports' });
  }
});

// Proxy: searchFlights
app.get('/api/search-flights', async (req, res) => {
  const { originEntityId, originSkyId, destinationEntityId, date } = req.query;
  try {
    const url = `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights?originEntityId=${originEntityId}&originSkyId=${originSkyId}&destinationEntityId=${destinationEntityId}&date=${date}`;
    const response = await fetch(url, {
      headers: {
        'X-RapidAPI-Key': process.env.VITE_RAPID_API_KEY,
        'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
      },
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch flights' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});