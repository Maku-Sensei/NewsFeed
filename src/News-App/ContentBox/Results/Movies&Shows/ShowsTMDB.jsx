import darkmode from "../../../Header/Darkmode";
import { useContext } from "react";

const ShowsTMDB = (props) => {
  const { img, rating, name, overview, language, date } = props;
  const image = "https://image.tmdb.org/t/p/original/" + img;
  const [isDarkmode, setDarkmode] = useContext(darkmode);
  return (
    <div className="text-x1 grid grid-cols-1 border-b-2 pb-2 pl-1 pt-2">
      <div className="flex ">
        <h1 className="text-lg underline"> {name}</h1>
        <span className="ml-2 text-xs">({date.slice(0, 4)})</span>
        <span className="py-0.1 m-1 cursor-cell rounded-full bg-beige px-2">
          {" "}
          {language[0].toUpperCase() + language[1]}{" "}
        </span>
      </div>
      <p className="font-movieshows text-sm"> {overview}</p>

      <div
        className={!isDarkmode ? "rating-badge-dark " : "rating-badge-light"}
      >
        {img ? (
          <img
            src={image}
            alt={name + "poster"}
            className="rounded-md pt-5 shadow-lg"
          />
        ) : null}
        {}
        <ul className="rating">
          <li>
            <span className="rating-label">Rating:</span>
          </li>
          <li>
            <div className="rating-value">
              {rating >= 7 ? (
                <span className="good">{rating}</span>
              ) : rating >= 4 ? (
                <span className="mid">{rating}</span>
              ) : (
                <span className="bad">{rating}</span>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ShowsTMDB;
