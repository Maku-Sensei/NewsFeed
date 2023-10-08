import { configureStore } from "@reduxjs/toolkit";
import movie from "./ContentBox/Slice/Movie&Shows/movieSlice";
import topic from "./ContentBox/Slice/topicSlice";
import data from "./ContentBox/Slice/dataSlice";
import page from "./ContentBox/Slice/pageSlice";
import shows from "./ContentBox/Slice/Movie&Shows/showsSlice";
import randomMovieIndex from "./ContentBox/Slice/Movie&Shows/randomMovieIndexSlice";
import randomShowIndex from "./ContentBox/Slice/Movie&Shows/randomShowIndexSlice";
import books from "./ContentBox/Slice/Books/booksSlice";
import booksq from "./ContentBox/Slice/Books/booksQuerySlice";
import { booksInfoApi } from "../fetch/Books/BookInfoService";
import booksInfoId from "./ContentBox/Slice/Books/booksInfoIdSlice";
import booksInfo from "./ContentBox/Slice/Books/booksInfoSlice";
import { authorInfoApi } from "../fetch/Books/AuthorInfoService";
import authorInfoId from "./ContentBox/Slice/Books/authorInfoIdSlice";
import authorInfo from "./ContentBox/Slice/Books/authorInfoSlice";
import subjectq from "./ContentBox/Slice/Books/subjectQuerySlice";
import worksInfo from "./ContentBox/Slice/Books/worksInfoSlice";
import worksInfoId from "./ContentBox/Slice/Books/worksInfoIdSlice";
import { worksInfoApi } from "../fetch/Books/WorksInfoService";
import anime from "./ContentBox/Slice/Anime/animeSlice";
import drama from "./ContentBox/Slice/Drama/dramaSlice";
import usa from "./MarketMovers/Slice/usaSlice";
import europe from "./MarketMovers/Slice/europeSlice";
import china from "./MarketMovers/Slice/chinaSlice";
import { topStoriesApi } from "../fetch/TopStories/topStoriesService";
import { footballNewsApi } from "../fetch/FootballBox/FootballNewsService";
import language from "./languageSlice";
import { topStoriesDeApi } from "../fetch/TopStories/topStoriesDeService";
import { guardianNewsApi } from "../fetch/fetchGuardianNewsService";
import { NYTimesNewsApi } from "../fetch/fetchNYTNewsService";
import { tagesschauNewsApi } from "../fetch/tagesschauNewsService";

const store = configureStore({
  reducer: {
    //language
    language,

    //Guardian News
    [guardianNewsApi.reducerPath]: guardianNewsApi.reducer,
    //NYTimes News
    [NYTimesNewsApi.reducerPath]: NYTimesNewsApi.reducer,
    //Tageschau Main News
    [tagesschauNewsApi.reducerPath]: tagesschauNewsApi.reducer,

    //ContentBox
    movie,
    topic,
    data,
    page,
    shows,
    randomMovieIndex,
    randomShowIndex,
    //books
    books,
    //book search
    booksq,
    [booksInfoApi.reducerPath]: booksInfoApi.reducer,
    booksInfoId,
    booksInfo,
    [authorInfoApi.reducerPath]: authorInfoApi.reducer,
    authorInfoId,
    authorInfo,
    //books search by subject
    subjectq,
    [worksInfoApi.reducerPath]: worksInfoApi.reducer,
    worksInfo,
    worksInfoId,
    //anime
    anime,
    //Drama
    drama,

    //Market Movers
    usa,
    europe,
    china,

    //TopStories
    [topStoriesApi.reducerPath]: topStoriesApi.reducer,
    [topStoriesDeApi.reducerPath]: topStoriesDeApi.reducer,
    //FootballBox
    [footballNewsApi.reducerPath]: footballNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      booksInfoApi.middleware,
      authorInfoApi.middleware,
      worksInfoApi.middleware,
      topStoriesApi.middleware,
      footballNewsApi.middleware,
      topStoriesDeApi.middleware,
      guardianNewsApi.middleware,
      NYTimesNewsApi.middleware,
      tagesschauNewsApi.middleware,
    ),
});

export default store;
