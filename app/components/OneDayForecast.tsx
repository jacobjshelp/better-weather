import calculateGradient from "../functions/calculateGradient";
import { HourlyData, WeatherData } from "../types";

type OneDayForecastProps = {
  hourlyData: HourlyData
}

export default function OneDayForecast({ hourlyData }: OneDayForecastProps) {
  return (
    <div className="grid grid-cols-3 gap-4 h-full">
      {hourlyData.precipitation.map((value, i) => {
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
