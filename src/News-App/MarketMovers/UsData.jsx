import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import ErrorBoundary from "../ErrorBoundary";
import intradayFetch from "../../fetch/MarketMovers/intradayFetch";
import Stocks from "./Stocks";
import getSymbols from "./getSymbols";
import Region from "./Region";

const UsData = () => {
  const categories = ["FAANG", "Popular", "Semiconductor", "Finance"];
  const selectedCategory = useSelector((state) => state.usa.value);
  const symbols = getSymbols(selectedCategory, "USA");
  const results = useQuery(["eodUsStocks", symbols], intradayFetch);
  if (results.isLoading) {
    return (
      <div className="text-white">
        <h1 className="text-lg font-semibold ">US</h1>
        <Region
          categories={categories}
          selectedCategory={selectedCategory}
          region={"USA"}
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
      <h1 className="font-semiboldtext-white text-lg text-white ">US</h1>
      <Region
        categories={categories}
        selectedCategory={selectedCategory}
        region={"USA"}
      />

      <section>
        <Stocks data={sortedEodData} />
      </section>
    </div>
  );
};

const UsDataErrorBoundary = () => {
  return (
    <ErrorBoundary errorComponent={<h1>Something went wrong with UsData</h1>}>
      <UsData />
    </ErrorBoundary>
  );
};
export default UsDataErrorBoundary;
