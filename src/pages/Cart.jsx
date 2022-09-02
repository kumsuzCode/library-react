import React from "react";
import CartItem from "../components/ui/CartItem";
import EmptyCart from "../assets/empty_cart.svg";
import { Link } from "react-router-dom";

function Cart({ cart, changeQuantity, removeFromCart }) {
  const total = () => {
    let total = 0;
    cart.forEach((book) => {
      total += +(book.salePrice || book.originalPrice) * book.quantity;
    });
    return total;
  };

  const cartItems = cart.map((book) => {
    return (
      <CartItem
        book={book}
        key={book.id}
        changeQuantity={changeQuantity}
        removeFromCart={removeFromCart}
      />
    );
  });

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              {cart.length !== 0 ? (
                <div className="cart__body">{cartItems}</div>
              ) : (
                <div className="cart__empty">
                  <img src={EmptyCart} alt="" className="cart__empty--img" />
                  <h2>You don't have any books in your cart!</h2>
                  <Link to="/books">
                    <button className="btn">Browse Books</button>
                  </Link>
                </div>
              )}
            </div>
            {cart.length !== 0 && (
              <div className="total">
                <div className="total__item total__sub-total">
                  <span className="">Subtotal</span>
                  <span className="">${(total() * 0.9).toFixed(2)}</span>
                </div>
                <div className="total__item total__tax">
                  <span className="">Tax</span>
                  <span className="">${(total() * 0.1).toFixed(2)}</span>
                </div>
                <div className="total__item total__price">
                  <span className="">Price</span>
                  <span className="">${total().toFixed(2)}</span>
                </div>
                <button
                  className="btn btn__checkout no-cursor"
                  onClick={() => alert("Haven't got around to doing this yet!")}
                >
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;
