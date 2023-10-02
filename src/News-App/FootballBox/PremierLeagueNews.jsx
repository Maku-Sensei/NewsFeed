import { useGetLeagueNewsQuery } from "../../fetch/FootballBox/FootballNewsService";
import { Link } from "react-router-dom";

const PremierLeagueNews = () => {
  const { isLoading: premierLeagueLoading, data: premierLeagueData } =
    useGetLeagueNewsQuery({ q: "premier-league", size: 4 });
  if (premierLeagueLoading) return <h1>Loading...</h1>;
  return (
    <div className="mt-10">
      {!premierLeagueData.length ? null : (
        <div className=" grid grid-cols-2 gap-2">
          {premierLeagueData.map((article) => {
            const { fields, id } = article;
            const { headline, shortUrl: url, thumbnail } = fields;
            return (
              <div
                key={id}
                className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-transform hover:scale-105"
              >
                <Link to={url} target="_blank">
                  <h1 className="absolute bottom-0 left-0 bg-slate-400  text-sm font-extrabold text-black opacity-80">
                    {headline}
                  </h1>
                  <img
                    src={thumbnail}
                    alt={"Thumbnail of Guardian Article" + id}
                    style={{ width: "100%", height: "auto" }}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default PremierLeagueNews;
