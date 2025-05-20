import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop.jsx";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Products from "./Pages/Products.jsx";
import Cart from "./Pages/Cart.jsx";
import ProductDetails from "./Pages/ProductDetails";
import Footer from "./components/Footer.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/Store.js";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <Provider store={store}>
    <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>
      <Footer />
    </Router>
    </Provider>
  );
};

export default App;
