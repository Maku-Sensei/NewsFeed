export const gainOrLossInPercantage = (open, close) => {
  const difference = close - open;
  const percentage = (difference / open) * 100;
  return percentage.toFixed(2);
};

export const actualGainOrLoss = (open, close) => {
  const difference = close - open;
  return difference.toFixed(2);
};
