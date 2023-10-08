import Results from "./MainContent/Results";
import { useContext, useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import ContentBox from "./ContentBox/ContentBox";
import MarketMovers from "./MarketMovers/MarketMovers";
import Header from "./Header/Header";
import FootballBox from "./FootballBox/FootballBox";
import TopStoriesSelect from "./TopStories/TopStoriesSelect";
import darkmode from "./Header/Darkmode";
import Options from "./MainContent/Options";

const Newsfeed = () => {
  //light/dark mode
  const [isDarkmode, setDarkmode] = useContext(darkmode);
  !isDarkmode
    ? document.body.classList.add("light")
    : document.body.classList.remove("light");
  const [isHide, setHide] = useState(false);
  console.log(isHide);
  //Newsfeed
  return (
    <div>
      <header>
        <Header />
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

          {/*Content*/}
          {/*className="flex flex-row justify-around"*/}
          <section className="hide-content-box fixed">
            <button
              type="button"
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
            <section id="options">
              <Options />
            </section>
            <Results />
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
