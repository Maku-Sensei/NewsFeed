import IsAnyChecked from "./Context/IsAnyChecked.js";
import {
  handleCountryChange,
  handleCategoryChange,
  handleSourcesChange,
  handleEnterDown,
} from "./OptionsChange/handleChange.js";
import { useContext } from "react";
import ButtonGroup from "./ButtonGroup.jsx";
import TopNews from "./Context/TopNews.js";
import IsSources from "./Context/IsSources.js";
import IsPressed from "./Context/IsPressed.js";

const Options = ({ onParamsChange, params }) => {
  const [showAllNews, setShowAllNews] = useContext(IsAnyChecked);
  const [isTopNews, setIsTopNews] = useContext(TopNews);
  const [isSources, setSources] = useContext(IsSources);
  const [selectedButtons, setSelectedButtons] = useContext(IsPressed);
  const input = document.getElementById("search-news");

  const enableTopNewsButton = (boolean) => {
    setIsTopNews(boolean);
  };
  return (
    <div
      className="grid w-4/12 grid-cols-1 rounded-md p-5 text-center font-semibold text-black"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className=" grid grid-cols-3 justify-center gap-40 lg:gap-56">
        <aside className="flex flex-col items-start ">
          <label
            htmlFor="country"
            className="pl-1 text-sm font-bold text-gray-700"
          >
            {" "}
            Country{" "}
          </label>
          <select
            className="changeable-options"
            title="Country"
            disabled=""
            name="country"
            onChange={(event) => {
              handleCountryChange(
                onParamsChange,
                event,
                params,
                setSelectedButtons,
              );
              setShowAllNews(false);
              setSources(false);
              input.value = "";
              setIsTopNews(true);
            }}
            value={!isSources ? params.country : ""}
          >
            <option value=""></option>
            <option value="us">United States</option>
            <option value="de">Germany</option>
            <option value="gb">UK</option>
            <option value="ph">Philipines</option>
            <option value="jp">Japan</option>
            <option value="in"> India</option>
          </select>
        </aside>
        <aside className="flex flex-col items-start">
          <label
            htmlFor="category"
            className="pl-1 text-sm font-bold text-gray-700"
          >
            {" "}
            Category{" "}
          </label>
          <select
            disabled=""
            title="Category"
            className="changeable-options hover:content-['Hovering']"
            name="category"
            onChange={(event) => {
              handleCategoryChange(
                onParamsChange,
                event,
                params,
                setSelectedButtons,
              );
              setShowAllNews(false);
              setSources(false);
              input.value = "";
              setIsTopNews(true);
            }}
            value={!isSources ? params.category : ""}
          >
            <option value=""></option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="general">General</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </select>
        </aside>
        <aside className="flex flex-col items-start">
          <label
            htmlFor="sources"
            className="pl-1 text-sm font-bold text-gray-700"
          >
            {" "}
            Sources{" "}
          </label>
          <select
            title="Sources"
            name="sources"
            className="changeable-options"
            onChange={(event) => {
              handleSourcesChange(onParamsChange, event, setSelectedButtons);
              setShowAllNews(false);
              setSources(true);
              input.value = "";
              setIsTopNews(true);
            }}
            value={params.sources}
          >
            <option value=""></option>
            <option value="google-news">Google News</option>
            <option value="cnn">CNN</option>
            <option value="bbc-news">BBC News</option>
            <option value="fox-sports">Fox Sports</option>
            <option value="espn">ESPN</option>
            <option value="the-wall-street-journal"> WSJ </option>
            <option value="techcrunch">TechCrunch</option>
            <option value="abc-news">ABC</option>
            <option value="axios">Axios</option>
            <option value="the-times-of-india">India Times</option>
          </select>
        </aside>
      </div>
      <section className=" mt-1 w-60 md:ml-24 md:w-full">
        <input
          name="search"
          type="text"
          className=" mt-5 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 focus:border-blue-500 focus:outline-none"
          id="search-news"
          onKeyDown={(event) => {
            handleEnterDown(
              onParamsChange,
              event,
              enableTopNewsButton,
              setShowAllNews,
              setSelectedButtons,
            );
            input.defaultValue = "";
          }}
          defaultValue={params.q}
          placeholder="Press Enter to search for News"
        ></input>
      </section>
      <section className="ml-36">
        <ButtonGroup params={params} setParams={onParamsChange} input={input} />
      </section>
    </div>
  );
};

export default Options;
