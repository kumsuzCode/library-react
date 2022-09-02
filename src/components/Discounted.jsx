import React from "react";
import { books } from "../data";
import Book from "./ui/Book";

function Discounted() {
  const discountedBookElements = books
    .filter((book) => book.salePrice !== null)
    .slice(0, 8)
    .map((book) => {
      return <Book key={book.id} book={book} />;
    });

  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discounted <span className="purple">Books</span>
          </h2>
          <div className="books">{discountedBookElements}</div>
        </div>
      </div>
    </section>
  );
}

export default Discounted;
