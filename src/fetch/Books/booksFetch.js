const baseUrl = "https://openlibrary.org";

export const searchBooks = async ({ queryKey }) => {
  const page = queryKey[1];
  const q = queryKey[2];
  const res = await fetch(`${baseUrl}/search.json?q=${q}&page=${page}`);
  if (!res.ok) throw new Error(`Books Search fetch not okay`);
  return res.json();
};

import { NYTimesApiKey } from "../../../../API_Keys/APIKeysNewsApp";

export const searchSubject = async ({ queryKey }) => {
  const q = queryKey[1];
  const res = await fetch(`${baseUrl}/subjects/${q}.json`);
  if (!res.ok) throw new Error(`Books Search fetch not okay`);
  return res.json();
};

const key = NYTimesApiKey;
export const businessBooksFetch = async () => {
  const url = `https://api.nytimes.com/svc/books/v3/lists.json?list=Business%20Books&api-key=${key}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Best Sellers fetch not okay`);
  return res.json();
};

export const bestSellersFetch = async () => {
  const url = `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${key}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Best Sellers fetch not okay`);
  return res.json();
};
