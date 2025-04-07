import { DAYS_IN_FORECAST, HOURS_IN_DAY } from "../constants";
import { DailyData, HourlyData, WeatherDataDTO } from "../types";

export default function splitIntoDays(
  weatherData: WeatherDataDTO
): DailyData[] {
  const { hourly: allHours } = weatherData;

  let allDays: DailyData[] = [];

  for (let i = 0; i < DAYS_IN_FORECAST; i++) {
    const startIndex = i * HOURS_IN_DAY;
    const dailyData: DailyData = [];

    for (let j = 0; j < HOURS_IN_DAY; j++) {
      const currentIndex = startIndex + j;
      const hourlyData: HourlyData = {
        precipitation: allHours.precipitation[currentIndex],
        precipitation_probability:
          allHours.precipitation_probability[currentIndex],
        time: allHours.time[currentIndex],
      };

      dailyData.push(hourlyData);
    }

    allDays.push(dailyData);
  }

  return allDays;
}
