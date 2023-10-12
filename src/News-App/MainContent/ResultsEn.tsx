import { useContext } from "react";
import Page from "./Context/Page";
import { useGetNewsQuery } from "../../fetch/fetchNYTNewsService";
import News from "./News";
import Section from "./Context/Section";
import NewsQuery from "./Context/NewsQuery";
import NextPage from "./NextPage";
import { NewsProps } from "../../fetch/NewsAPIResponsesTypes";

const ResultsEn = () => {
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
  if (typeof dataNYTimes === "undefined") {
    return <div>Loading...</div>;
  }
  console.log("dataNYTimes", dataNYTimes);
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
            byline,
            source: name,
            abstract: description,
            web_url: url,
            multimedia,
            _id: id,
          } = news;
          const imageUrl = multimedia[0]?.url ?? "";
          console.log("imageUrl", imageUrl);
          const { main: title } = headline;
          const props: NewsProps = {
            title: title,
            description: description,
            url: url,
            imageUrl: imageUrl,
            name: name,
            author: byline?.original ?? "",
            language: "en",
          };

          // Corrected return statement
          return (
            <div key={id}>
              <News {...props} />
            </div>
          );
        })
      )}
      <NextPage />
    </div>
  );
};
export default ResultsEn;
