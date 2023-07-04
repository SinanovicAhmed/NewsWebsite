import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());

app.get("/*", async (req: Request, res: Response) => {
  const query = { ...req.query } as Record<string, any>;
  const queryParams = new URLSearchParams(query);
  let url = "";
  if (req.path === "/current.json") {
    url = `${process.env.WEATHER_URL}${req.path}?${queryParams.toString()}&key=${
      process.env.WEATHER_API_TOKEN
    }`;
  } else {
    url = `${process.env.NEWS_URL}${req.path}?${queryParams.toString()}&apiKey=${
      process.env.NEWS_API_TOKEN
    }`;
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json({ response: data });
  } catch (error) {
    res.json({ error: error });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
