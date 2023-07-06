import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartContext from "./context/CartContext";
import Home from "./Home/Home";
import Detail from "./ProductDetail/ProductDetail";


import NavBar from "./Navbar/Navbar";
import CartItem from "./CartItem/CartItem";

import { useState } from "react";
import Search from "./Search/Search.jsx";
import Cart from "./Cart/Cart.jsx";


function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <CartContext.Provider
        value={{
          cartItems: cartItems,
          setCartItems: setCartItems,
        }}
      >
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/detail/:productId" index element={<Detail />} />
            <Route path="/search" index element={<Search/>} />
            <Route path="/item" index element={<CartItem />} />
            <Route path="/cart" index element={<Cart />} />
          </Routes>
        </Router>
      </CartContext.Provider>
    </>
  );
}

export default App;
