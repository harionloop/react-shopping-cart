import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";

import Nav from "./Components/Navbar/Nav";
import Shop from "./Pages/Shop/Shop";
import CartPage from "./Pages/CartPage/CartPage";

function App() {
  const [data, setData] = useState([]);
  const [itemCart, setItemCart] = useState([]);
  // const itemCart = [];
  const [item, setItem] = useState([]);

  const [iPrice, setIPrice] = useState(0);
  const [iName, setIName] = useState("");
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

  const handleAddItem = (d) => {
    setIPrice(data.price);
    setIName(data.item_name);
    setIQuantity(iQuantity + 1);
    itemCart.push(d);

    setItem(data);
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
                item={item}
                productData={data}
                iPrice={iPrice}
                iName={iName}
                itemCart={itemCart}
                iQuantity={iQuantity}
                serIPrice={setIPrice}
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
                price={iPrice}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
