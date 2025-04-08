import { roundUpToNearestTen } from "../app/functions/mathUtils";
import { expect, test } from "vitest";

test("rounding up 0 should be 0", () => {
  const result = roundUpToNearestTen(0);
  expect(result).toBe(0);
});

test("rounding up 1 should be 10", () => {
  const result = roundUpToNearestTen(1);
  expect(result).toBe(10);
});

test("rounding up 5 should be 10", () => {
  const result = roundUpToNearestTen(5);
  expect(result).toBe(10);
});

test("rounding up 6 should be 10", () => {
  const result = roundUpToNearestTen(6);
  expect(result).toBe(10);
});

test("rounding up 10.1 should be 20", () => {
  const result = roundUpToNearestTen(10.1);
  expect(result).toBe(20);
});
