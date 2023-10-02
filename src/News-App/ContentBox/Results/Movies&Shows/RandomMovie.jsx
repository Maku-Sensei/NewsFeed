import "./Random.css";
import MovieTMDB from "./MovieTMDB";
import Random from "./Random";
import { useContext } from "react";
import darkmode from "../../../Header/Darkmode";

const RandomMovie = (props) => {
  console.log("props", props);
  const { recommendations, language } = props;
  const [isDarkmode, setIsDarkmode] = useContext(darkmode);
  return (
    <div>
      <Random {...props} key={1} />
      {!recommendations.length ? null : (
        <section
          className={`${
            !isDarkmode
              ? `border-gray-400 bg-gray-100`
              : `border-yellow-500 bg-yellow-100 text-blue-800`
          } mt-4 rounded-lg border   p-4`}
        >
          <h1 className="text-2xl underline">Other Recommendations</h1>
          {recommendations.map((movie) => {
            return (
              <MovieTMDB
                title={movie.title}
                key={movie.id}
                rating={
                  movie.vote_average ? movie.vote_average : "no ratings yet"
                }
                img={movie.backdrop_path}
                language={movie.original_language}
                overview={movie.overview}
              />
            );
          })}
        </section>
      )}
    </div>
  );
};

export default RandomMovie;
