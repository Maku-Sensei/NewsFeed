import { optionsTMDB } from "../../../../API_Keys/APIKeysNewsApp";

const options = optionsTMDB;
const dramaFetch = async ({ queryKey }) => {
  const page = queryKey[1];
  const category = queryKey[2];
  const language = queryKey[3];
  const country = category === "K-Drama" ? "KR" : "CN";

  const url = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=${language}-DE&page=1&sort_by=popularity.desc&with_origin_country=${country}&page=${page}`;
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

export default dramaFetch;
