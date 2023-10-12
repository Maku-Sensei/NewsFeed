import ResultsEn from "./ResultsEn";
import ResultsDe from "./ResultsDe";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Results = () => {
  const language = useSelector((state: RootState) => state.language.value);
  switch (language) {
    case "en":
      return <ResultsEn />;
    case "de":
      return <ResultsDe />;
  }
};
export default Results;
