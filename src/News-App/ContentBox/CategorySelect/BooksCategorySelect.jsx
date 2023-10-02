import handleCategoryClick from "../ButtonClicks/handleCategoryClick";
import { useSelector, useDispatch } from "react-redux";
import { setBooksCategory } from "../Slice/Books/booksSlice";
import { setPage } from "../Slice/pageSlice";

const categories = ["Search", "Subject", "Best Sellers", "Business"];

const BooksCategorySelect = () => {
  const selectedCategory = useSelector((state) => state.books.value);
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
              dispatch(setBooksCategory(category), dispatch(setPage(1))),
            )
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
};
export default BooksCategorySelect;
