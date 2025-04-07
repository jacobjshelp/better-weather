export type WeatherData = {
  hourly: HourlyData;
};

export type HourlyData = {
  precipitation_probability: number[];
  precipitation: number[];
}
