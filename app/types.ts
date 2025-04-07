export type WeatherDataDTO = {
  hourly: {
    precipitation_probability: number[];
    precipitation: number[];
    time: string[];
  };
};

export type DailyData = HourlyData[];

export type HourlyData = {
  precipitation_probability: number;
  precipitation: number;
  time: string;
};
