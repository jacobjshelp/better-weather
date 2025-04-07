import { HOURS_IN_DAY } from "../constants";
import calculateGradient from "../functions/calculateGradient";
import {
  getMockWeatherData,
} from "../functions/getWeatherData";

export default async function HourlyForecast() {
  const { hourly } = await getMockWeatherData();
  const todaysPrecipitation = hourly.precipitation.slice(0, HOURS_IN_DAY);

  return (
    <div className="grid grid-cols-4 gap-4 h-full">
      {todaysPrecipitation.map((value, i) => {
        const gradient = calculateGradient(value)

        return (
          <div
            key={i}
            className={`border-2 border-solid rounded-md border-cyan-500 flex items-center justify-center ${gradient}`}
          >
            {value}mm
          </div>
        );
      })}
    </div>
  );
}
