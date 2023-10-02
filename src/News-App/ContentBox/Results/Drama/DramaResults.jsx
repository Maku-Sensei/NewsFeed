import { useSelector } from "react-redux";
import ShowsTMDB from "../Movies&Shows/ShowsTMDB";

const DramaResults = () => {
  const data = useSelector((state) => state.data.value);
  return (
    <div>
      {!data.length ? (
        <h1>Too Fast, Loading...</h1>
      ) : (
        data.map((show) => {
          return (
            <ShowsTMDB
              img={show.backdrop_path}
              key={show.id}
              rating={show.vote_average ? show.vote_average : "no ratings yet"}
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
};

export default DramaResults;
