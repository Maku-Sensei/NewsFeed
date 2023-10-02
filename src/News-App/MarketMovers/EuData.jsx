import Region from "./Region";
import Stocks from "./Stocks";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import intradayFetch from "../../fetch/MarketMovers/intradayFetch";
import getSymbols from "./getSymbols";
import ErrorBoundary from "../ErrorBoundary";

const EuData = () => {
  const categories = ["DE", "UK", "Tech"];
  const selectedCategory = useSelector((state) => state.europe.value);
  const symbols = getSymbols(selectedCategory, "Europe");
  const results = useQuery(["eodEuStocks", symbols], intradayFetch);
  if (results.isLoading) {
    return (
      <div className="text-white">
        <h1 className="text-lg font-semibold ">EUROPE</h1>
        <Region
          categories={categories}
          selectedCategory={selectedCategory}
          region={"EU"}
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
      <h1 className="text-lg font-semibold text-white">EUROPE</h1>
      <Region
        categories={categories}
        selectedCategory={selectedCategory}
        region={"Europe"}
      />

      <section>
        <Stocks data={sortedEodData} />
      </section>
    </div>
  );
};

const EuDataErrorBoundary = () => {
  return (
    <ErrorBoundary errorComponent={<h1>Something went wrong with EuData</h1>}>
      <EuData />
    </ErrorBoundary>
  );
};

export default EuDataErrorBoundary;
