import { createContext } from "react";

const Page = createContext<[number, (setPage: number) => void]>([1, () => {}]);
export default Page;
