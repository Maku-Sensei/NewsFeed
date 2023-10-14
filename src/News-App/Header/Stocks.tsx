import { useQuery } from "@tanstack/react-query";
import {
  actualGainOrLoss,
  gainOrLossInPercantage,
} from "../../general methods/gainOrLoss";
import stockFetch from "../../fetch/MarketMovers/stockFetch";
import getIndexName from "./getIndexName";
import getCurrencyFromTicker from "./getCurrency";
import CurrencyIcon from "./CurrencyIcon";
import { StockHeaderAPIResponse } from "./HeaderTypes";

const Stocks = () => {
  const symbols = [
    "DJI.INDX,SPY,NDX.INDX,RUT.INDX,TECDAX.INDX,GDAXI.INDX,SDAXI.INDX,N225.INDX,HSI.INDX",
  ];
  const results = useQuery<StockHeaderAPIResponse>(
    ["headerStocks", symbols],
    stockFetch,
  );
  const data = results.data?.data ?? [];
  return data.map((index) => {
    const { open, close, symbol } = index;
    const actualGain = actualGainOrLoss(open, close);
    const percentageGain = gainOrLossInPercantage(open, close);
    const idx = getIndexName(symbol);
    const gain = open < close;
    const currency = getCurrencyFromTicker(symbol);
    return (
      <div
        key={symbol}
        className="flex text-xxxs sm:text-xs md:text-sm 2xl:text-base"
      >
        <h1 className="pr-1">{idx}</h1>
        <h2 className={gain ? " text-green-500" : " text-red-700"}>
          {close}
          <CurrencyIcon currency={currency} />
          {gain ? "+" : ""}
          {actualGain} ( {gain ? "+" : ""}
          {percentageGain})
        </h2>
      </div>
    );
  });
};
export default Stocks;
