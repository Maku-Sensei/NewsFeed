import { useDispatch } from "react-redux";
import { setAuthorInfo } from "../../Slice/Books/authorInfoSlice";
import { useSelector } from "react-redux";
import {
  useGetAuthorInfoQuery,
  useGetAuthorWorksQuery,
} from "../../../../fetch/Books/AuthorInfoService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ErrorBoundary from "../../../ErrorBoundary";

const AuthorInfo = () => {
  const dispatch = useDispatch();
  const baseUrl = "https://openlibrary.org";
  const id = useSelector((state) => state.authorInfoId.value);
  console.log("id", id);
  const { isLoading: isLoadingInfo, data: authorInfo } =
    useGetAuthorInfoQuery(id);
  const { isLoading: isLoadingWorks, data: authorWorks } =
    useGetAuthorWorksQuery(id);

  if (isLoadingInfo || isLoadingWorks) {
    return <h1>Loading...</h1>;
  }
  const firstFiveWorks = authorWorks?.entries.slice(0, 5) ?? [];
  console.log("firstFiveWorks", firstFiveWorks);
  const image = authorInfo?.photos?.[0] ?? null;
  const imgUrl = `https://covers.openlibrary.org/a/id/${image}-M.jpg`;

  console.log("authorInfo", authorInfo);
  console.log("authorWorks", authorWorks);
  return (
    <div>
      <button
        className="top-15 absolute left-8"
        onClick={() => {
          dispatch(setAuthorInfo(false));
        }}
      >
        <span className="arrow-icon-left"></span>
      </button>
      <section className="p-4">
        <div className="mb-1 flex flex-nowrap gap-2 underline">
          <address>
            <Link to={baseUrl + authorInfo.key}>
              <h1>{authorInfo.fuller_name ? authorInfo.fuller_name : null} </h1>

              <h1 className="italic"> {authorInfo.personal_name}</h1>
            </Link>
          </address>
          <h1>
            <span className="mr-1">
              <FontAwesomeIcon icon={faCakeCandles} shake />
            </span>
            {authorInfo.birth_date ? authorInfo.birth_date : ""}
          </h1>

          <h1>
            <span className="mr-1">
              <FontAwesomeIcon icon={faCross} beatFade />
            </span>
            {authorInfo.death_date ? authorInfo.death_date : ""}
          </h1>
        </div>
        <section>
          <img
            src={imgUrl}
            alt={"photo of" + authorInfo.personal_name}
            className="float-left"
          />
          <article>
            <p className="font-biography text-lg">
              {authorInfo?.bio?.value ?? authorInfo.bio}
            </p>
          </article>
          <section className="mt-3">
            <h2 className="text-xl font-extrabold">Famous Works</h2>
            <ol className="list-decimal pl-4 text-lg font-semibold">
              {firstFiveWorks.map((work) => {
                return (
                  <li className="mb-2" key={work.key}>
                    <Link to={baseUrl + work.key}>
                      <h1 className="text-lg font-semibold"> {work.title}</h1>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </section>
        </section>
      </section>
    </div>
  );
};

const AuthorInfoErrorBoundary = (props) => {
  return (
    <ErrorBoundary
      errorComponent={<h1>Something went wrong with AuthorInfo</h1>}
    >
      <AuthorInfo props={props} />
    </ErrorBoundary>
  );
};
export default AuthorInfoErrorBoundary;
