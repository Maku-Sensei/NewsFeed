import { createContext } from "react";

const NewsQuery = createContext<[string, (setNewsQuery: string) => void]>([
  "",
  () => {},
]);
export default NewsQuery;
