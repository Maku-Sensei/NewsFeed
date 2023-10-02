import { newsApiKey } from "../../../API_Keys/APIKeysNewsApp";

const apiEverythingUrl = "https://newsapi.org/v2/everything?";
const apiKey = `&apiKey=${newsApiKey}`;
const pageSize = "&pageSize=18";
const apiTopUrl = "https://newsapi.org/v2/top-headlines?";

const fetchNewsEverything = async ({ queryKey }) => {
  let res = null;
  const { country, category, sources, q } = queryKey[1];
  const page = queryKey[2];
  if (country) {
    if (category) {
      res = await fetch(
        apiTopUrl +
          "country=" +
          country +
          "&category=" +
          category +
          "&page=" +
          page +
          pageSize +
          apiKey,
      );
    } else {
      res = await fetch(
        apiTopUrl + "country=" + country + "&page=" + page + apiKey,
      );
    }
  }
  if (category && !country) {
    res = await fetch(
      apiTopUrl + "category=" + category + "&page=" + page + apiKey,
    );
  }
  if (sources) {
    res = await fetch(
      apiTopUrl + "sources=" + sources + "&page=" + page + apiKey,
    );
  }

  if (q) {
    res = await fetch(apiEverythingUrl + "q=" + q + "&page=" + page + apiKey);
  }

  if (!res.ok) throw new Error(`any news fetch not okay`);
  return res.json();
};

export default fetchNewsEverything;
