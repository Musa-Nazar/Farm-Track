function numberFormatter(value) {
  if (typeof value !== "number") return value;
  if (value >= 1000000) return `${(value / 1000000)?.toFixed(1)}M`;
  if (value >= 1000) return `${(value / 1000)?.toFixed(1)}K`;
  if (value <= -1000) return `${(value / 1000)?.toFixed(1)}K`;
  if (value <= -1000000) return `${(value / 1000000)?.toFixed(1)}M`;
  return value;
}
export function tickFormatter(value) {
  if (typeof value !== "number") return value;
  if (value >= 1000000) return `${value / 1000000}M`;
  if (value >= 1000) return `${value / 1000}K`;
  if (value <= -1000) return `${value / 1000}K`;
  if (value <= -1000000) return `${value / 1000000}M`;
  return value;
}

export default numberFormatter;
