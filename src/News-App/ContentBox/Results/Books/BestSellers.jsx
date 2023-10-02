import React from "react";
import { useSelector } from "react-redux";
import BestSellerList from "./BestSellerList";

const BestSellers = () => {
  const page = useSelector((state) => state.page.value);
  const data = useSelector((state) => state.data.value);
  const books = data[page - 1].books;
  console.log("books", books);
  return (
    <div>
      <h1 className="font-extrabold">Best Sellers</h1>
      {!books.length
        ? null
        : books.map((book) => {
            return (
              <BestSellerList
                key={book.rank}
                author={book.author}
                img={book.book_image}
                publisher={book.publisher}
                description={book.description}
                isbn10={book.primary_isbn10}
                isbn13={book.primary_isbn13}
                amazon={book.buy_links[0].url}
                apple={book.buy_links[1].url}
                title={book.title}
                weeks={book.weeks_on_list}
              />
            );
          })}
    </div>
  );
};
export default BestSellers;
