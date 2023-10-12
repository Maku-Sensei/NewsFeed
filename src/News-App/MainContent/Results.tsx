import ResultsEn from "./ResultsEn";
import ResultsDe from "./ResultsDe";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import ErrorBoundary from "../ErrorBoundary";

const Results = () => {
  const language = useSelector((state: RootState) => state.language.value);
  switch (language) {
    case "en":
      return (
        <ErrorBoundary
          errorComponent={<h1>Something went wrong with NewsResultsEN</h1>}
        >
          <ResultsEn />
        </ErrorBoundary>
      );

    case "de":
      return (
        <ErrorBoundary
          errorComponent={<h1>Something went wrong with NewsResultsDE</h1>}
        >
          <ResultsDe />
        </ErrorBoundary>
      );
  }
};
export default Results;
