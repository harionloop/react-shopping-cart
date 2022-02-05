import "./shop.css";
import Product from "../../Components/Product/Product";
import Cart from "../../Components/Cart/Cart";

export default function Shop() {
  return (
    <div className="shop">
      <div className="s-left">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className="s-right">
        <Cart />
      </div>
    </div>
  );
}
