import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon, faApple } from "@fortawesome/free-brands-svg-icons";

const BestSellerList = (props) => {
  const {
    author,
    img,
    publisher,
    description,
    isbn10,
    isbn13,
    amazon,
    apple,
    title,
    weeks,
  } = props;
  return (
    <div className="text-x1 grid grid-cols-1 border-b-2 pb-2 pl-1 pt-2">
      <h1 className="font-semibold underline">{title}</h1>
      <h2 className="font-author ">By {author}</h2>
      <div className="mb-1 mt-1">
        <img
          src={img}
          alt={"cover of " + title}
          className="rounded-lg shadow-lg "
        />
        <p>{description}</p>
      </div>
      <ol>
        <li>ISBN10 {isbn10}</li>
        <li>ISBN13 {isbn13}</li>
        <li>
          {weeks} {weeks === 1 ? "week" : "weeks"} in best sellers
        </li>
        <li>
          <h3>Publisher: {publisher}</h3>
        </li>

        <li className="flex justify-start gap-4">
          <Link to={amazon} className="mt-[0.1rem]">
            <FontAwesomeIcon
              icon={faAmazon}
              style={{ color: "#efbd0b" }}
              shake
            />
          </Link>
          <Link to={apple}>
            <FontAwesomeIcon icon={faApple} shake size="lg" className="" />
          </Link>
        </li>
      </ol>
    </div>
  );
};
export default BestSellerList;
