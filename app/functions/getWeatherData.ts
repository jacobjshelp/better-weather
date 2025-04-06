import fs from "node:fs/promises";
import { WeatherData } from "../types";

export async function getWeatherData(): Promise<WeatherData> {
  const response = await fetch(`${process.env.API_URL}/api/weather`);
  const data = (await response.json()) as WeatherData;
  return data;
}

export async function getMockWeatherData(): Promise<WeatherData> {
  const raw = await fs.readFile("./public/mockWeather.json", "utf-8");
  const weatherData = (await JSON.parse(raw)) as WeatherData;
  return weatherData;
}
