import "./App.css";
import { BrowserRouter as Router, Routes, Route , NavLink} from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Modal from "./components/Modal";
import Header from "./components/Header";
/* import Product from "./pages/Product.js";
import About from "./pages/About"; */

const App = () => {
  const [visible, setVisible] = useState(false);
    
  return (
    <div className="container">
      <Router>
        {/* <Header visible={visible} setVisible={setVisible} /> */}
        <ul>
          <li>
            <NavLink to="/">Product</NavLink>
          </li>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        {visible && <Modal setVisible={setVisible} />}
      </Router>
    </div>
  );
};

export default App;
