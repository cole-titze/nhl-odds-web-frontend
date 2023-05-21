export function convertDecimalToPercentString(decimal: number): string {
  return (decimal * 100).toFixed(2) + "%";
}

export function convertDecimalToAmericanString(decimal: number): string {
  const percent = decimal * 100;
  let americanOdds = 0;
  if (percent < 50) americanOdds = 10000 / percent - 100;
  else if (percent >= 50) americanOdds = (100 * percent) / (percent - 100);

  return americanOdds.toFixed(2);
}
