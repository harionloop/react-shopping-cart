import { useState } from "react";
import { Link } from "react-router-dom";

import "./cart.css";

export default function Cart({
  count,
  price,
  itemCart,
  iQuantity,
  setIQuantity,
}) {
  const countUP = (d) => {
    setIQuantity(count + 1);
    d.count = count + 1;
    console.log(d);
  };
  const countDown = (d) => {
    setIQuantity(iQuantity - 1);
  };

  const handleRemove = (id) => {
    itemCart.pop(id);
    setIQuantity(iQuantity - count);
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      <p>Total items:{iQuantity}</p>
      {itemCart.map((d) => {
        return (
          <section className="c-top">
            <div className="c-left">
              <div className="cp-details">
                <h1>{d.item_name}</h1>
                <p>${d.price}</p>
              </div>
              <img
                className="cp-img"
                src="https://s.inyourpocket.com/gallery/helsinki/2019/11/shutterstock-1306257490.jpg"
                alt=""
              />
              <div className="c-right">
                <div className="cr-container">
                  <span>
                    {count > 1 ? (
                      <i
                        className="fas fa-minus"
                        onClick={() => countDown(d)}
                      ></i>
                    ) : (
                      <i
                        className="fas fa-minus"
                        style={{ color: "gray", cursor: "not-allowed" }}
                      ></i>
                    )}
                  </span>
                  <span>{count}</span>
                  <span>
                    <i className="fas fa-plus" onClick={() => countUP(d)}></i>
                  </span>
                </div>
                <button className="cr-butt" onClick={() => handleRemove(d.id)}>
                  Remove
                </button>
              </div>
            </div>
          </section>
        );
      })}
      <section className="c-bottom">
        <h4 className="c-subtotal">
          Subtotal: <span>${price}</span>
        </h4>
        <span>No shipping charges!</span>
        <Link to="/cartpage">
          <button className="c-checkout-butt">Payment</button>
        </Link>
      </section>
    </div>
  );
}
