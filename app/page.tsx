import HourlyForecast from "./components/HourlyForecast";

export default function Home() {
  return (
    <div className="h-dvh flex">
      <main className="h-9/10 w-9/10 mx-auto my-auto">
        <HourlyForecast />
      </main>
    </div>
  );
}
