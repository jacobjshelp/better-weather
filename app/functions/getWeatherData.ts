import fs from "node:fs/promises";
import { WeatherDataDTO } from "../types";

export async function getWeatherData(): Promise<WeatherDataDTO> {
  const response = await fetch(`${process.env.API_URL}/api/weather`);
  const data = (await response.json()) as WeatherDataDTO;
  return data;
}

export async function getMockWeatherData(): Promise<WeatherDataDTO> {
  const raw = await fs.readFile("./public/mockWeather.json", "utf-8");
  const weatherData = (await JSON.parse(raw)) as WeatherDataDTO;
  return weatherData;
}
