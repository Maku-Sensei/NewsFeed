import { useContext } from "react";
import Page from "./Context/Page";

const NextPage = () => {
  const [page, setPage] = useContext(Page);
  return (
    <div className=" ml-70 mr-2 flex justify-end pr-28 md:mr-14 xl:ml-0 xl:mr-0">
      <button
        className="round-button"
        onClick={() => {
          setPage(1);
        }}
      >
        Page 1
      </button>
      <button
        className="round-button"
        onClick={() => {
          setPage(2);
        }}
      >
        Page 2
      </button>
      <button
        className="round-button"
        onClick={() => {
          setPage(3);
        }}
      >
        Page 3
      </button>
      <button
        id="next-button"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next Page
      </button>
    </div>
  );
};
export default NextPage;
