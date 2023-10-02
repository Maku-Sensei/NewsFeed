import { useSelector } from "react-redux";
import TopStoriesEn from "./TopStoriesEn";
import TopStoriesDe from "./TopStoriesDe";

const TopStoriesSelect = () => {
  const language = useSelector((state) => state.language.value);
  switch (language) {
    case "en":
      return <TopStoriesEn />;
    case "de":
      return <TopStoriesDe />;
  }
};
export default TopStoriesSelect;
