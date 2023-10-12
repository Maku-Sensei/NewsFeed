import { useGetLeagueNewsQuery } from "../../fetch/FootballBox/FootballNewsService";
import { Link } from "react-router-dom";

const BundesLigaNews = () => {
  const { isLoading: bundesLigaLoading, data: bundesLigaData } =
    useGetLeagueNewsQuery({ q: "bundesliga", size: 3 });
  if (bundesLigaLoading) return <h1>Loading...</h1>;
  if (!bundesLigaData) return <h1>Nothing Found</h1>;
  return (
    <div>
      {!bundesLigaData.length ? null : (
        <div className="grid h-96 grid-cols-2 grid-rows-2 gap-y-44">
          {bundesLigaData.map((article, index) => {
            const { fields, id } = article;
            const { headline, shortUrl: url, thumbnail } = fields;
            const isBigColumn = index === 0;
            return (
              <div
                key={id}
                className={` ${isBigColumn ? "col-span-2" : "col-span-1"}`}
              >
                <Link to={url} target="_blank">
                  <div
                    className={`${
                      isBigColumn ? "h-70" : "h-50"
                    } relative flex transform flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-transform hover:scale-105`}
                  >
                    <img
                      src={thumbnail}
                      alt={"Thumbnail of Guardian Article" + id}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <h1
                      className={`${
                        isBigColumn ? "p-2 text-xl" : "p-0 text-sm"
                      } absolute bottom-0 left-0 w-full bg-slate-400 text-center font-extrabold text-black opacity-70`}
                    >
                      {headline}
                    </h1>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BundesLigaNews;
