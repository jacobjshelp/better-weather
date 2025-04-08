import ForecastCarousel from "./components/ForecastCarousel";
import Header from "./components/Header";
import { getMockWeatherData } from "./functions/getWeatherData";
import mapToDailyData from "./functions/mapToDailyData";

export default async function Home() {
  const weatherData = await getMockWeatherData();
  const allDays = mapToDailyData(weatherData);

  return (
    <div className="h-dvh flex flex-col font-mono">
      <Header />
      <main className="h-9/10 w-full mx-auto">
        <ForecastCarousel allDays={allDays} />
      </main>
    </div>
  );
}
