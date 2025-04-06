import HourlyForecast from "./components/HourlyForecast";

export default function Home() {
  return (
    <div className="h-dvh flex flex-col font-mono">
      <header className="min-h-2/10 flex items-center justify-center">
        <h1>
          Better weather
        </h1>
      </header>
      <main className="h-8/10 w-9/10 mx-auto mb-4">
        <HourlyForecast />
      </main>
    </div>
  );
}
