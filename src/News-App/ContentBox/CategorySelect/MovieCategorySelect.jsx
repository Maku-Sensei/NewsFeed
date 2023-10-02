import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Slice/Movie&Shows/movieSlice";
import { setPage } from "../Slice/pageSlice";
import handleCategoryClick from "../ButtonClicks/handleCategoryClick";

const categories = [
  "Recommendations",
  "Reviews",
  "Trending",
  "Popular",
  "Upcoming",
];

const MovieCategorySelect = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.movie.value);

  return (
    <div className="flex justify-evenly gap-2 text-xs">
      {categories.map((category) => (
        <button
          key={category}
          className={`${
            selectedCategory === category
              ? "opacity-100"
              : "underline opacity-80"
          }`}
          onClick={() =>
            handleCategoryClick(
              category,
              dispatch(setCategory(category)),
              dispatch(setPage(1)),
            )
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default MovieCategorySelect;
