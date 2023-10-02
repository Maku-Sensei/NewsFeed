import { useGetBooksInfoQuery } from "../../../../fetch/Books/BookInfoService";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBooksInfo } from "../../Slice/Books/booksInfoSlice";
import ErrorBoundary from "../../../ErrorBoundary";

const BooksInfo = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.booksInfoId.value);
  console.log("id", id);
  const { isLoading, data: booksInfo } = useGetBooksInfoQuery(id);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log("booksInfo", booksInfo);
  const baseUrl = "https://openlibrary.org";
  const coverImageId = booksInfo?.covers?.[0] ?? null;
  const image = coverImageId
    ? `https://covers.openlibrary.org/b/id/${booksInfo.covers[0]}-M.jpg`
    : "";

  return (
    <div className="mt-0">
      <section className="mb-2">
        <button
          className="absolute left-8 top-20"
          onClick={() => {
            dispatch(setBooksInfo(false));
          }}
        >
          <span className="arrow-icon-left"></span>
        </button>
        <section className="p-4">
          <Link to={baseUrl + booksInfo.key}>
            <h1 className="mb-1">{booksInfo.title}</h1>
          </Link>
          {image && (
            <Link to={baseUrl + booksInfo.key}>
              <img src={image} alt={"logo of " + booksInfo.title} />
            </Link>
          )}
        </section>
        <p className=" text-lg">
          {" "}
          {/* for works and editions API different */}
          {booksInfo?.description?.value ?? null}
        </p>
        {/* informations */}
        <section>
          {booksInfo.isbn_10 && booksInfo.isbn_10[0] && (
            <h2>isbn10: {booksInfo.isbn_10[0]}</h2>
          )}
          {booksInfo.isbn_13 && booksInfo.isbn_13[0] && (
            <h2>isbn13: {booksInfo.isbn_13[0]}</h2>
          )}
          <div className="flex flex flex-wrap gap-3">
            {booksInfo.number_of_pages && (
              <h2>{booksInfo.number_of_pages}p.</h2>
            )}
            {booksInfo.revision && (
              <h2>
                {booksInfo.revision}{" "}
                {booksInfo.revision === 1 ? "Revision" : "Revisions"}
              </h2>
            )}
          </div>
        </section>
      </section>
    </div>
  );
};

const BooksInfoWithErrorBoundary = (props) => {
  return (
    <ErrorBoundary
      errorComponent={<h1>Something went wrong with AuthorInfo</h1>}
    >
      <BooksInfo props={props} />
    </ErrorBoundary>
  );
};
export default BooksInfoWithErrorBoundary;
