import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import intradayFetch from "../../fetch/MarketMovers/intradayFetch";
import getSymbols from "./getSymbols";
import Region from "./Region";
import Stocks from "./Stocks";
import ErrorBoundary from "../ErrorBoundary";

const ChinaData = () => {
  const categories = ["Tech"];
  const selectedCategory = useSelector((state) => state.china.value);
  const symbols = getSymbols(selectedCategory, "China");
  const results = useQuery(["eodEsStocks", symbols], intradayFetch);
  if (results.isLoading) {
    return (
      <div className="text-white">
        <h1 className="text-lg font-semibold ">CHINA</h1>
        <Region
          categories={categories}
          selectedCategory={selectedCategory}
          region={"China"}
        />
        <h1>Loading...</h1>
      </div>
    );
  }

  const data = results?.data?.data ?? [];
  const sortedEodData = {};
  data.forEach((object) => {
    if (!sortedEodData[object.symbol]) {
      // If it doesn't exist, create an empty array for that symbol
      sortedEodData[object.symbol] = [];
    }
    sortedEodData[object.symbol].push(object);
  });
  return (
    <div>
      <h1 className="text-lg font-semibold text-white">CHINA</h1>
      <Region
        categories={categories}
        selectedCategory={selectedCategory}
        region={"China"}
      />

      <section>
        <Stocks data={sortedEodData} />
      </section>
    </div>
  );
};
const ChinaDataErrorBoundary = () => {
  return (
    <ErrorBoundary
      errorComponent={<h1>Something went wrong with ChinaData</h1>}
    >
      <ChinaData />
    </ErrorBoundary>
  );
};
export default ChinaDataErrorBoundary;
