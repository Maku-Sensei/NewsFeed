import PremierLeagueNews from "./PremierLeagueNews";
import BundesLigaNews from "./BundesLigaNews";
import ErrorBoundary from "../ErrorBoundary";

const FootballBox = () => {
  return (
    <div className="grid-row-2 mt-2 grid gap-0">
      <BundesLigaNews />
      <PremierLeagueNews />
    </div>
  );
};

function FootballBoxErrorBoundary() {
  return (
    <ErrorBoundary
      errorComponent={<h1>Something went wrong with FootballBox</h1>}
    >
      <FootballBox />
    </ErrorBoundary>
  );
}
export default FootballBoxErrorBoundary;
