import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  TagesschauNewsAPIResponse,
  TagesschauSearchParams,
  tagesschauNewsAPIResponseAll,
} from "./NewsAPIResponsesTypes";

const startUrl = "https://www.tagesschau.de/api2u/";

type ApiResponseData = {
  searchResults: TagesschauNewsAPIResponse[];
};

export const tagesschauNewsApi = createApi({
  reducerPath: "tagesschauNews",
  baseQuery: fetchBaseQuery({ baseUrl: startUrl }),
  endpoints: (builder) => ({
    getAllNews: builder.query<tagesschauNewsAPIResponseAll, void>({
      query: () => `homepage`,
      transformResponse: (response) => {
        return response as tagesschauNewsAPIResponseAll;
      },
    }),
    getDeNews: builder.query<
      TagesschauNewsAPIResponse[],
      TagesschauSearchParams
    >({
      query: ({ q, page }) =>
        `search/?searchText=${q}&pageSize=10&resultPage=${page}`,
      transformResponse: (response: ApiResponseData) => {
        return response.searchResults;
      },
    }),
  }),
});
export const { useGetAllNewsQuery, useGetDeNewsQuery } = tagesschauNewsApi;
