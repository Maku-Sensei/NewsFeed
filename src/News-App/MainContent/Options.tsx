import { useContext } from "react";
import ButtonGroup from "./ButtonGroup.js";
import NewsQuery from "./Context/NewsQuery.js";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Options = () => {
  const [q, setQ] = useContext(NewsQuery);
  const language = useSelector((state: RootState) => state.language.value);
  return (
    <div
      className="grid w-4/12 grid-cols-1 rounded-md p-5 text-center font-semibold text-black"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <section className=" w-60 md:ml-24 md:w-full">
        <input
          name="search"
          type="text"
          className=" mt-5 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 focus:border-blue-500 focus:outline-none"
          id="search-news"
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === `Enter`) {
              const newValue = (event.target as HTMLInputElement).value;
              setQ(newValue);
            }
          }}
          placeholder="Press Enter to search News"
        ></input>
      </section>
      {language === "en" ? (
        <section className="ml-36">
          <ButtonGroup />
        </section>
      ) : null}
    </div>
  );
};

export default Options;
