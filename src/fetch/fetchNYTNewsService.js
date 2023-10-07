import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NYTimesNewsKey } from "../../../API_Keys/APIKeysNewsApp";

const startUrl = "https://api.nytimes.com/svc/search/v2/";

export const NYTimesNewsApi = createApi({
  reducerPath: "NYTimesNews",
  baseQuery: fetchBaseQuery({ baseUrl: startUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ q, page, section }) =>
        `articlesearch.json?${q ? "q=" : ""}${q}&page=${page}&${
          section ? `fq=news_desk:(${section})` : ""
        }&api-key=${NYTimesNewsKey}`,
      transformResponse: (response) => {
        return response.response.docs;
      },
    }),
  }),
});
export const { useGetNewsQuery } = NYTimesNewsApi;
