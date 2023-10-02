import { NYTimesBreakingNewsKey } from "../../../../API_Keys/APIKeysNewsApp";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const startUrl = "https://api.nytimes.com/svc/topstories/v2/";

export const topStoriesApi = createApi({
  reducerPath: "topStoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: startUrl }),
  endpoints: (builder) => ({
    getTopStories: builder.query({
      query: (section) => `${section}.json?api-key=${NYTimesBreakingNewsKey}`,
      transformResponse: (response) => {
        return response.results;
      },
    }),
  }),
});
export const { useGetTopStoriesQuery } = topStoriesApi;
