import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Price from "../components/ui/Price";
import Rating from "../components/ui/Rating";
import Book from "../components/ui/Book";

function BookInfo({ books, addToCart, cart }) {
  const { id } = useParams();
  const specifiedBook = books.find((book) => book.id === +id);

  const recommendedBooks = books
    .filter((book) => book !== specifiedBook && book.rating === 5)
    .slice(0, 4)
    .map((book) => <Book book={book} key={book.id} />);

  function addBookToCart(book) {
    addToCart(book);
  }

  function bookExistsInCart() {
    const dupe = cart.find((book) => book.id === +id);
    return dupe;
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src={specifiedBook.url}
                  alt="Selected Book"
                  className="book__selected--img"
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{specifiedBook.title}</h2>
                <Rating rating={specifiedBook.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={specifiedBook.originalPrice}
                    salePrice={specifiedBook.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem ab deserunt adipisci cum, praesentium aperiam eos.
                    Molestias magni, incidunt vero dolorem cumque pariatur
                    similique aliquid fuga nisi sint quaerat nesciunt!
                  </p>
                  <p className="book__summary__para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem ab deserunt adipisci cum, praesentium aperiam eos.
                    Molestias magni, incidunt vero dolorem cumque pariatur
                    similique aliquid fuga nisi sint quaerat nesciunt!
                  </p>
                </div>
                {bookExistsInCart() ? (
                  <Link to="/cart">
                    <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button
                    className="btn"
                    onClick={() => addBookToCart(specifiedBook)}
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">{recommendedBooks}</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BookInfo;
