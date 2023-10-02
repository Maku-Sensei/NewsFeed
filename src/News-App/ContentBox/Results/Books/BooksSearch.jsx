import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBook,
  faBookOpen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Books.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBooksInfoId } from "../../Slice/Books/booksInfoIdSlice";
import { setBooksInfo } from "../../Slice/Books/booksInfoSlice";
import { setAuthorInfo } from "../../Slice/Books/authorInfoSlice";
import { setAuthorInfoId } from "../../Slice/Books/authorInfoIdSlice";

const BookSearch = (props) => {
  const dispatch = useDispatch();
  const {
    author,
    cover,
    currentlyReading,
    publishYears,
    ebook_access,
    languages,
    numPages,
    rating,
    subjects,
    title,
    cover_edition_key,
    author_key,
  } = props;

  //Check if Array, else just give first publish year
  const latestpPublishYear = Array.isArray(publishYears)
    ? Math.max(...publishYears)
    : publishYears;

  const image =
    "https://covers.openlibrary.org/b/id/" + cover + "-M.jpg?default=false";
  const [imageError, setImageError] = useState(false);

  //handling when image respons in as 404 error
  useEffect(() => {
    // When the component mounts, set up the image error handler
    const imageElement = new Image();
    imageElement.src = image;
    imageElement.onerror = () => {
      setImageError(true); // Set the state to true if the image fails to load
    };
  }, [image]);

  if (imageError) {
    return null; // Render null for the entire component if there was an image loading error
  }

  const renderLanguages = () => {
    if (!languages || languages.length === 0) {
      return null;
    }

    return (
      <ul className="flex flex-wrap gap-1">
        {languages.map((language) =>
          language === "eng" || language === "ger" ? (
            <li
              key={language}
              className="rounded-lg border border-gray-300 bg-lime-600 p-0 shadow-md hover:shadow-lg"
            >
              <h2>{language}</h2>
            </li>
          ) : null,
        )}
      </ul>
    );
  };
  const renderSubjects = () => {
    if (!subjects || subjects.length === 0) {
      return null;
    }
    return (
      <ul className="flex flex-wrap gap-0">
        {subjects.map((subject) => (
          <li
            key={subject}
            className="rounded-lg border border-gray-300 bg-blue-500 p-0 shadow-md hover:shadow-lg"
          >
            <h2>{subject}</h2>
          </li>
        ))}
      </ul>
    );
  };

  //Component

  return (
    <section>
      <div className="text-x1 grid grid-cols-1 border-b-2 pb-2 pl-1 pt-2 first:pt-0">
        <div className="flex gap-2">
          <button
            className="underline"
            onClick={() => {
              dispatch(setBooksInfo(true));
              dispatch(setBooksInfoId(cover_edition_key));
            }}
          >
            {title}
          </button>{" "}
          -{" "}
          <button
            className="underline"
            onClick={() => {
              dispatch(setAuthorInfo(true));
              dispatch(setAuthorInfoId(author_key));
            }}
          >
            {author}
          </button>{" "}
          -<h2>{latestpPublishYear}</h2>
        </div>
        <section className="grid grid-cols-2 gap-2">
          <img src={image} alt={`cover of ${title}`} />
          <ul className="flex flex-col justify-end ">
            {renderLanguages()}
            <div className="rounded-lg bg-blue-500 p-1 shadow-lg">
              <li className="flex items-center rounded  p-2">
                <span className="mr-2">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <h2>{currentlyReading} Currently Reading</h2>
              </li>
              <li className="flex items-center rounded p-2">
                <span className="mr-2">
                  <FontAwesomeIcon icon={faBook} bounce />
                </span>
                <h2>Ebook Access: {ebook_access}</h2>
              </li>
              {numPages === undefined ? null : (
                <li className="flex items-center rounded  p-2">
                  <span className="mr-2">
                    <FontAwesomeIcon icon={faBookOpen} bounce />
                  </span>
                  <h2>{numPages} Pages</h2>
                </li>
              )}

              <li className="flex items-center rounded  p-2">
                {rating === undefined ? null : (
                  <span
                    className={`icon-wrapper ${rating >= 3 ? "bounce" : ""}`}
                  >
                    <FontAwesomeIcon icon={faStar} bounce />
                  </span>
                )}
                <div className="rating-value-books">
                  {rating >= 4 ? (
                    <span className="good">{rating}</span>
                  ) : rating >= 3 ? (
                    <span className="mid">{rating}</span>
                  ) : (
                    <span className="bad">{rating}</span>
                  )}
                </div>
              </li>
            </div>
          </ul>
        </section>
        {renderSubjects()}
      </div>
    </section>
  );
};

export default BookSearch;
