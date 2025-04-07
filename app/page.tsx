import ForecastCarousel from "./components/ForecastCarousel";
import Header from "./components/Header";
import { DAYS_IN_FORECAST } from "./constants";
import { getMockWeatherData } from "./functions/getWeatherData";
import splitIntoDays from "./functions/splitIntoDays";

export default async function Home() {
  const weatherData = await getMockWeatherData();
  const allDays = splitIntoDays(weatherData, DAYS_IN_FORECAST)

  return (
    <div className="h-dvh flex flex-col font-mono">
      <Header />
      <main className="h-8/10 w-9/10 mx-auto mb-4">
        <ForecastCarousel allDays={allDays} />
      </main>
    </div>
  );
}
