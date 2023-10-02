const setResults = (fetchResults, topic, categories) => {
  //Categories
  const movieCategory = categories[0];
  const showsCategory = categories[1];
  const booksCategory = categories[2];
  const animeCategory = categories[3];

  //Fetch Queries
  const movieFetch = fetchResults[0];
  const showsFetch = fetchResults[1];
  const booksFetch = fetchResults[2];
  const animeFetch = fetchResults[3];
  const dramaFetch = fetchResults[4];

  switch (topic) {
    case "Movies":
      switch (movieCategory) {
        case "Reviews":
          return movieFetch[0];

        case "Popular":
          return movieFetch[1];

        case "Upcoming":
          return movieFetch[2];

        case "Trending":
          return movieFetch[3];
        case "Recommendations":
          return movieFetch[4];
      }
      break;
    case "Shows":
      switch (showsCategory) {
        case "Top Rated":
          return showsFetch[0];
        case "Airing Today":
          return showsFetch[1];
        case "Popular":
          return showsFetch[2];
        case "Recommendations":
          return showsFetch[3];
      }
      break;
    case "Books":
      switch (booksCategory) {
        case "Search":
          return booksFetch[0];
        case "Subject":
          return booksFetch[1];
        case "Best Sellers":
          return booksFetch[2];
        case "Business":
          return booksFetch[3];
      }
      break;
    case "Anime":
      switch (animeCategory) {
        case "Anime":
          return animeFetch[0];
        case "Manga":
          return animeFetch[1];
      }
      break;
    case "Drama":
      return dramaFetch;
  }
};

export default setResults;
