import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GuardianApiKey } from "../../../../API_Keys/APIKeysNewsApp";

const startUrl = "https://content.guardianapis.com";
export const footballNewsApi = createApi({
  reducerPath: "footballNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: startUrl }),
  endpoints: (builder) => ({
    getLeagueNews: builder.query({
      query: ({ q, size }) =>
        `search?show-fields=headline,thumbnail,shortUrl&section=football&page-size=${size}&q=${q}&api-key=${GuardianApiKey}`,
      transformResponse: (response) => {
        return response.response.results;
      },
    }),
  }),
});
export const { useGetLeagueNewsQuery } = footballNewsApi;
