import ForecastCarousel from "./components/ForecastCarousel";
import Header from "./components/Header";
import { getMockWeatherData } from "./functions/getWeatherData";
import splitIntoDays from "./functions/splitIntoDays";

export default async function Home() {
  const weatherData = await getMockWeatherData();
  const allDays = splitIntoDays(weatherData);

  return (
    <div className="h-dvh flex flex-col font-mono">
      <Header />
      <main className="h-9/10 w-9/10 mx-auto">
        <ForecastCarousel allDays={allDays} />
      </main>
    </div>
  );
}
