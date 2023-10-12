import { Language } from "../News-App/languageSlice";
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

export interface NewsSearchParams {
  q: string;
  page: number;
}
type NYTimesMultimedia = [
  {
    url?: string;
  },
];
export interface NYTimesNewsAPIResponse {
  headline: {
    main: string;
  };
  byline: {
    original: string | null;
  };
  source: string;
  abstract: string;
  web_url: string;
  _id: string;
  multimedia: NYTimesMultimedia | [];
}
export interface NYTTimesNewsParams extends NewsSearchParams {
  section: string;
}

export type NewsProps = {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  name: string;
  author: string;
  language: Language;
};
