import reviewsMovieFetch from "../../fetch/Movie&Shows/reviewsFetch";
import { useQuery } from "@tanstack/react-query";
import Results from "./Results";
import ShowIsLoading from "./ShowIsLoading";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { changePage } from "./ButtonClicks/ArrowClick";
import Options from "./Options";
import {
  popularMovieFetch,
  upcomingMovieFetch,
  trendingMovieFetch,
} from "../../fetch/Movie&Shows/MovieFetch";
import MySwiper from "./Swiper";
import { useDispatch } from "react-redux";
import { setData } from "./Slice/dataSlice";
import ErrorBoundary from "../ErrorBoundary";
import setResults from "./setResults";
import {
  topRatedfetch,
  airingTodayFetch,
  popularShowsFetch,
} from "../../fetch/Movie&Shows/ShowsFetch";
import recommendationFetch, {
  getRandomId,
} from "../../fetch/Movie&Shows/recommendationFetch";
import { searchBooks, searchSubject } from "../../fetch/Books/booksFetch";
import {
  bestSellersFetch,
  businessBooksFetch,
} from "../../fetch/Books/booksFetch";
import {
  trendingAnimeFetch,
  trendingMangaFetch,
} from "../../fetch/Anime/animeFetch";
import dramaFetch from "../../fetch/Drama/dramaFetch";

const ContentBox = () => {
  const startingMovieIndex = useSelector(
    (state) => state.randomMovieIndex.value,
  );
  const startingShowIndex = useSelector((state) => state.randomShowIndex.value);
  const booksq = useSelector((state) => state.booksq.value);
  const subjectq = useSelector((state) => state.subjectq.value);
  const movieCategory = useSelector((state) => state.movie.value);
  const page = useSelector((state) => state.page.value);
  const showsCategory = useSelector((state) => state.shows.value);
  const topic = useSelector((state) => state.topic.value);
  const animeCategory = useSelector((state) => state.anime.value);
  const booksCategory = useSelector((state) => state.books.value);
  const dramaCategory = useSelector((state) => state.drama.value);
  const language = useSelector((state) => state.language.value);

  const randomMovieId = useQuery(
    ["randomMovieId", true, startingMovieIndex],
    getRandomId,
  );
  const randomShowId = useQuery(
    ["randomShowId", false, startingShowIndex],
    getRandomId,
  );

  const dispatch = useDispatch();

  //getLatest Movie and Show ID

  //Queries for Movies
  const resultsMovieReviews = useQuery(
    ["movieReviews", page - 1],
    reviewsMovieFetch,
  );
  const resultsMoviePopular = useQuery(
    ["moviePopular", page, language],
    popularMovieFetch,
  );
  const resultsMovieUpcoming = useQuery(
    ["movieUpcoming", page, language],
    upcomingMovieFetch,
  );
  const resultsMovieTrending = useQuery(
    ["movieTrending", page, language],
    trendingMovieFetch,
  );
  const resultsMovieRandom = useQuery(
    ["movieRandom", true, randomMovieId.data],
    recommendationFetch,
  );
  //Queries for TVShows
  const resultsTopRatedShows = useQuery(
    ["showsTopRated", page, language],
    topRatedfetch,
  );
  const resultsAiringTodayShows = useQuery(
    ["showsAiringToday", page, language],
    airingTodayFetch,
  );
  const resultsPopularShows = useQuery(
    ["showsPopular", page, language],
    popularShowsFetch,
  );
  const resultsRecommendedShows = useQuery(
    ["showsRecommended", false, randomShowId.data],
    recommendationFetch,
  );

  //Queries for Books
  const resultsSearch = useQuery(["searchBooks", page, booksq], searchBooks);
  const resultsSubject = useQuery(["searchSubject", subjectq], searchSubject);
  const resultsBestSellers = useQuery(["bestSellers"], bestSellersFetch);
  const resultsBusiness = useQuery(["businessBooks"], businessBooksFetch);

  //Queries for Anime
  const resultsAnimeTrending = useQuery(
    ["animeTrending", page - 1],
    trendingAnimeFetch,
  );
  const resultsMangaTrending = useQuery(
    ["mangaTrending", page - 1],
    trendingMangaFetch,
  );

  //Queries for Drama
  const resultsDrama = useQuery(
    ["KDrama", page, dramaCategory, language],
    dramaFetch,
  );

  //Arrays
  const categories = [
    movieCategory,
    showsCategory,
    booksCategory,
    animeCategory,
  ];
  const movieResults = [
    resultsMovieReviews,
    resultsMoviePopular,
    resultsMovieUpcoming,
    resultsMovieTrending,
    resultsMovieRandom,
  ];
  const showResults = [
    resultsTopRatedShows,
    resultsAiringTodayShows,
    resultsPopularShows,
    resultsRecommendedShows,
  ];
  const bookResults = [
    resultsSearch,
    resultsSubject,
    resultsBestSellers,
    resultsBusiness,
  ];
  const animeResults = [resultsAnimeTrending, resultsMangaTrending];
  const resultsArray = [
    movieResults,
    showResults,
    bookResults,
    animeResults,
    [resultsDrama],
  ];

  //Results
  let results, data;
  console.log("category", movieCategory);
  results = setResults(resultsArray, topic, categories);
  if (topic === "Movies") {
    if (movieCategory === "Reviews") {
      data = results?.data?.response?.docs ?? [];
    } else if (movieCategory === "Recommendations") {
      //prettier-ignore
      data = results?.data ?? [];
    } else {
      //prettier-ignore
      data = results?.data?.results ?? [];
    }
  } else if (topic === "Shows") {
    if (showsCategory === "Recommendations") {
      data = results?.data ?? [];
    } else {
      data = results?.data?.results ?? [];
    }
  } else if (topic === "Books") {
    if (booksCategory === "Subject") {
      data = results?.data?.works ?? [];
    } else if (booksCategory === "Search") {
      data = results?.data?.docs ?? [];
    } else {
      //Books from NYT API
      if (booksCategory === "Business") {
        //prettier-ignore
        data = results?.data?.results ?? [];
      } else {
        data = results?.data?.results?.lists ?? [];
      }
    }
  } else if (topic === "Anime") {
    data = results?.data ?? [];
  } else if (topic === "Drama") {
    data = results[0]?.data?.results ?? [];
  }
  console.log("results", results);
  console.log("dataContent", data);

  dispatch(setData(data));

  if (results.isLoading) {
    return <ShowIsLoading />;
  }

  return (
    <div className=" ml-7 mr-10 h-20 w-full rounded ring-2 ring-black">
      <nav className="mb-2">
        <div className="containerReviews">
          <div className="flex justify-between">
            <button
              className="h-8 w-8 cursor-pointer	 rounded-full"
              onClick={(e) => {
                e.preventDefault();
                changePage(false, dispatch, page);
              }}
            >
              <span className="arrow-icon-left"></span>
            </button>

            <div>
              <MySwiper page={page} />
            </div>
            <button
              className=" h-8 w-8 cursor-pointer rounded-full"
              onClick={(e) => {
                e.preventDefault();
                changePage(true, dispatch, page);
              }}
            >
              <span className="arrow-icon-right"></span>
            </button>
          </div>
          {/* next Line*/}
        </div>
      </nav>

      <Options />

      <section className="custom-scrollbar  h-[80vh] max-w-lg overflow-y-scroll">
        <Results />
      </section>
    </div>
  );
};

function ContentBoxErrorBoundary(props) {
  return (
    <ErrorBoundary
      errorComponent={<h1>Something went wrong with ContentBox</h1>}
    >
      <ContentBox {...props} />
    </ErrorBoundary>
  );
}

export default ContentBoxErrorBoundary;
