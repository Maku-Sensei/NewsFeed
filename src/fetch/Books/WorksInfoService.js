import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const startUrl = "https://openlibrary.org/";

export const worksInfoApi = createApi({
  reducerPath: "worksInfoApi",
  baseQuery: fetchBaseQuery({ baseUrl: startUrl }),
  endpoints: (builder) => ({
    getWorksInfo: builder.query({
      query: (id) => `${id}.json`,
      transformResponse: (response) => {
        return response;
      },
    }),
  }),
});

export const { useGetWorksInfoQuery } = worksInfoApi;
