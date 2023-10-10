import { createContext } from "react";

const Section = createContext<[string, (setSection: string) => void]>([
  "",
  () => {},
]);

export default Section;
