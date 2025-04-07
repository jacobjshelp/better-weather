import { HourlyData, WeatherData } from "../types";

export default function splitIntoDays(weatherData: WeatherData, split: number): HourlyData[] {
  const { hourly: allHours } = weatherData

  let result: HourlyData[] = []

  for (let i = split; i > 0; i--) {
    const hourlyData: HourlyData = {
      precipitation: allHours.precipitation.splice(0, Math.ceil(allHours.precipitation.length / i)),
      precipitation_probability: allHours.precipitation_probability.splice(0, Math.ceil(allHours.precipitation_probability.length / i))
    }
    result.push(hourlyData)
  }

  return result;
}
