import { useDispatch, useSelector } from "react-redux";
import { useRef, useEffect, useState } from "react";
import { setSubjectQuery } from "../../Slice/Books/subjectQuerySlice";

const SubjectInput = () => {
  const subjectq = useSelector((state) => state.subjectq.value);
  const [inputValue, setInputValue] = useState(subjectq.replace(/\+/g, " "));
  const inputRef = useRef(null);
  const typingTimeout = useRef(null);
  const dispatch = useDispatch();
  console.log("subjectq", subjectq);

  useEffect(() => {
    // Use useEffect to focus on the input element when the component mounts or booksq changes
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [subjectq]);
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        className="w-full rounded-lg border border-black p-2 text-center text-black shadow-md"
        placeholder="Enter Subject"
        onChange={(e) => {
          const newInputValue = e.target.value;
          setInputValue(newInputValue);

          clearTimeout(typingTimeout.current);
          typingTimeout.current = setTimeout(() => {
            dispatch(setSubjectQuery(newInputValue));
            console.log(newInputValue); // This will show the updated query
          }, 550);

          console.log(subjectq);
        }}
        value={inputValue}
      />
    </div>
  );
};

export default SubjectInput;
