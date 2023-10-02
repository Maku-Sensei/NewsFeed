import { setRandomMovieIndex } from "../../Slice/Movie&Shows/randomMovieIndexSlice";
import { setRandomShowIndex } from "../../Slice/Movie&Shows/randomShowIndexSlice";
import "./Random.css";
import { useDispatch, useSelector } from "react-redux";
import "font-awesome/css/font-awesome.min.css";

const Random = (props) => {
  const dispatch = useDispatch();
  const topic = useSelector((state) => state.topic.value);
  const randomMovieIndex = useSelector((state) => state.randomMovieIndex.value);
  const randomShowIndex = useSelector((state) => state.randomShowIndex.value);
  const {
    img,
    genres,
    title,
    overview,
    runtime,
    status,
    rating,
    language,
    providers,
    date,
    episodes,
    seasons,
  } = props;
  const image = "https://image.tmdb.org/t/p/w400/" + img;
  const logo = "https://image.tmdb.org/t/p/original";
  let vendors = [];
  if (providers.DE) {
    vendors = providers.DE.buy
      ? providers.DE.buy
      : providers.DE.rent
      ? providers.DE.rent
      : providers.DE.ads
      ? providers.DE.ads
      : providers.DE.flatrate
      ? providers.DE.flatrate
      : [];
  }

  return (
    <div className="pb-2 pl-1 pt-2 text-xs">
      <section className="rounded-lg border border-black p-4">
        <div className="flex justify-between">
          <div className="flex-start flex flex-nowrap gap-2">
            <h1 className="text-lg underline"> {title}</h1>
            {seasons ? (
              <h1 className="text-lg text-pink-600"> {seasons}S.</h1>
            ) : null}
            {episodes ? (
              <h1 className="text-lg text-indigo-500">{episodes}Ep. </h1>
            ) : null}
          </div>
          <div className="buttons">
            <button
              onClick={() => {
                topic === "Movies"
                  ? dispatch(setRandomMovieIndex(randomMovieIndex + 1))
                  : dispatch(setRandomShowIndex(randomShowIndex + 1));
              }}
              className="btn btn-link"
            >
              <i className="fa fa-refresh" aria-hidden="true">
                <span className="text-base">Refresh </span>
              </i>
            </button>
          </div>
        </div>
        <p className="text-xs	"> {overview}</p>
        <div className="random-badge text-yellow-900">
          <section className="grid grid-cols-2">
            {img ? (
              <img
                src={image}
                alt={title + " poster"}
                className="mb-2 rounded-md pt-5 shadow-lg"
              />
            ) : null}
            {vendors.length === 0 ? null : (
              <div className="m-5 flex flex-row flex-wrap gap-3">
                {/* Check if vendors is empty, and if so, return null */}
                {vendors.map((provider) => (
                  <a href={providers.DE.link} key={provider.provider_id}>
                    <img
                      src={logo + provider.logo_path}
                      alt={"Logo of " + provider.provider_name}
                      className="h-10 w-10 rounded-md shadow-lg"
                    />
                  </a>
                ))}
              </div>
            )}
          </section>

          <section className="flex justify-start">
            {date ? (
              <span className="cursor-cell rounded-full bg-indigo-500	px-1 py-0 pr-1  text-base font-bold text-white">
                {date}
              </span>
            ) : null}

            {genres
              ? genres.map((genre) => (
                  <span
                    className="mb-1 mr-1 cursor-cell rounded-full bg-blue-500 px-2 py-0 text-white hover:bg-blue-700 "
                    key={genre.id}
                  >
                    {genre.name}
                  </span>
                ))
              : null}
            <span className="py-0.1 mb-1 cursor-cell rounded-full bg-beige px-2">
              {" "}
              {language[0].toUpperCase() + language[1]}{" "}
            </span>
          </section>
          <ul className="flex flex-wrap justify-between text-sm">
            <li>
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
            </li>
            {
              <li>
                {" "}
                <span className="runtime">Runtime:</span>
                <div className="random-movie-runtime">
                  {runtime} <span className="pl-0">min</span>
                </div>
              </li>
            }
            <li>
              <span className="text-mg font-bold	">status:</span>

              <span
                style={{
                  fontWeight: "bold",
                  color:
                    status === "Released"
                      ? "#17B169"
                      : status === "Returning Series"
                      ? "orange"
                      : "#FF0000",
                }}
              >
                {status}
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Random;
