import fetchNewsTopHeadlines from "../fetch/fetchTopNewsApi";
import fetchNewsEverything from "../fetch/fetchNewsEverything";
import { useQuery } from "@tanstack/react-query";
import Results from "./MainContent/Results";
import { useContext, useState } from "react";
import Options from "./MainContent/Options";
import IsAnyChecked from "./MainContent/Context/IsAnyChecked";
import ShowError from "./MainContent/ShowError";
import ShowIsLoading from "./MainContent/ShowIsLoading";
import ErrorBoundary from "./ErrorBoundary";
import ContentBox from "./ContentBox/ContentBox";
import Page from "./MainContent/Context/Page";
import MarketMovers from "./MarketMovers/MarketMovers";
import Header from "./Header/Header";
import FootballBox from "./FootballBox/FootballBox";
import TopStoriesSelect from "./TopStories/TopStoriesSelect";
import darkmode from "./Header/Darkmode";

const Newsfeed = () => {
  //light/dark mode
  const [isDarkmode, setDarkmode] = useContext(darkmode);
  !isDarkmode
    ? document.body.classList.add("light")
    : document.body.classList.remove("light");
  const [isHide, setHide] = useState(false);

  const [page, setPage] = useContext(Page);
  const [requestParams, setRequestParams] = useState({
    country: "us",
    category: "business",
    sources: "",
    q: "",
  });
  const [showAllNews, setShowAllNews] = useContext(IsAnyChecked);

  //Query
  const resultsTop = useQuery(
    ["newsTop", requestParams, page],
    fetchNewsTopHeadlines,
  );
  const resultsAny = useQuery(
    ["newsAny", requestParams, page],
    fetchNewsEverything,
  );
  const results = showAllNews ? resultsAny : resultsTop;
  const changeParams = (params) => {
    setRequestParams(params);
  };

  //IsLoading
  if (results.isLoading) {
    return (
      <ShowIsLoading
        changeParams={changeParams}
        requestParams={requestParams}
      />
    );
  }

  //No Options Selected
  if (results.isError) {
    return results.error.message ===
      "Cannot read properties of null (reading 'ok')" ? (
      <ShowError
        setRequestParams={setRequestParams}
        requestParams={requestParams}
        changeParams={changeParams}
      />
    ) : (
      <div className="error-pane">
        <h2 className="text-center">Error</h2>
      </div>
    );
  }

  const data = results?.data?.articles ?? [];

  //Page
  return (
    <div>
      <header>
        <Header setNewsParams={setRequestParams} />
      </header>
      <div style={{ height: "67px" }}></div> {/* Spacer with desired height */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {/*Selectable Options*/}
        <div className={`${!isHide ? `container` : `container-nocontent`}`}>
          {/*className="col-span-2 mb-10 mt-2 flex flex-col items-center justify-center"*/}
          <section id="top-stories">
            <TopStoriesSelect />
          </section>
          <section id="football-box">
            <FootballBox />
          </section>

          <section id="options">
            <Options onParamsChange={changeParams} params={requestParams} />
          </section>
          {/*Content*/}
          {/*className="flex flex-row justify-around"*/}
          <section className="hide-content-box fixed">
            <button
              onClick={() => {
                setHide(!isHide);
              }}
            >
              {" "}
              {isHide ? "Show" : "Hide"}
            </button>
          </section>
          {isHide ? null : (
            <section id="content-box">
              <ContentBox />
            </section>
          )}

          <section id="main-news">
            <Results news={data} />
          </section>
          <section id="market-movers">
            <MarketMovers />
          </section>
        </div>
      </form>
    </div>
  );
};

function NewsfeedErrorBoundary(props) {
  return (
    <ErrorBoundary errorComponent={<h1>Something went wrong with Newsfeed</h1>}>
      <Newsfeed {...props} />
    </ErrorBoundary>
  );
}

export default NewsfeedErrorBoundary;
