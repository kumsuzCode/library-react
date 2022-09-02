import React from "react";
import Book from "../components/ui/Book";

function Books({ books: initialBooks }) {
  const [books, setBooks] = React.useState(initialBooks);

  function filterBooks(event) {
    const { value } = event.target;
    console.log(value);

    if (value === "LOW_TO_HIGH") {
      setBooks(
        books
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      );
    }
    if (value === "HIGH_TO_LOW") {
      setBooks(
        books
          .slice()
          .sort(
            (a, b) =>
              (b.salePrice || b.originalPrice) -
              (a.salePrice || a.originalPrice)
          )
      );
    }
    if (value === "RATING") {
      setBooks(books.slice().sort((a, b) => b.rating - a.rating));
    }
  }

  // Renders book components from the state.
  const allBooks = books.map((book) => <Book book={book} key={book.id} />);

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                <select
                  name="sort"
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={filterBooks}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="books">{allBooks}</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Books;
