import { useDispatch, useSelector } from "react-redux";
import { setDramaCategory } from "../Slice/Drama/dramaSlice";
import { setPage } from "../Slice/pageSlice";
import handleCategoryClick from "../ButtonClicks/handleCategoryClick";

const categories = ["K-Drama", "C-Drama"];

const DramaCategorySelect = () => {
  const selectedCategory = useSelector((state) => state.drama.value);
  const dispatch = useDispatch();
  return (
    <div className="text-sms flex justify-evenly gap-2">
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
              dispatch(setDramaCategory(category), dispatch(setPage(1))),
            )
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
};
export default DramaCategorySelect;
