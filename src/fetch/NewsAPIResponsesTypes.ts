export interface TagesschauNewsAPIResponse {
  title: string;
  teaserImage: {
    altText: string;
    imageVariants: {
      "16x9-1920": string;
    };
  } | null;
  firstSentence: string;
  topline: string;
  sophoraId: string;
  detailsweb: string;
}

export type tagesschauNewsAPIResponseAll = {
  news: TagesschauNewsAPIResponse[];
  regional: TagesschauNewsAPIResponse[];
  newStoriesCountLink: string;
  type: string;
};

export interface TagesschauSearchParams {
  q: string;
  page: number;
}
