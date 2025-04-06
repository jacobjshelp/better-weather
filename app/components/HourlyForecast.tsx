import {
  getMockWeatherData,
  getWeatherData,
} from "../functions/getWeatherData";

export default async function HourlyForecast() {
  const { hourly } = await getMockWeatherData();

  return (
    <div>
      <ul>
        {hourly.precipitation.map((value, i) => {
          return <li key={i}>{value}</li>;
        })}
      </ul>
    </div>
  );
}
