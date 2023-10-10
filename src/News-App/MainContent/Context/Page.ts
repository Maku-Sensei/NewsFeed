import { createContext } from "react";

type PageContextType = {
  page: number;
  setPage: (page: number) => void;
};

const Page = createContext<PageContextType>();
export default Page;
