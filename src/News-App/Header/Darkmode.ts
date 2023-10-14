import { createContext } from "react";

const darkmode = createContext<[boolean, (setDarkmode: boolean) => void]>([
  true,
  () => {},
]);

export default darkmode;
