import { clampNumber } from "../app/functions/mathUtils";
import { expect, test } from "vitest";

test("clamping negative value between 0 and 30 should return 0", () => {
  const result = clampNumber(-1, 0, 30);
  expect(result).toBe(0);
});

test("clamping value above 30 with min 0 and max 30 should return 30", () => {
  const result = clampNumber(45, 0, 30);
  expect(result).toBe(30);
});

test("clamping value between min 0 and max 30 should return original value", () => {
  const result = clampNumber(15, 0, 30);
  expect(result).toBe(15);
});
