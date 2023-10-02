import { marketStackKey } from "../../../../API_Keys/APIKeysNewsApp";

const intradayFetch = async ({ queryKey }) => {
  const symbols = queryKey[1];
  const url = `https://api.marketstack.com/v1/intraday?access_key=${marketStackKey}&symbols=${symbols}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch.");
  }
  return res.json();
};
export default intradayFetch;
