const getSymbols = (category, region) => {
  if (region === "USA") {
    switch (category) {
      case "FAANG":
        return "MSFT,AAPL,AMZN,NFLX,GOOG";
      case "Popular":
        return "TSLA,PYPL,LCID,RIVN";
      case "Semiconductor":
        return "AMD,NVDA,INTC,AVGO,TSM,QCOM";
      case "Finance":
        return "JPM,BAC,WFC,C,GS,V,MS,MA";
    }
  }
  if (region === "Europe") {
    switch (category) {
      case "DE":
        return "SAP,ADDDF,DB";
      case "UK":
        return "RYAAY,VOD,EZJ,RYCEF";
      case "Tech":
        return "SAP,ASML";
    }
  }
  if (region === "China") {
    switch (category) {
      case "Tech":
        return "BABA,JD,BIDU,NTES,NIO";
    }
  }
};
export default getSymbols;
