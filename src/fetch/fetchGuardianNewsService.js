import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GuardianApiKey } from "../../../API_Keys/APIKeysNewsApp";

const startUrl = "https://content.guardianapis.com/";

export const guardianNewsApi = createApi({
  reducerPath: "guardianNews",
  baseQuery: fetchBaseQuery({ baseUrl: startUrl }),
  endpoints: (builder) => ({
    getSearch: builder.query({
      query: ({ q, page }) =>
        `search?show-fields=all&q=${q}&api-key=${GuardianApiKey}&page=${page}&page-size=10`,
      transformResponse: (response) => {
        return response.response.results;
      },
    }),
  }),
});
export const { useGetSearchQuery } = guardianNewsApi;
