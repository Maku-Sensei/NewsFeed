import { optionsTMDB } from "../../../../API_Keys/APIKeysNewsApp";

const options = optionsTMDB;

export const popularMovieFetch = async ({ queryKey }) => {
  const page = queryKey[1];
  const language = queryKey[2];

  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?language=${language}-DE&include_adult=false&include_video=true&page=1&sort_by=popularity.desc&watch_region=de&append_to_response=videos&page=` +
      page,
    options,
  );

  if (!res.ok) throw new Error(`popular movies fetch not okay`);

  return res.json();
};

export const upcomingMovieFetch = async ({ queryKey }) => {
  const page = queryKey[1];
  const language = queryKey[2];

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=${language}-DE&page=1&region=de` +
      "&page=" +
      page,
    options,
  );

  if (!res.ok) throw new Error(`upcoming movie fetch not okay`);

  return res.json();
};

export const trendingMovieFetch = async ({ queryKey }) => {
  const page = queryKey[1];
  const language = queryKey[2];

  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?language=${language}-DE&region=de` +
      "&page=" +
      page,
    options,
  );

  if (!res.ok) throw new Error(`trending movie fetch not okay`);

  return res.json();
};
