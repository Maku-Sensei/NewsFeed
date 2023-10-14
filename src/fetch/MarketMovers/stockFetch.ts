import { marketStackKey } from "../../../../API_Keys/APIKeysNewsApp";

const ApiKey = marketStackKey;
const startUrl = `https://api.marketstack.com/v1/eod/latest?access_key=${ApiKey}`;

const stockFetch = async ({ queryKey }: { queryKey: [string, string] }) => {
  const symbols = queryKey[1];
  const res = await fetch(`${startUrl}&symbols=${symbols}`);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export default stockFetch;
