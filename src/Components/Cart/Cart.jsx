import "./cart.css";
import Product from "../Product/Product";

export default function Cart() {
  return (
    <div className="cart">
      <h1>Cart</h1>
      <p>Total items:1</p>
      <section className="c-top">
        <div className="c-left">
          <div className="cp-details">
            <h1>product name</h1>
            <p>$229</p>
          </div>
          <img
            className="cp-img"
            src="https://s.inyourpocket.com/gallery/helsinki/2019/11/shutterstock-1306257490.jpg"
            alt=""
          />
        </div>
        <div className="c-right">
          <div className="cr-container">
            <span className="item">
              <i className="fas fa-minus"></i>
            </span>
            <span>1</span>
            <span>
              <i className="fas fa-plus"></i>
            </span>
          </div>
          <button className="cr-butt">Remove</button>
        </div>
      </section>
      <section className="c-bottom">
        <h4 className="c-subtotal">
          Subtotal: <span>$219</span>
        </h4>
        <span>No shipping charges!</span>

        <button className="c-checkout-butt">Checkout</button>
      </section>
    </div>
  );
}
