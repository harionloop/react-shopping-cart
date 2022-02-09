import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";

import Nav from "./Components/Navbar/Nav";
import Shop from "./Pages/Shop/Shop";
import CartPage from "./Pages/CartPage/CartPage";

function App() {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(0);
  const [itemCart, setItemCart] = useState([]);
  const [iQuantity, setIQuantity] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7?limit=20"
      );
      setData(res.data);
    };
    fetchData();
  });

  const handleAddItem = (data) => {
    itemCart.push(data);

    const ids = itemCart.map((o) => o.id);
    const products = itemCart.filter(
      ({ id }, index) => !ids.includes(id, index + 1)
    );
    setItemCart(products);

    if (products) {
      let count = 1;
      data.count = count;
      const p = products.map((p) => p.id);
      if (p.includes(data.id)) {
        data.count = count++;
      } else {
        data.count = count;
      }
      console.log(data.id);
      console.log(p);
    }

    products.unshift(data);
    setPrice(price + data.price);
    setIQuantity(iQuantity + 1);
  };

  return (
    <Router>
      <div className="app">
        <Nav iQuantity={iQuantity} />

        <Routes>
          <Route
            path="/"
            element={
              <Shop
                price={price}
                productData={data}
                itemCart={itemCart}
                iQuantity={iQuantity}
                setIQuantity={setIQuantity}
                handleAddItem={handleAddItem}
              />
            }
          />
          <Route
            path="/cartpage"
            element={
              <CartPage
                itemCart={itemCart}
                iQuantity={iQuantity}
                setIQuantity={setIQuantity}
                setPrice={setPrice}
                price={price}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
