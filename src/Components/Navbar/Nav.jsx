import "./nav.css";

export default function Nav({ iQuantity }) {
  return (
    <div className="nav">
      <div className="nav-left">
        <h1>Food Shop</h1>
        <p>Hungry? Feed your hunger!</p>
        <span>
          <i
            style={{ fontSize: "20px", color: "greenyellow" }}
            className="fas fa-search"
          ></i>
          <input type="text" placeholder="Search for food..." />
        </span>
      </div>
      <div className="nav-right">
        <span>
          <i
            style={{ fontSize: "40px", color: "greenyellow" }}
            className="fas fa-shopping-cart"
          ></i>
        </span>
        <span>{iQuantity}</span>
      </div>
    </div>
  );
}
