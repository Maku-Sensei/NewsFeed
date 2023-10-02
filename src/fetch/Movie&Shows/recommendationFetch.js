import getRandomInt from "../../general methods/getRandomInt";
import { optionsTMDB } from "../../../../API_Keys/APIKeysNewsApp";

const options = optionsTMDB;

export const getRandomId = async ({ queryKey }) => {
  const isMovie = queryKey[1];
  const startingIndex = queryKey[2];
  console.log("startingIndex", startingIndex);
  console.log("isMovie", isMovie);
  if (isMovie) {
    const jsonFilePath = "./News-App/ContentBox/IdExports/filteredoutput.json";
    const res = await fetch(jsonFilePath);
    const data = await res.json();

    const lastIndex = data.length - 1;
    const randomIndex = getRandomInt(startingIndex, lastIndex);

    return data[randomIndex].id;
  } else {
    const jsonFilePath =
      "./News-App/ContentBox/IdExports/filteredoutputTvshows.json";
    const res = await fetch(jsonFilePath);
    const data = await res.json();
    const lastIndex = data.length - 1;
    const randomIndex = getRandomInt(startingIndex, lastIndex);

    return data[randomIndex].id;
  }
};

const recommendationFetch = async ({ queryKey }) => {
  const isMovie = queryKey[1];
  const id = queryKey[2];
  console.log("id", id);

  let res;
  let url;
  if (isMovie) {
    url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=watch%2Fproviders%2Crecommendations&`;
    res = await fetch(url, options);
  } else {
    url = `https://api.themoviedb.org/3/tv/${id}?append_to_response=watch%2Fproviders%2Crecommendations&`;
    res = await fetch(url, options);
  }
  if (!res.ok) {
    throw new Error("Recommendation fetch went wrong");
  }
  return res.json();
};
export default recommendationFetch;
