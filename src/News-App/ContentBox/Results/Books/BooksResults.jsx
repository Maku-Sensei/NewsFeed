import { useSelector } from "react-redux";
import BooksSearch from "./BooksSearch";
import BooksInput from "./BooksInput";
import BooksInfo from "./BooksInfo";
import AuthorInfo from "./AuthorInfo";
import SubjectSearch from "./SubjectSearch";
import SubjectInput from "./SubjectInput";
import BestSellers from "./BestSellers";
import BusinessBooks from "./BusinessBooks";
import WorksInfo from "./WorksInfo";

const BooksResults = () => {
  const data = useSelector((state) => state.data.value);
  const booksCategory = useSelector((state) => state.books.value);
  const showBooksInfo = useSelector((state) => state.booksInfo.value);
  const showAuthorInfo = useSelector((state) => state.authorInfo.value);
  const showWorksInfo = useSelector((state) => state.worksInfo.value);

  let content;

  if (!data.length) {
    switch (booksCategory) {
      case "Search":
        content = <BooksInput />;
        break;
      case "Subject":
        content = <SubjectInput />;
        break;
    }
  } else {
    switch (booksCategory) {
      case "Search":
        if (showBooksInfo) {
          content = <BooksInfo />;
        } else if (showAuthorInfo) {
          content = <AuthorInfo />;
        } else {
          content = (
            <div>
              <BooksInput />
              {data.map((book) => (
                <BooksSearch
                  key={book.key}
                  author={book.author_name?.[0]}
                  cover={book.cover_i}
                  currentlyReading={book.currently_reading_count}
                  publishYears={book?.publish_year ?? book.first_publish_year}
                  ebook_access={book.ebook_access}
                  languages={book.language}
                  numPages={book.number_of_pages_median}
                  rating={book.ratings_average}
                  subjects={book.subject}
                  title={book.title}
                  cover_edition_key={book.cover_edition_key}
                  author_key={book.author_key?.[0]}
                />
              ))}
            </div>
          );
        }
        break;
      case "Subject":
        if (showWorksInfo) {
          content = <WorksInfo />;
        } else if (showAuthorInfo) {
          content = <AuthorInfo />;
        } else {
          content = (
            <div>
              <SubjectInput />
              <SubjectSearch />
            </div>
          );
        }
        break;
      case "Best Sellers":
        content = <BestSellers />;
        break;
      case "Business":
        console.log("business");
        content = <BusinessBooks />;
        break;
    }
  }

  return (
    <div className="mt-4 rounded-lg border border-black p-0">{content}</div>
  );
};

export default BooksResults;
