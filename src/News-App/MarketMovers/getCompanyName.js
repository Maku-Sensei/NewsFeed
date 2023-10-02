const getCompanyName = (symbol) => {
  switch (symbol) {
    //US

    case "AAPL":
      return "Apple";
    case "AMZN":
      return "Amazon";
    case "NFLX":
      return "Netflix";
    case "GOOG":
      return "Google";
    case "TSLA":
      return "Tesla";
    case "MSFT":
      return "Microsoft";
    case "PYPL":
      return "PayPal";
    case "AMD":
      return "AMD";
    case "NVDA":
      return "Nvidia";
    case "INTC":
      return "Intel";
    case "AVGO":
      return "Broadcom";
    case "TSM":
      return "TSMC";
    case "QCOM":
      return "Qualcomm";
    case "JPM":
      return "JP Morgan";
    case "BAC":
      return "Bank of America";
    case "WFC":
      return "Wells Fargo";
    case "C":
      return "Citigroup";
    case "GS":
      return "Goldman Sachs";
    case "V":
      return "Visa";
    case "MS":
      return "Morgan Stanley";
    case "MA":
      return "Mastercard";

    //Europe

    case "ADDDF":
      return "Adidas";
    case "DB":
      return "DB";
    case "SAP":
      return "SAP";

    case "RYAAY":
      return "Ryanair";
    case "VOD":
      return "Vodafone";
    case "EZJ":
      return "EasyJet";
    case "RYCEF":
      return "Rolls-Royce";

    case "ASML":
      return "ASML";

    //China
    case "BABA":
      return "Alibaba";
    case "JD":
      return "JD.com";
    case "BIDU":
      return "Baidu";
    case "NTES":
      return "NetEase";
    case "NIO":
      return "NIO";
    default:
      return null;
  }
};
export default getCompanyName;
