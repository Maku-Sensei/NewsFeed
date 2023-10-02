import PremierLeagueNews from "./PremierLeagueNews";
import BundesLigaNews from "./BundesLigaNews";

const FootballBox = () => {
  return (
    <div className="grid-row-2 mt-2 grid gap-0">
      <BundesLigaNews />
      <PremierLeagueNews />
    </div>
  );
};
export default FootballBox;
