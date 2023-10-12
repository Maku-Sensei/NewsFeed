import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NYTimesNewsKey } from "../../../API_Keys/APIKeysNewsApp";
import {
  NYTimesNewsAPIResponse,
  NYTTimesNewsParams,
} from "./NewsAPIResponsesTypes";

const startUrl = "https://api.nytimes.com/svc/search/v2/";

type ApiResponseData = {
  response: {
    docs: NYTimesNewsAPIResponse[];
  };
};

export const NYTimesNewsApi = createApi({
  reducerPath: "NYTimesNews",
  baseQuery: fetchBaseQuery({ baseUrl: startUrl }),
  endpoints: (builder) => ({
    getNews: builder.query<NYTimesNewsAPIResponse[], NYTTimesNewsParams>({
      query: ({ q, page, section }) =>
        `articlesearch.json?${q ? "q=" : ""}${q}&page=${page}&${
          section ? `fq=news_desk:(${section})` : ""
        }&api-key=${NYTimesNewsKey}`,
      transformResponse: (response: ApiResponseData) => {
        return response.response.docs;
      },
    }),
  }),
});
export const { useGetNewsQuery } = NYTimesNewsApi;
