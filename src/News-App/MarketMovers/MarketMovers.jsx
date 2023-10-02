import UsData from "./UsData";
import EuData from "./EuData";
import ChinaData from "./ChinaData";

const MarketMovers = () => {
  return (
    <div>
      <h1 className="border-b-8 text-2xl">Market Movers</h1>
      <div className="mt-3 flex flex-row flex-wrap gap-6 text-black">
        <section>
          <UsData />
        </section>
        <section>
          <EuData />
        </section>
        <section>
          <ChinaData />
        </section>
      </div>
    </div>
  );
};

export default MarketMovers;
