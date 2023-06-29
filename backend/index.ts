import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { IWeatherResponse } from "../src/interfaces/weather";
import { ITopNewsResponse } from "../src/interfaces/news";
dotenv.config();
const app = express();

app.get("/top-news", async (req: Request, res: Response) => {
  const url = `${process.env.TOP_NEWS_URL}?apiKey=${process.env.NEWS_API_TOKEN}&country=${req.query.country}`;
  try {
    const response = await fetch(url);
    const data: ITopNewsResponse = await response.json();
    res.json({ response: data });
  } catch (error) {
    res.json({ error: error });
  }
});

app.get("/news-everything", async (req: Request, res: Response) => {
  const url = `${process.env.EVERYTHING_NEWS_URL}?apiKey=${process.env.NEWS_API_TOKEN}
  &q=${req.query.q}&language=${req.query.language}&sortBy=${req.query.sortBy}`;
  try {
    const response = await fetch(url);
    const data: ITopNewsResponse = await response.json();
    res.json({ response: data });
  } catch (error) {
    res.json({ error: error });
  }
});

app.get("/weather", async (req: Request, res: Response) => {
  const url = `${process.env.WEATHER_URL}?key=${process.env.WEATHER_API_TOKEN}&q=${req.query.q}&aqi=no`;
  try {
    const response = await fetch(url);
    const data: IWeatherResponse = await response.json();
    res.json({ response: data });
  } catch (error) {
    res.json({ error: error });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
