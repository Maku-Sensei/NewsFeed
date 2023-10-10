//const urlAllAnime = `https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${page}`;

export const trendingAnimeFetch = async ({ queryKey }) => {
  console.log(queryKey);
  const page = queryKey[1] * 10;
  const url = `https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${page}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("An error has occured");
  }
  return res.json();
};

//const urlAllManga = `https://kitsu.io/api/edge/manga?page[limit]=20&page[offset]=${page}`;
export const trendingMangaFetch = async ({ queryKey }) => {
  const page = queryKey[1] * 10;
  const url = `https://kitsu.io/api/edge/manga?page[limit]=20&page[offset]=${page}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("An error has occured");
  }
  return res.json();
};
