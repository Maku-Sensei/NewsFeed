import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const startUrl = "https://www.tagesschau.de/api2u/news/";

export const topStoriesDeApi = createApi({
  reducerPath: "topStoriesDe",
  baseQuery: fetchBaseQuery({ baseUrl: startUrl }),
  endpoints: (builder) => ({
    getTopStoriesDe: builder.query({
      query: (section) => `?regions=7,3&ressort=${section}`,
      transformResponse: (response) => {
        return response.news;
      },
    }),
  }),
});
export const { useGetTopStoriesDeQuery } = topStoriesDeApi;
