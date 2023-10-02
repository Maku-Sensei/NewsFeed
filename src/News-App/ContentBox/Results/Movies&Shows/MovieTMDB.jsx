const MovieRatings = (props) => {
  const { title, rating, img, overview, language } = props;
  const image = "https://image.tmdb.org/t/p/original/" + img;
  return (
    <div className="text-x1 grid grid-cols-1 border-b-2 pb-2 pl-1 pt-2">
      <div className="flex ">
        <h1 className="text-lg underline"> {title}</h1>
        <span className="py-0.1 m-1 cursor-cell rounded-full bg-beige px-2">
          {" "}
          {language[0].toUpperCase() + language[1]}{" "}
        </span>
      </div>
      <p className="font-movieshows text-sm"> {overview}</p>
      <div className="rating-badge">
        {img ? (
          <img
            src={image}
            alt={title + "poster"}
            className="rounded-md pt-5 shadow-lg"
          />
        ) : null}

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

export default MovieRatings;
