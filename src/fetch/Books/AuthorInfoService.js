import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const startUrl = "https://openlibrary.org/authors/";

export const authorInfoApi = createApi({
  reducerPath: "authorInfoApi",
  baseQuery: fetchBaseQuery({ baseUrl: startUrl }),
  endpoints: (builder) => ({
    getAuthorInfo: builder.query({
      query: (id) => `${id}.json`,
      transformResponse: (response) => {
        return response;
      },
    }),
    getAuthorWorks: builder.query({
      query: (id) => `${id}/works.json`,
      transformResponse: (response) => {
        return response;
      },
    }),
  }),
});

export const { useGetAuthorInfoQuery, useGetAuthorWorksQuery } = authorInfoApi;
