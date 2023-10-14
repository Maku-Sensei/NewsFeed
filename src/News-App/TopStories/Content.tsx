import { Link } from "react-router-dom";
import {
  TopStoriesDeResponse,
  TopStoriesEnResponse,
} from "../../fetch/TopStories/topStoriesTypes";
import { Language } from "../languageSlice";

interface ContentProps {
  language: Language;
  data: TopStoriesDeResponse | TopStoriesEnResponse;
}
function isTopStoriesEnResponse(data: any): data is TopStoriesEnResponse {
  // Add a condition that checks whether the data matches the structure of TopStoriesEnResponse
  return (
    "abstract" in data &&
    "title" in data &&
    "url" in data &&
    "multimedia" in data
  );
}

function isTopStoriesDeResponse(data: any): data is TopStoriesDeResponse {
  // Add a condition that checks whether the data matches the structure of TopStoriesDeResponse
  return (
    "topline" in data &&
    "title" in data &&
    "detailsweb" in data &&
    "teaserImage" in data
  );
}

const Content: React.FC<ContentProps> = ({ data, language }) => {
  if (language === "en" && isTopStoriesEnResponse(data)) {
    const { abstract, title, url: articleUrl, multimedia } = data;
    const { url: imgL } = multimedia[0];
    const altregex = /\/([^/]+)\.html$/;
    return (
      <div className="swiper-carousel-animate-opacity">
        <Link to={articleUrl} target="_blank">
          <img
            src={imgL}
            alt={
              articleUrl.match(altregex) ? articleUrl.match(altregex)![1] : ""
            }
          ></img>
          <div className="slide-content text-white">
            <h2>{title}</h2>
            <p>{abstract}</p>
          </div>
        </Link>
      </div>
    );
  }
  if (language === "de" && isTopStoriesDeResponse(data)) {
    const { topline, title, detailsweb: url, teaserImage } = data;
    const { alttext } = teaserImage;
    const img = teaserImage.imageVariants["16x9-1920"];

    return (
      <div className="swiper-carousel-animate-opacity">
        <Link to={url} target="_blank">
          <img src={img} alt={alttext}></img>
          <div className="slide-content text-white">
            <h2>{title}</h2>
            <p>{topline}</p>
          </div>
        </Link>
      </div>
    );
  }
};
export default Content;
