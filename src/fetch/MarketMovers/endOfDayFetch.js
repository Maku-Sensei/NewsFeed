import { marketStackKey } from "../../../../API_Keys/APIKeysNewsApp";

const endOdDayFetch = async ({ queryKey }) => {
  const symbols = queryKey[1];
  const url = `https://api.marketstack.com/v1/eod?access_key=${marketStackKey}&symbols=${symbols}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
export default endOdDayFetch;
