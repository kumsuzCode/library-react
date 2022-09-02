import React from "react";
import Book from "./ui/Book";
import { books } from "../data";

function Featured() {
  const featuredBookElements = books
    .filter((book) => book.rating === 5)
    .slice(0, 4)
    .map((book) => {
      return <Book key={book.id} book={book} />;
    });

  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">{featuredBookElements}</div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
