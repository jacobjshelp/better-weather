import calculateGradient from "../functions/calculateGradient";
import { HourlyData, WeatherDataDTO } from "../types";

type OneDayForecastProps = {
  dataForOneDay: HourlyData[];
};

export default function OneDayForecast({ dataForOneDay }: OneDayForecastProps) {
  return (
    <div className="grid grid-cols-3 gap-2 h-full">
      {dataForOneDay.map((hour, i) => {
        const gradient = calculateGradient(hour.precipitation);
        const precipitation =
          hour.precipitation !== 0 ? `${hour.precipitation.toFixed()}mm` : "";
        const probability =
          hour.precipitation !== 0 ? `${hour.precipitation_probability}%` : "";

        return (
          <div
            key={i}
            className={`p-[2px] border-2 border-solid rounded-md border-cyan-100 grid grid-cols-2 grid-rows-3 text-sm ${gradient}`}
          >
            <div className="text-left">{precipitation}</div>
            <div className="text-right">{probability}</div>

            <div className="flex col-span-2 items-center justify-center font-bold">
              {hour.time.split("T")[1]}
            </div>

            <div className="flex items-end"></div>
            <div className="flex items-end ml-auto"></div>
          </div>
        );
      })}
    </div>
  );
}
