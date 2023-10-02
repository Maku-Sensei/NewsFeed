import { useSelector } from "react-redux";

const AnimeResults = () => {
  const data = useSelector((state) => state.data.value);
  console.log(data);
  return (
    <div className="text-x1 mt-3 grid grid-cols-1 rounded-xl border-2  border-black pb-2 pl-1">
      {!data.data.length ? (
        <h1> No Results </h1>
      ) : (
        data.data.map((anime) => {
          const attributes = anime.attributes;
          const {
            canonicalTitle,
            averageRating,
            description,
            episodeCount,
            ratingRank,
            status,
            startDate,
            ageRatingGuide,
          } = attributes;
          const img = attributes?.coverImage?.original ?? "";
          //Tailwind classes for status of the show
          const statusClass =
            status === "finished" ? "text-red-500" : "text-green-500";

          return (
            <div
              key={anime.id}
              className="text-x1 grid grid-cols-1 border-b-2 border-gray-500 pb-4 pt-4"
            >
              <div className="flex justify-between gap-2">
                <h1 className="text-xl font-bold"> {canonicalTitle} </h1>

                <h2 className="text-lg">
                  {" "}
                  {episodeCount ? episodeCount + " Episodes" : null}
                </h2>
                <h2 className="text-lg"> {startDate} </h2>
              </div>
              {img ? (
                <img
                  src={img}
                  alt={"cover photo of " + canonicalTitle}
                  className="rounded-lg object-cover shadow-md"
                />
              ) : null}

              <section className="mb-2">
                <p> {description} </p>
              </section>
              <h2 className="rating-label">
                {" "}
                Rating:{" "}
                <div className="rating-value">
                  {averageRating >= 70 ? (
                    <span className="good">{averageRating}</span>
                  ) : averageRating >= 40 ? (
                    <span className="mid">{averageRating}</span>
                  ) : (
                    <span className="bad">{averageRating}</span>
                  )}{" "}
                </div>
              </h2>
              <h2> {ageRatingGuide}</h2>
              {!ratingRank ? null : <h2> Rating Rank: {ratingRank} </h2>}

              <h2 className={statusClass}> {status} </h2>
            </div>
          );
        })
      )}
    </div>
  );
};

export default AnimeResults;
