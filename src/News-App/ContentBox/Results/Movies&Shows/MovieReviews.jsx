import { Link } from "react-router-dom";

const MovieReviews = (props) => {
  const { headline, abstract, web_url, image, snippet } = props;
  const image_url = "https://www.nytimes.com/" + image;

  return (
    <div className="flex border-b-2 pb-5 text-xs">
      <div>
        <Link to={web_url}>
          <h1 className="font-bold underline "> {headline} </h1>
        </Link>
        <br />
        <p className="font-light	 italic"> {abstract} </p>
        <br />
      </div>
      <img
        src={image_url}
        alt={snippet}
        className="rounded-lg pt-5 shadow-lg"
      />
    </div>
  );
};
export default MovieReviews;
