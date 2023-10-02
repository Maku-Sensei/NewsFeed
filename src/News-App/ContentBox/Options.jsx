import MovieCategorySelect from "./CategorySelect/MovieCategorySelect";
import { useSelector } from "react-redux";
import ShowsCategorySelect from "./CategorySelect/ShowsCategorySelect";
import BooksCategorySelect from "./CategorySelect/BooksCategorySelect";
import AnimeCategorySelect from "./CategorySelect/AnimeCategorySelect";
import DramaCategorySelect from "./CategorySelect/DramaCategorySelect";

const Options = () => {
  const topic = useSelector((state) => state.topic.value);
  switch (topic) {
    case "Movies":
      return <MovieCategorySelect />;
    case "Shows":
      return <ShowsCategorySelect />;
    case "Books":
      return <BooksCategorySelect />;
    case "Anime":
      return <AnimeCategorySelect />;
    case "Drama":
      return <DramaCategorySelect />;
    default:
      return <h1> not yet done </h1>;
  }
};
export default Options;
