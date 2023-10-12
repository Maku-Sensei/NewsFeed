import { createContext } from "react";

export type SectionType =
  | ""
  | "U.S."
  | "World"
  | "Business"
  | "Technology"
  | "Sports"
  | "Job Market"
  | "Your Money"
  | "Washington";

const Section = createContext<[SectionType, (setSection: SectionType) => void]>(
  ["", () => {}],
);

export default Section;
