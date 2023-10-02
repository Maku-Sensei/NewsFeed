import { useDispatch } from "react-redux";
import { setShowsCategory } from "../Slice/Movie&Shows/showsSlice";
import { setPage } from "../Slice/pageSlice";
import { useSelector } from "react-redux";
import handleCategoryClick from "../ButtonClicks/handleCategoryClick";

const categories = ["Recommendations", "Top Rated", "Airing Today", "Popular"];

const ShowsCategorySelect = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.shows.value);

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
              dispatch(setShowsCategory(category)),
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

export default ShowsCategorySelect;
