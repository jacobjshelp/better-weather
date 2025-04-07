import { HOURS_IN_DAY } from "../constants";
import calculateGradient from "../functions/calculateGradient";
import { WeatherData } from "../types";

type OneDayForecastProps = {
  oneDayWeatherData: WeatherData
}

export default async function OneDayForecast({ oneDayWeatherData: weatherData }: OneDayForecastProps) {
  const { hourly } = weatherData;
  const todaysPrecipitation = hourly.precipitation.slice(0, HOURS_IN_DAY);

  return (
    <div className="grid grid-cols-3 gap-4 h-full">
      {todaysPrecipitation.map((value, i) => {
        const gradient = calculateGradient(value)

        return (
          <div
            key={i}
            className={`border-2 border-solid rounded-md border-cyan-100 flex items-center justify-center ${gradient}`}
          >
            {value}mm
          </div>
        );
      })}
    </div>
  );
}
