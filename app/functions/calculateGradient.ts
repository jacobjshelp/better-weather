import { TORRENTIAL_RAIN } from "../constants";

export default function calculateGradient(rainAmount: number) {
  const gradientPercentage = (rainAmount / TORRENTIAL_RAIN) * 100
  const roundedToTen = Math.ceil(Number(gradientPercentage) / 10) * 10
  const gradientClass = roundedToTen !== 0 ? `bg-gradient-to-t from-blue-500 to-${roundedToTen}%` : 'bg-yellow-500'
  return gradientClass
}