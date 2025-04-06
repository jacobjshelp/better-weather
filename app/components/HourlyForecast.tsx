import { HOURS_IN_DAY } from "../constants";
import {
  getMockWeatherData,
  getWeatherData,
} from "../functions/getWeatherData";

export default async function HourlyForecast() {
  const { hourly } = await getMockWeatherData();
  const today = hourly.precipitation.slice(0, HOURS_IN_DAY)

  return (
    <div className="grid grid-cols-4 gap-4 h-full">
      {today.map((value, i) => {
        return (
          <div key={i} className="bg-blue-500">{value}</div>
        )
      })}
    </div>
  );
}
