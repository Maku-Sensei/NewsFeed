import MovieReviews from "./MovieReviews";
import { useSelector } from "react-redux";
import MovieTMDB from "./MovieTMDB";
import RandomMovie from "./RandomMovie";

const MovieResults = () => {
  const movieCategory = useSelector((state) => state.movie.value);
  const data = useSelector((state) => state.data.value);

  switch (movieCategory) {
    case "Reviews":
      return (
        <div className="mt-4 rounded-lg border border-black p-4">
          {!data.length ? (
            <h1>Too Fast, Loading...</h1>
          ) : (
            data.map((review) => {
              let id;
              const idString = review._id;
              const regex = /nyt:\/\/article\/([a-f0-9-]+)/;
              const match = idString.match(regex);
              id = match ? match[1] : idString;

              return (
                <MovieReviews
                  headline={review.headline.main}
                  key={id}
                  abstract={review.abstract}
                  snippet={review.snippet}
                  web_url={review.web_url}
                  image={review.multimedia[47].url}
                />
              );
            })
          )}
        </div>
      );
    case "Recommendations":
      return (
        <div className="mt-4 ">
          <RandomMovie
            key={data.id}
            genres={data.genres}
            language={data.original_language}
            title={data.title}
            overview={data.overview}
            runtime={data.runtime}
            status={data.status}
            rating={data.vote_average}
            img={data.backdrop_path}
            recommendations={data.recommendations.results}
            //prettier-ignore
            //eslint-disable-next-line
            providers={data["watch/providers"].results}
            date={data.release_date}
          />
        </div>
      );
    default:
      return (
        <div className="mt-4 rounded-lg border border-black p-4">
          {!data.length ? (
            <h1>Too Fast, Loading...</h1>
          ) : (
            data.map((movie) => {
              return (
                <MovieTMDB
                  title={movie.title}
                  key={movie.id}
                  rating={
                    movie.vote_average ? movie.vote_average : "no ratings yet"
                  }
                  img={movie.backdrop_path}
                  overview={movie.overview}
                  language={movie.original_language}
                />
              );
            })
          )}
        </div>
      );
  }
};

export default MovieResults;
