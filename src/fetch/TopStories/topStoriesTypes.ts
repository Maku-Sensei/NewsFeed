export type TopStoriesEnParams = "business" | "politics" | "us" | "fashion";
export type TopStoriesEnResponse = {
  abstract: string;
  title: string;
  url: string;
  multimedia: [
    {
      url: string;
    },
  ];
  section: string;
};

export type TopStoriesDeParams =
  | "wirtschaft"
  | "inland"
  | "ausland"
  | "sport"
  | "investigativ";

export type TopStoriesDeResponse = {
  topline: string;
  title: string;
  detailsweb: string;
  teaserImage: {
    alttext: string;
    imageVariants: {
      "16x9-1920": string;
    };
  };
};
