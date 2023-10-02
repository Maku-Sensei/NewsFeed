import Options from "./Options";
import ContentBox from "../ContentBox/ContentBox";
import MarketMovers from "../MarketMovers/MarketMovers";
import FootballBox from "../FootballBox/FootballBox";
import TopStoriesSelect from "../TopStories/TopStoriesSelect";

const ShowIsLoading = ({ changeParams, requestParams }) => {
  return (
    <form>
      {/*Selectable Options*/}
      <div className="container">
        <section id="top-stories">
          <TopStoriesSelect />
        </section>
        <section id="Football-box">
          <FootballBox />
        </section>
        {/*className="col-span-2 mb-10 mt-2 flex flex-col items-center justify-center"*/}
        <section id="options">
          <Options onParamsChange={changeParams} params={requestParams} />
        </section>

        {/*Content*/}
        {/*className="flex flex-row justify-around"*/}

        <section id="content-box">
          <ContentBox />
        </section>

        {/* News Results Loading */}
        <section id="main-news">
          <div>Loading...</div>
        </section>
        <section id="market-movers">
          <MarketMovers />
        </section>
      </div>
    </form>
  );
};

export default ShowIsLoading;
