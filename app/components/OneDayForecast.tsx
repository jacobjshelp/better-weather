import calculateGradient from "../functions/calculateGradient";
import { HourlyData, WeatherDataDTO } from "../types";
import OneHourForecast from "./OneHourForecast";

type OneDayForecastProps = {
  dataForOneDay: HourlyData[];
};

export default function OneDayForecast({ dataForOneDay }: OneDayForecastProps) {
  return (
    <div className="grid grid-cols-3 gap-x-2 gap-y-6 h-9/10">
      {dataForOneDay.map((hour, i) => {
        const gradient = calculateGradient(hour.precipitation);
        const precipitation =
          hour.precipitation !== 0 ? `${hour.precipitation.toFixed()}mm` : "";
        const probability =
          hour.precipitation !== 0 ? `${hour.precipitation_probability}%` : "";
        const time = hour.time.split("T")[1];

        return (
          <OneHourForecast
            key={i}
            precipitation={precipitation}
            probability={probability}
            gradient={gradient}
            time={time}
          />
        );
      })}
    </div>
  );
}
