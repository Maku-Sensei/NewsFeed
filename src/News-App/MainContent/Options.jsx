import { useContext } from "react";
import ButtonGroup from "./ButtonGroup.jsx";
import NewsQuery from "./Context/NewsQuery";

const Options = () => {
  const [q, setQ] = useContext(NewsQuery);
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
          onKeyDown={(event) => {
            if (event.key === `Enter`) {
              setQ(event.target.value);
            }
          }}
          placeholder="Press Enter to search News"
        ></input>
      </section>
      <section className="ml-36">
        <ButtonGroup />
      </section>
    </div>
  );
};

export default Options;
