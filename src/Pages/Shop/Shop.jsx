import { useState } from "react";

import "./shop.css";

import Product from "../../Components/Product/Product";
import Cart from "../../Components/Cart/Cart";

export default function Shop({
  count,
  productData,
  price,
  iQuantity,
  itemCart,
  setIQuantity,
  handleAddItem,
}) {
  return (
    <div className="shop">
      <div className="s-left">
        {productData.map((d) => (
          <Product key={d.id} pData={d} handleAddItem={handleAddItem} />
        ))}
      </div>
      <div className="s-right">
        <Cart
          count={count}
          price={price}
          setIQuantity={setIQuantity}
          iQuantity={iQuantity}
          itemCart={itemCart}
        />
      </div>
    </div>
  );
}
