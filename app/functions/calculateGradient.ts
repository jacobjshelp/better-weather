import {
  RAIN_LOWER_LIMIT,
  RAINY_WEATHER_STYLE,
  SUNNY_WEATHER_STYLE,
  TORRENTIAL_RAIN,
} from "../constants";
import { clampNumber, roundUpToNearestTen } from "./mathUtils";

export default function calculateGradient(rainAmount: number) {
  const clampedAmount = clampNumber(
    rainAmount,
    RAIN_LOWER_LIMIT,
    TORRENTIAL_RAIN,
  );

  const gradientPercentage = (clampedAmount / TORRENTIAL_RAIN) * 100;
  const roundedUp = roundUpToNearestTen(gradientPercentage);

  const gradientClass =
    roundedUp !== 0
      ? `${RAINY_WEATHER_STYLE} from-${roundedUp}% to-${roundedUp}%`
      : SUNNY_WEATHER_STYLE;

  return gradientClass;
}
