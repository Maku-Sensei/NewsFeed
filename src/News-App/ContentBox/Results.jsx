import MovieResults from "./Results/Movies&Shows/MovieResults";
import { useSelector } from "react-redux";
import ShowsResults from "./Results/Movies&Shows/ShowsResults";
import BooksResults from "./Results/Books/BooksResults";
import AnimeResults from "./Results/Anime/AnimeResults";
import DramaResults from "./Results/Drama/DramaResults";

const Results = () => {
  const topic = useSelector((state) => state.topic.value);

  switch (topic) {
    case "Movies":
      return <MovieResults />;
    case "Shows":
      return <ShowsResults />;
    case "Books":
      return <BooksResults />;
    case "Anime":
      return <AnimeResults />;
    case "Drama":
      return (
        <div className="mt-4 rounded-lg border border-black p-4">
          <DramaResults />
        </div>
      );

    default:
      return <h1> not yet done </h1>;
  }
};

export default Results;
