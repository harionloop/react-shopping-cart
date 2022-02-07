import { useState } from "react";
import { Link } from "react-router-dom";

import "./cart.css";

export default function Cart({
  price,
  // name,
  itemCart,
  setIQuantity,
  iQuantity,
  // setPrice,
}) {
  const [count, setCount] = useState(1);

  const countUP = (d, id) => {
    if (id) {
      setIQuantity(iQuantity + 1);
      setCount(count + 1);
    }
  };
  const countDown = (d) => {
    setIQuantity(iQuantity - 1);
    setCount(count - 1);
    d.price = d.price - d.price;
  };

  const handleRemove = (id) => {
    itemCart.pop(id);
    setIQuantity(iQuantity - count);
    setCount(1);
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      <p>Total items:{iQuantity}</p>
      {itemCart.map((d) => (
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
                <span key={d.id}>{count}</span>
                <span>
                  <i
                    className="fas fa-plus"
                    onClick={() => countUP(d, d.id)}
                  ></i>
                </span>
              </div>
              <button className="cr-butt" onClick={() => handleRemove(d.id)}>
                Remove
              </button>
            </div>
          </div>
        </section>
      ))}
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
