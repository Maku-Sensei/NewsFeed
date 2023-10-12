export type FootballNewsAPIResponse = {
  apiUrl: string;
  fields: {
    headline: string;
    shortUrl: string;
    thumbnail: string;
  };
  id: string;
  webTitle: string;
  webUrl: string;
};

export type FootballNewsAPIParams = {
  q: "bundesliga" | "premier-league";
  size: 3 | 4;
};

export type FootballNewsAPIResponseData = {
  response: {
    results: FootballNewsAPIResponse[];
  };
};
