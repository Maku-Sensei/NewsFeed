import { setUsCategory } from "./Slice/usaSlice";
import { useDispatch } from "react-redux";
import { setEuCategory } from "./Slice/europeSlice";
import { setCnCategory } from "./Slice/chinaSlice";

const Region = ({ categories, selectedCategory, region }) => {
  const dispatch = useDispatch();
  return (
    <ol className=" inline list-none space-x-1">
      {categories.map((category) => (
        <li className="inline-block" key={category}>
          <button
            onClick={() => {
              switch (region) {
                case "USA":
                  dispatch(setUsCategory(category));
                  break;
                case "Europe":
                  dispatch(setEuCategory(category));
                  break;
                case "China":
                  dispatch(setCnCategory(category));
                  break;
              }
            }}
            className={
              selectedCategory === category
                ? "font-semibold text-blue-800"
                : "text-gray-600"
            }
          >
            {category}
          </button>
        </li>
      ))}
    </ol>
  );
};
export default Region;
