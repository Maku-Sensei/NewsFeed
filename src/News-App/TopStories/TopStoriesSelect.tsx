import { useSelector } from "react-redux";
import TopStoriesEn from "./TopStoriesEn";
import TopStoriesDe from "./TopStoriesDe";
import { RootState } from "../store";

const TopStoriesSelect = () => {
  const language = useSelector((state: RootState) => state.language.value);
  switch (language) {
    case "en":
      return <TopStoriesEn />;
    case "de":
      return <TopStoriesDe />;
  }
};
export default TopStoriesSelect;
