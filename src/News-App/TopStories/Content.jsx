import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Content = ({ data }) => {
  const language = useSelector((state) => state.language.value);
  if (language === "en") {
    const { abstract, title, url: articleUrl, multimedia, url } = data;
    const { url: imgL } = multimedia[0];
    const altregex = /\/([^/]+)\.html$/;
    return (
      <div className="swiper-carousel-animate-opacity">
        <Link to={url} target="_blank">
          <img src={imgL} alt={articleUrl.match(altregex)}></img>
          <div className="slide-content text-white">
            <h2>{title}</h2>
            <p>{abstract}</p>
          </div>
        </Link>
      </div>
    );
  }
  if (language === "de") {
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
