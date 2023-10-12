import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GuardianApiKey } from "../../../../API_Keys/APIKeysNewsApp";
import {
  FootballNewsAPIParams,
  FootballNewsAPIResponse,
  FootballNewsAPIResponseData,
} from "./FootballNewsTypes";

const startUrl = "https://content.guardianapis.com";
export const footballNewsApi = createApi({
  reducerPath: "footballNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: startUrl }),
  endpoints: (builder) => ({
    getLeagueNews: builder.query<
      FootballNewsAPIResponse[],
      FootballNewsAPIParams
    >({
      query: ({ q, size }) =>
        `search?show-fields=headline,thumbnail,shortUrl&section=football&page-size=${size}&q=${q}&api-key=${GuardianApiKey}`,
      transformResponse: (response: FootballNewsAPIResponseData) => {
        console.log(response);
        return response.response.results;
      },
    }),
  }),
});
export const { useGetLeagueNewsQuery } = footballNewsApi;
