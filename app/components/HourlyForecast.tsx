import { HOURS_IN_DAY } from "../constants";
import {
  getMockWeatherData,
  getWeatherData,
} from "../functions/getWeatherData";

export default async function HourlyForecast() {
  const { hourly } = await getMockWeatherData();
  const today = hourly.precipitation.slice(0, HOURS_IN_DAY)

  return (
    <div>
      <ul>
        {today.map((value, i) => {
          return <li key={i}>{value}</li>;
        })}
      </ul>
    </div>
  );
}
