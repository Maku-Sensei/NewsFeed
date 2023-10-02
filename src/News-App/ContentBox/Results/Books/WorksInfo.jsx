import { useSelector, useDispatch } from "react-redux";
import { useGetWorksInfoQuery } from "../../../../fetch/Books/WorksInfoService";
import { setWorksInfo } from "../../Slice/Books/worksInfoSlice";
import { Link } from "react-router-dom";
import ErrorBoundary from "../../../ErrorBoundary";

const WorksInfo = () => {
  const key = useSelector((state) => state.worksInfoId.value);

  const { isLoading, data: worksInfo } = useGetWorksInfoQuery(key);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const dispatch = useDispatch();
  console.log("worksInfo", worksInfo);
  const {
    title,
    subject_people,
    subject_places,
    subject_times,
    revision,
    description,
    covers,
  } = worksInfo;

  const coverImageId = covers?.[0] ?? null;
  const baseUrl = "https://openlibrary.org";
  const image = coverImageId
    ? `https://covers.openlibrary.org/b/id/${covers[0]}-M.jpg`
    : "";

  return (
    <div>
      <button
        className="absolute left-8 top-20"
        onClick={() => {
          dispatch(setWorksInfo(false));
        }}
      >
        <span className="arrow-icon-left"></span>
      </button>
      <section className="p-4">
        <Link to={baseUrl + key}>
          <h1 className="underline">{title}</h1>
        </Link>

        <img src={image} alt={"logo of " + title} className="float-left" />
        <p className=" text-lg">{description?.value ?? description} </p>

        <h3>
          {revision} {revision === 1 ? "Revision" : "Revisions"}
        </h3>
      </section>
    </div>
  );
};

const WorksInfoErrorBoundary = (props) => (
  <ErrorBoundary errorComponent={<h1>Something went wrong with WorksInfo</h1>}>
    <WorksInfo props={props} />
  </ErrorBoundary>
);
export default WorksInfoErrorBoundary;
