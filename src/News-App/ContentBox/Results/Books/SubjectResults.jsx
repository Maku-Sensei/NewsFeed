import { useDispatch } from "react-redux";
import { setAuthorInfo } from "../../Slice/Books/authorInfoSlice";
import { setAuthorInfoId } from "../../Slice/Books/authorInfoIdSlice";
import { setWorksInfo } from "../../Slice/Books/worksInfoSlice";
import { setWorksInfoId } from "../../Slice/Books/worksInfoIdSlice";

const SearchResults = (props) => {
  const { author, subjects, title, cover, work } = props;

  const dispatch = useDispatch();

  const authorId = author.key.replace(/^\/authors\//, "");
  console.log("authorId", authorId);
  const image =
    "https://covers.openlibrary.org/b/id/" + cover + "-M.jpg?default=false";
  return (
    <div className="border-b-2 pb-2 pl-1 pt-2 first:pt-0">
      <section>
        <button
          className="underline"
          onClick={() => {
            //setWorks for showing the work info
            dispatch(setWorksInfo(true));
            //setting an id for the work
            dispatch(setWorksInfoId(work));
          }}
        >
          {title}
        </button>
        {author != null ? (
          <h2>
            by{" "}
            <button
              onClick={() => {
                dispatch(setAuthorInfo(true));
                dispatch(setAuthorInfoId(authorId));
              }}
            >
              {author.name}
            </button>
          </h2>
        ) : null}
      </section>
      <figure className="grid grid-cols-2 gap-1">
        <img src={image} alt={"cover of " + title} />
        {!subjects.length ? null : (
          <div>
            <h2 className="mb-1 border-l-4 border-orange-500 pl-2 text-accent-color">
              {" "}
              Subjects
            </h2>
            {subjects.slice(0, 6).map((subject, index) => (
              <ul key={index}>
                <li className="mb-1 border-l-4 border-blue-500 pl-2">
                  {subject}
                </li>
              </ul>
            ))}
          </div>
        )}
      </figure>
    </div>
  );
};

export default SearchResults;
