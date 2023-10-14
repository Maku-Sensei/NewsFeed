import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TopStoriesDeResponse, TopStoriesDeParams } from "./topStoriesTypes";

const startUrl = "https://www.tagesschau.de/api2u/news/";

type TopStoriesEnResponseData = {
  news: TopStoriesDeResponse[];
};

export const topStoriesDeApi = createApi({
  reducerPath: "topStoriesDe",
  baseQuery: fetchBaseQuery({ baseUrl: startUrl }),
  endpoints: (builder) => ({
    getTopStoriesDe: builder.query<TopStoriesDeResponse[], TopStoriesDeParams>({
      query: (section) => `?regions=7,3&ressort=${section}`,
      transformResponse: (response: TopStoriesEnResponseData) => {
        console.log(response);
        return response.news;
      },
    }),
  }),
});
export const { useGetTopStoriesDeQuery } = topStoriesDeApi;
