import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const startUrl = "https://openlibrary.org/books/";

export const booksInfoApi = createApi({
  reducerPath: "booksInfoApi",
  baseQuery: fetchBaseQuery({ baseUrl: startUrl }),
  endpoints: (builder) => ({
    getBooksInfo: builder.query({
      query: (id) => `${id}.json`,
      transformResponse: (response) => {
        return response;
      },
    }),
  }),
});

export const { useGetBooksInfoQuery } = booksInfoApi;
