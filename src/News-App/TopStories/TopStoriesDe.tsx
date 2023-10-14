import { useGetTopStoriesDeQuery } from "../../fetch/TopStories/topStoriesDeService";
import TopStoriesSwiper from "./TopStoriesSwiper";
import shuffleArray from "../../general methods/shuffleArray";
import {
  TopStoriesDeParams,
  TopStoriesDeResponse,
} from "../../fetch/TopStories/topStoriesTypes";
import ErrorBoundary from "../ErrorBoundary";

type SectionData = {
  [section in TopStoriesDeParams]?: {
    isLoading: boolean;
    data?: TopStoriesDeResponse[];
  };
};

const TopStoriesDe = () => {
  const sectionNames: TopStoriesDeParams[] = [
    "sport",
    "inland",
    "ausland",
    "wirtschaft",
    "investigativ",
  ];
  const sectionData: SectionData = {};
  sectionNames.forEach((section) => {
    const { isLoading, data } = useGetTopStoriesDeQuery(section);
    sectionData[section] = { isLoading, data };
  });
  const isLoadingFlags = sectionNames.map((section) => {
    const { isLoading } = sectionData[section] || {};
    return isLoading;
  });

  if (isLoadingFlags.some((flag) => flag)) {
    return <h1>Loading...</h1>;
  }

  const combinedArray: TopStoriesDeResponse[] = [];

  for (const section in sectionData) {
    const data = sectionData[section as TopStoriesDeParams]?.data || [];
    combinedArray.push(...data.slice(0, 5));
  }
  const shuffledArray = shuffleArray(combinedArray);
  const filterdArray = shuffledArray.filter(
    (item) => item.teaserImage !== null,
  );
  return <TopStoriesSwiper data={filterdArray} />;
};
function TopStoriesDeErrorBoundary() {
  return (
    <ErrorBoundary
      errorComponent={<h1>Something went wrong with TopStoriesDE</h1>}
    >
      <TopStoriesDe />
    </ErrorBoundary>
  );
}
export default TopStoriesDeErrorBoundary;
