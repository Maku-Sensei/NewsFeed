import { NYTimesBreakingNewsKey } from "../../../../API_Keys/APIKeysNewsApp";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TopStoriesEnParams, TopStoriesEnResponse } from "./topStoriesTypes";

const startUrl = "https://api.nytimes.com/svc/topstories/v2/";

type TopStoriesEnResponseData = {
  results: TopStoriesEnResponse[];
};
export const topStoriesApi = createApi({
  reducerPath: "topStoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: startUrl }),
  endpoints: (builder) => ({
    getTopStories: builder.query<TopStoriesEnResponse[], TopStoriesEnParams>({
      query: (section) => `${section}.json?api-key=${NYTimesBreakingNewsKey}`,
      transformResponse: (response: TopStoriesEnResponseData) => {
        console.log(response);
        return response.results;
      },
    }),
  }),
});
export const { useGetTopStoriesQuery } = topStoriesApi;
