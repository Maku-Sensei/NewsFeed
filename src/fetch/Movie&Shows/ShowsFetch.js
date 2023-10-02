import { optionsTMDB } from "../../../../API_Keys/APIKeysNewsApp";

const options = optionsTMDB;

export const topRatedfetch = async ({ queryKey }) => {
  const page = queryKey[1];
  const language = queryKey[2];

  const res = await fetch(
    `https://api.themoviedb.org/3/discover/tv?include_adult=false&language=${language}-DE&&sort_by=vote_average.desc&vote_count.gte=200&without_keywords=210024&without_genres=10763&page=` +
      page,
    options,
  );

  if (!res.ok) throw new Error(`top rated shows fetch not okay`);

  return res.json();
};

export const airingTodayFetch = async ({ queryKey }) => {
  const page = queryKey[1];
  const language = queryKey[2];

  const res = await fetch(
    `https://api.themoviedb.org/3/tv/airing_today?language=${language}-DE&timezone=DE&without_keywords=210024&without_genres=10763` +
      "&page=" +
      page,
    options,
  );

  if (!res.ok) throw new Error(`top rated shows fetch not okay`);

  return res.json();
};

export const popularShowsFetch = async ({ queryKey }) => {
  const page = queryKey[1];
  const language = queryKey[2];

  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?language=${language}-DE&without_keywords=210024&without_genres=10763` +
      "&page=" +
      page,
    options,
  );

  if (!res.ok) throw new Error(`popular shows fetch not okay`);

  return res.json();
};
