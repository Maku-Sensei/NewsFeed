import { Link } from "react-router-dom";
import { NewsProps } from "../../fetch/NewsAPIResponsesTypes";

const News = (props: NewsProps) => {
  const { title, description, url, imageUrl, name, author, language } = props;
  const image_url =
    language === "en" ? "https://www.nytimes.com/" + imageUrl : imageUrl;
  return (
    <div>
      <div className="mb-2 ml-20 flex w-96 flex-col justify-between border-b-2 md:ml-0 md:w-7/12 md:flex-col lg:w-10/12 lg:flex-row xl:w-11/12">
        <div className="flex  flex-col justify-between">
          <section>
            <Link to={url} target="_blank">
              <h2 className="font-bold"> {title} </h2>
            </Link>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              {" "}
              {description
                ? description.replace(/<\/?a[^>]*>/g, "")
                : null}{" "}
            </p>
          </section>
          <section>
            <p className="font-author text-sm sm:text-base md:text-lg lg:text-xl">
              {" "}
              {/* check if name and author are equal and if author unequal null */}
              {name !== author && author ? name + ", " + author : name}
            </p>
          </section>
        </div>
        {imageUrl ? (
          <img
            className="mb-2 ml-3 h-auto max-w-xs rounded-lg"
            src={image_url}
            alt={title}
          ></img>
        ) : null}
      </div>
    </div>
  );
};

export default News;
