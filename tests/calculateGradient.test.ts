import { RAINY_WEATHER_STYLE, SUNNY_WEATHER_STYLE } from "../app/constants";
import calculateGradient from "../app/functions/calculateGradient";
import { expect, test } from "vitest";

test("calculating gradient for 0mm precipitation should return sunny weather style", () => {
  const result = calculateGradient(0);
  expect(result).toBe(SUNNY_WEATHER_STYLE);
});

// 14/30 = 0.466 = 46.6% which rounds up to 50%
test("calculating gradient for 14mm precipitation should return 50% gradient fill", () => {
  const result = calculateGradient(14);
  expect(result).toBe(`${RAINY_WEATHER_STYLE} from-50% to-50%`);
});

// 1/30 = 0.03 = 3% which rounds up to 10%
test("calculating gradient for 1mm precipitation should return 10% gradient fill", () => {
  const result = calculateGradient(1);
  expect(result).toBe(`${RAINY_WEATHER_STYLE} from-10% to-10%`);
});
