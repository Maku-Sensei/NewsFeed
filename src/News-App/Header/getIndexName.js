const getIndexName = (ticker) => {
  switch (ticker) {
    case "DJI.INDX":
      return "Dow Jones";
    case "NDX.INDX":
      return "Nasdaq";
    case "TECDAX.INDX":
      return "Tec DAX";
    case "SDAXI.INDX":
      return "S DAX";
    case "GDAXI.INDX":
      return "DAX";
    case "RUT.INDX":
      return "Russell 2000";
    case "N225.INDX":
      return "Nikkei 225";
    case "SPY":
      return "S&P 500";
    case "HSI.INDX":
      return "Hang Seng";
  }
};
export default getIndexName;
