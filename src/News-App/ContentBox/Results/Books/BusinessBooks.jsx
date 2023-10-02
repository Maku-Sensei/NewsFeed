import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";

const BusinessBooks = () => {
  const data = useSelector((state) => state.data);
  // Check if data is empty
  if (data.length === 0) {
    return null;
  }

  return (
    <div>
      {data.value.map((book) => {
        // Added 'index' for the key prop
        const { amazon_product_url, weeks_on_list, book_details } = book;

        const {
          title,
          description,
          author,
          publisher,
          primary_isbn13,
          primary_isbn10,
        } = book_details[0];

        return (
          <div
            key={book.rank}
            className="text-x1 grid grid-cols-1 border-b-2 pb-2 pl-1 pt-2 first:pt-0"
          >
            {/* Render the book information */}
            <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
            <p className="mb-1 text-gray-700">{description}</p>
            <p className="text-gray-600">Author: {author}</p>
            <p className="text-gray-600">Publisher: {publisher}</p>
            <p className="text-gray-600">ISBN-13: {primary_isbn13}</p>
            <p className="text-gray-600">ISBN-10: {primary_isbn10}</p>
            {/* Add a link */}
            <Link to={amazon_product_url}>
              <FontAwesomeIcon icon={faAmazon} style={{ color: "#efbd0b" }} />
            </Link>
            {/* Additional rendering for weeks_on_list if needed */}
          </div>
        );
      })}
    </div>
  );
};

export default BusinessBooks;
