import {
  gainOrLossInPercantage,
  actualGainOrLoss,
} from "../../general methods/gainOrLoss";
import getCompanyName from "./getCompanyName";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import StockChart from "./StockChart";

const Stocks = ({ data }) => {
  const latestData = {};

  for (const ticker in data) {
    const stock = data[ticker];
    const targetDate = new Date(stock[0].date).toISOString().split("T")[0];
    latestData[ticker] = stock.filter((sdata) => {
      const objectDate = new Date(sdata.date).toISOString().split("T")[0];
      return objectDate === targetDate;
    });
  }

  return (
    <ol>
      {Object.keys(latestData).map((ticker, index) => {
        const close = latestData[ticker][0].close;
        const open = latestData[ticker][latestData[ticker].length - 1].open;
        const symbol = ticker;

        const actualGain = actualGainOrLoss(open, close);
        const percentageGain = gainOrLossInPercantage(open, close);
        const name = getCompanyName(symbol);
        const gain = open < close;

        return (
          <li
            key={ticker}
            className={`flex justify-between ${
              index % 2 === 0 ? "bg-gray-300" : "bg-white"
            } p-5`}
          >
            <section>
              <h1 className="font-semibold">{symbol.split(".")[0]}</h1>
              <h2>{name}</h2>
            </section>
            <section className="ml-1 w-60">
              <StockChart dataChart={latestData[ticker]} />
            </section>
            <section className="flex flex-col flex-nowrap items-end">
              <h2 className=" font-semibold">
                {close}
                <FontAwesomeIcon
                  icon={faDollarSign}
                  beat
                  style={{ color: "#050505" }}
                  size="sm"
                  className="ml-1"
                />
              </h2>

              <h2 className={gain ? " text-green-600" : " text-red-700"}>
                {gain ? "+" : ""}
                {actualGain} ( {gain ? "+" : ""}
                {percentageGain})
              </h2>
            </section>
          </li>
        );
      })}
    </ol>
  );
};

export default Stocks;
