import { useDispatch, useSelector } from "react-redux";
import { setBooksQuery } from "../../Slice/Books/booksQuerySlice";
import { useState, useRef, useEffect } from "react"; // Import useRef and useEffect

const BooksInput = () => {
  const dispatch = useDispatch();
  const booksq = useSelector((state) => state.booksq.value);
  const [inputValue, setInputValue] = useState(booksq.replace(/\+/g, " "));
  const inputRef = useRef(null);
  const typingTimeout = useRef(null); // Ref to store the timeout ID
  console.log("books", booksq);

  useEffect(() => {
    // Use useEffect to focus on the input element when the component mounts or booksq changes
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [booksq]);

  return (
    <div>
      <input
        id="search-books"
        type="text"
        ref={inputRef}
        className="w-full rounded-lg border border-black p-2 text-center text-black shadow-md"
        placeholder="Search for Books/Authors"
        onChange={(e) => {
          const newInputValue = e.target.value;
          setInputValue(newInputValue);

          clearTimeout(typingTimeout.current);
          typingTimeout.current = setTimeout(() => {
            dispatch(setBooksQuery(newInputValue));
            console.log(newInputValue); // This will show the updated query
          }, 550);
        }}
        value={inputValue}
      ></input>
    </div>
  );
};
export default BooksInput;
