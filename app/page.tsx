import Header from "./components/Header";
import OneDayForecast from "./components/OneDayForecast";
import { HOURS_IN_DAY } from "./constants";
import { getMockWeatherData } from "./functions/getWeatherData";

export default async function Home() {
  const weatherData = await getMockWeatherData();
  // const { hourly } = weatherData;
  // const todaysPrecipitation = hourly.precipitation.slice(0, HOURS_IN_DAY);

  return (
    <div className="h-dvh flex flex-col font-mono">
      <Header />
      <main className="h-8/10 w-9/10 mx-auto mb-4">

        <OneDayForecast oneDayWeatherData={weatherData} />
      </main>
    </div>
  );
}
