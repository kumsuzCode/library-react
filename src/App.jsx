import "./index.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart((prevCart) => [...prevCart, { ...book, quantity: 1 }]);
  }

  function removeFromCart(book) {
    const newBooks = cart.filter((item) => item !== book);
    setCart(newBooks);
  }

  function changeQuantity(book, newQuantity) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: +newQuantity,
            }
          : item
      )
    );
  }

  const cartItems = () => {
    let counter = 0;
    cart.forEach((item) => (counter += item.quantity));
    return counter;
  };

  return (
    <Router>
      <div className="App">
        <Nav cartItems={cartItems()} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={
              <BookInfo books={books} addToCart={addToCart} cart={cart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                books={books}
                cart={cart}
                changeQuantity={changeQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
export default App;
