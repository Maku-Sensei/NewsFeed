import { useDispatch, useSelector } from "react-redux";
import handleCategoryClick from "../ButtonClicks/handleCategoryClick";
import { setAnimeCategory } from "../Slice/Anime/animeSlice";
import { setPage } from "../Slice/pageSlice";

const AnimeCategorySelect = () => {
  const categories = ["Anime", "Manga"];
  const selectedCategory = useSelector((state) => state.anime.value);
  const dispatch = useDispatch();

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
              dispatch(setAnimeCategory(category), dispatch(setPage(1))),
            )
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
};
export default AnimeCategorySelect;
