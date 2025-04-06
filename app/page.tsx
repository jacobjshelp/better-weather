import Header from "./components/Header";
import HourlyForecast from "./components/HourlyForecast";

export default function Home() {
  return (
    <div className="h-dvh flex flex-col font-mono">
      <Header />
      <main className="h-8/10 w-9/10 mx-auto mb-4">
        <HourlyForecast />
      </main>
    </div>
  );
}
