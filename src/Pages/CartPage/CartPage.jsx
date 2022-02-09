import { useState } from "react";
import { Link } from "react-router-dom";

import Cart from "../../Components/Cart/Cart";

import "./cartPage.css";

export default function CartPage({
  itemCart,
  iQuantity,
  setIQuantity,
  price,
  setPrice,
}) {
  const applyDiscount = () => {
    if (price < 100) {
      <span> No Discount below $100 Shopping</span>;
    } else if (price > 100 && price < 500) {
      setPrice(price - price * 0.1);
    } else {
      setPrice(price - price * 0.2);
    }
  };

  return (
    <div className="cartpage">
      <Link to="/">
        <button className="c-p-shop">
          <i className="fa fa-arrow-left"></i>
        </button>
      </Link>
      <div className="c-p-cart">
        <Cart
          itemCart={itemCart}
          iQuantity={iQuantity}
          setIQuantity={setIQuantity}
          price={price}
        />
      </div>
      {price <= 100 ? (
        <span>No Discount below $100 Shopping</span>
      ) : (
        <button className="c-p-discountButt" onClick={() => applyDiscount()}>
          Discount
        </button>
      )}
    </div>
  );
}
