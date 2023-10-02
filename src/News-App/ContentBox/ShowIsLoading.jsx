import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "./ButtonClicks/ArrowClick";
import Options from "./Options";
import MySwiper from "./Swiper";
import BooksInput from "./Results/Books/BooksInput";
import SubjectInput from "./Results/Books/SubjectInput";

const ShowIsLoading = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page.value);
  const topic = useSelector((state) => state.topic.value);
  const booksCategory = useSelector((state) => state.books.value);
  return (
    <div className=" ml-10 mr-10 h-20 rounded ring-2 ring-black ">
      <nav className="mb-2">
        <div className="containerReviews">
          <div className="flex justify-between">
            <button
              className="h-8 w-8 cursor-pointer	 rounded-full"
              onClick={(e) => {
                e.preventDefault();
                changePage(false, dispatch, page);
              }}
            >
              <span className="arrow-icon-left"></span>
            </button>

            <div>
              <MySwiper page={page} />
            </div>
            <button
              className=" h-8 w-8 cursor-pointer rounded-full"
              onClick={(e) => {
                e.preventDefault();
                changePage(true, dispatch, page);
              }}
            >
              <span className="arrow-icon-right"></span>
            </button>
          </div>
          {/* next Line*/}
        </div>
      </nav>

      <Options />
      <section className="custom-scrollbar h-[80vh] overflow-y-scroll">
        <div className="text center mt-4 rounded-lg border border-black p-4">
          {topic === "Books" ? (
            booksCategory === "Search" ? (
              <BooksInput />
            ) : booksCategory === "Subject" ? (
              <SubjectInput />
            ) : null
          ) : null}
          Loading...
        </div>
      </section>
    </div>
  );
};
export default ShowIsLoading;
