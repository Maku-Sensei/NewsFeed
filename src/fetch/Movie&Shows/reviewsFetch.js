import { NYTimesApiKey } from "../../../../API_Keys/APIKeysNewsApp";

const key = NYTimesApiKey;
const reviewsMovieFetch = async ({ queryKey }) => {
  let res;
  const page = queryKey[1];
  res = await fetch(
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?" +
      "fq=news_desk(%22Movies%22)%20AND%20type_of_material%3A(%22Review%22)&" +
      "sort=newest&" +
      "page=" +
      page +
      "&api-key=" +
      key,
  );

  if (!res.ok) throw new Error(`movie reviews fetch not okay`);
  return res.json();
};

export default reviewsMovieFetch;
