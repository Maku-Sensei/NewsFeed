import { useGetTopStoriesDeQuery } from "../../fetch/TopStories/topStoriesDeService";
import TopStoriesSwiper from "./TopStoriesSwiper";
import shuffleArray from "../../general methods/shuffleArray";

const TopStoriesDe = () => {
  const sectionNames = [
    "sport",
    "inland",
    "ausland",
    "wirtschaft",
    "investigativ",
  ];
  const sectionData = {};
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

  const combinedArray = [];

  for (const section in sectionData) {
    const data = sectionData[section]?.data || [];
    combinedArray.push(...data.slice(0, 5));
  }
  const shuffledArray = shuffleArray(combinedArray);
  const filterdArray = shuffledArray.filter(
    (item) => item.teaserImage !== null,
  );
  return <TopStoriesSwiper data={filterdArray} />;
};

export default TopStoriesDe;
