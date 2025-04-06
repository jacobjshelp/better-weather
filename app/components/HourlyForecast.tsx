import { HOURS_IN_DAY, TORRENTIAL_RAIN } from "../constants";
import {
  getMockWeatherData,
  getWeatherData,
} from "../functions/getWeatherData";

export default async function HourlyForecast() {
  const { hourly } = await getMockWeatherData();
  const today = hourly.precipitation.slice(0, HOURS_IN_DAY);

  return (
    <div className="grid grid-cols-4 gap-4 h-full">
      {today.map((value, i) => {
        const percentageToFill = Number(((value / TORRENTIAL_RAIN) * 100).toFixed(0));
        const bar = Math.ceil(percentageToFill / 10) * 10

        let foo = `border-2 border-solid rounded-md border-cyan-500 flex items-center justify-center`
        if (bar) {
          foo += ` bg-gradient-to-t from-blue-500 to-${bar}%`
        }

        return (
          <div
            key={i}
            className={foo}
          >
            {value}mm
          </div>
        );
      })}
    </div>
  );
}
