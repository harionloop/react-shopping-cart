import { useState } from "react";

import "./shop.css";

import Product from "../../Components/Product/Product";
import Cart from "../../Components/Cart/Cart";

export default function Shop({
  item,
  productData,
  iPrice,
  iName,
  iQuantity,
  itemCart,
  setIPrice,
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
          price={iPrice}
          setPrice={setIPrice}
          name={iName}
          setIQuantity={setIQuantity}
          iQuantity={iQuantity}
          itemCart={itemCart}
        />
      </div>
    </div>
  );
}
