export type TopStoriesEnParams = "business" | "politics" | "us" | "fashion";
export type TopStoriesEnResponse = {
  abstract: string;
  title: string;
  url: string;
  multimedia: {
    url: string;
  };
  section: string;
};
