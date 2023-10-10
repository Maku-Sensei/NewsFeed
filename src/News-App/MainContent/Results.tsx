import News from "./News";
import areAllPropertiesNull from "../../general methods/ObjectProperties";
import { useContext } from "react";
import Page from "./Context/Page";

let nullIdCounter = 0; // Counter for null IDs

const generateUniqueKey = (source, publishedAt) => {
  const sourceId =
    source && source.id ? source.id : `default-${nullIdCounter++}`;
  return `${sourceId}-${publishedAt}`;
};

const Results = ({ news }) => {
  const [page, setPage] = useContext(Page);
  return (
    <div>
      {!news.length ? (
        <h1>No News Found</h1>
      ) : (
        news.map((article) => {
          if (areAllPropertiesNull(article) || article.title === "[Removed]") {
            return null;
          }
          const uniqueKey = generateUniqueKey(
            article.source.id,
            article.publishedAt,
          );
          return (
            <News
              title={article.title}
              source={article.source}
              key={uniqueKey}
              description={article.description}
              url={article.url}
              imageUrl={article.urlToImage ? article.urlToImage : ""}
              publishedAt={article.publishedAt}
              content={article.content}
              author={article.author}
            />
          );
        })
      )}

      <div className=" ml-70 flex justify-end pr-28  md:mr-14 xl:ml-0">
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
