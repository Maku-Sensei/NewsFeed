export const gainOrLossInPercantage = (open: number, close: number) => {
  const difference = close - open;
  const percentage = (difference / open) * 100;
  return percentage.toFixed(2);
};

export const actualGainOrLoss = (open: number, close: number) => {
  const difference = close - open;
  return difference.toFixed(2);
};
