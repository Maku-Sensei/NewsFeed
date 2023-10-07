import { useContext } from "react";
import Page from "./Context/Page";
import { useGetNewsQuery } from "../../fetch/fetchNYTNewsService";
import News from "./News";
import Section from "./Context/Section";
import NewsQuery from "./Context/NewsQuery";

const Results = () => {
  const [section, setSection] = useContext(Section);
  const [q, setQ] = useContext(NewsQuery);
  const [page, setPage] = useContext(Page);
  const { isLoading: isLoadingNYTimes, data: dataNYTimes } = useGetNewsQuery({
    q: q,
    page: page,
    section: section.length ? section[0] : "",
  });
  if (isLoadingNYTimes) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {!dataNYTimes.length ? (
        <div>
          <h1>No results</h1>
        </div>
      ) : (
        dataNYTimes.map((news) => {
          const {
            headline,
            byLine,
            source: name,
            abstract: description,
            web_url: url,
            multimedia,
            _id: id,
          } = news;
          const imageUrl = multimedia[0]?.url;
          const { main: title } = headline;
          const props = {
            title: title,
            description: description,
            url: url,
            imageUrl: imageUrl,
            name: name,
            author: byLine?.author ?? "",
          };
          console.log("props", props);

          // Corrected return statement
          return (
            <div key={id}>
              <News {...props} />
            </div>
          );
        })
      )}
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
    </div>
  );
};
export default Results;
