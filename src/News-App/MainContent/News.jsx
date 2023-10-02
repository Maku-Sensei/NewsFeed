import { Link } from "react-router-dom";

const News = (props) => {
  const { title, author, source, description, url, imageUrl } = props;
  const { name } = source;
  console.log("News", props);
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
            src={imageUrl}
            alt={title}
          ></img>
        ) : null}
      </div>
    </div>
  );
};

export default News;
