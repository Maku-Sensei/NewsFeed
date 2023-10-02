import { useSelector } from "react-redux";
import ShowsTMDB from "./ShowsTMDB";
import RandomShow from "./RandomShows";

const ShowsResults = () => {
  const data = useSelector((state) => state.data.value);
  const showsCategory = useSelector((state) => state.shows.value);
  console.log("data", data);

  switch (showsCategory) {
    case "Recommendations":
      return (
        <div className="mt-4 ">
          <RandomShow
            key={data.id}
            genres={data.genres}
            language={data.original_language}
            title={data.name}
            overview={data.overview}
            runtime={data.episode_run_time[0]}
            episodes={data.number_of_episodes}
            seasons={data.number_of_seasons}
            status={data.status}
            rating={data.vote_average}
            img={data.backdrop_path}
            recommendations={data.recommendations.results}
            //prettier-ignore
            //eslint-disable-next-line
            providers={data["watch/providers"].results}
            date={data.first_air_date}
          />
        </div>
      );

    default:
      return (
        <div className="mt-4 rounded-lg border border-black p-4">
          {!data.length ? (
            <h1>Too Fast, Loading...</h1>
          ) : (
            data.map((show) => {
              return (
                <ShowsTMDB
                  img={show.backdrop_path}
                  key={show.id}
                  rating={
                    show.vote_average ? show.vote_average : "no ratings yet"
                  }
                  overview={show.overview}
                  name={show.name}
                  language={show.original_language}
                  date={show.first_air_date}
                />
              );
            })
          )}
        </div>
      );
  }
};

export default ShowsResults;
