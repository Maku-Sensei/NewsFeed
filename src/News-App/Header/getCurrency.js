function getCurrencyFromTicker(ticker) {
  if (
    ticker === "DJI.INDX" ||
    ticker === "SPY" ||
    ticker === "NDX.INDX" ||
    ticker === "RUT.INDX"
  )
    return "USD";
  if (
    ticker === "TECDAX.INDX" ||
    ticker === "GDAXI.INDX" ||
    ticker === "SX5E.INDX"
  )
    return "EUR";
  if (ticker === "N225.INDX") return "JPY";
  if (ticker === "HSI.INDX") return "HKD";
}

export default getCurrencyFromTicker;
