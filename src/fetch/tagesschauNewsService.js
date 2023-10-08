import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const startUrl = "https://www.tagesschau.de/api2u/";

export const tagesschauNewsApi = createApi({
  reducerPath: "tagesschauNews",
  baseQuery: fetchBaseQuery({ baseUrl: startUrl }),
  endpoints: (builder) => ({
    getAllNews: builder.query({
      query: () => `homepage`,
      transformResponse: (response) => {
        return response;
      },
    }),
    getDeNews: builder.query({
      query: ({ q, page }) =>
        `search/?searchText=${q}&pageSize=10&resultPage=${page}`,
      transformResponse: (response) => {
        return response.searchResults;
      },
    }),
  }),
});
export const { useGetAllNewsQuery, useGetDeNewsQuery } = tagesschauNewsApi;
