export function clampNumber(value: number, min: number, max: number) {
  const clampedValue = Math.max(
    Math.min(value, Math.max(min, max)),
    Math.min(min, max),
  );

  return clampedValue;
}

export function roundUpToNearestTen(value: number) {
  return Math.ceil(value / 10) * 10;
}
