import "./Random.css";
import ShowsTMDB from "./ShowsTMDB";
import Random from "./Random";
import { useContext } from "react";
import darkmode from "../../../Header/Darkmode";

const RandomShow = (props) => {
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
          {recommendations.map((show) => {
            return (
              <ShowsTMDB
                img={show.backdrop_path}
                date={show.first_air_date}
                key={show.id}
                rating={
                  show.vote_average ? show.vote_average : "no ratings yet"
                }
                overview={show.overview}
                name={show.name}
                language={show.original_language}
              />
            );
          })}
        </section>
      )}
    </div>
  );
};

export default RandomShow;
