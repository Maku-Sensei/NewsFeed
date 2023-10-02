import { useSelector } from "react-redux";
import SubjectResults from "./SubjectResults";

const SubjectSearch = () => {
  const data = useSelector((state) => state.data.value);
  const id = useSelector((state) => state.authorInfoId.value);
  console.log("id", id);

  return (
    <div>
      {data.map((result) => {
        return (
          <SubjectResults
            availability={result?.availability ?? []}
            author={!result.authors.length ? null : result.authors[0]}
            key={result.key}
            subjects={result?.subject ?? []}
            title={result.title}
            cover={result?.cover_id ?? null}
            work={result.key}
          />
        );
      })}
    </div>
  );
};

export default SubjectSearch;
