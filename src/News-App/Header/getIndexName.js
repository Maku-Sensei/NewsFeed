const getIndexName = (ticker) => {
  switch (ticker) {
    case "DJI.INDX":
      return "DowJones";
    case "NDX.INDX":
      return "Nasdaq";
    case "TECDAX.INDX":
      return "TecDAX";
    case "SDAXI.INDX":
      return "SDAX";
    case "GDAXI.INDX":
      return "DAX";
    case "RUT.INDX":
      return "Russell 2000";
    case "N225.INDX":
      return "Nikkei 225";
    case "SPY":
      return "S&P500";
    case "HSI.INDX":
      return "Hang Seng";
  }
};
export default getIndexName;
