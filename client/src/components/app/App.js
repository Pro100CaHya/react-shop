import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from '../header/Header';
import Goods from '../../pages/Goods';
import About from '../../pages/About';
import NotFound from '../../pages/NotFound';
import Footer from "../footer/Footer";

import './App.sass';
import Cart from '../../pages/Cart';

function App() {

  const [cartItems, setCartItems] = useState([]);

  function addToCartItem(item) {

    let flag = 1;

    for (let i = 0; i < cartItems.length; i++) {
      
      const isItemsEqual = (item.name === cartItems[i].name)
                           && (item.color === cartItems[i].color)
                           && (item.memory === cartItems[i].memory);

      if (isItemsEqual) {

        setCartItems(cartItems.map((elem, id) => {

          if (id === i) {

            elem.count++

          }

          return elem;

        }));

        flag = 0;

      }

    }

    if (flag) setCartItems([...cartItems, { ...item, count: 1 }]);

  }

  function deleteFromCartItem(id) {

    setCartItems([].concat(...cartItems.filter(elem => elem.id !== id)));

  }

  return (
    <BrowserRouter>
      <div className="app">
        <Header cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Goods addToCartItem={addToCartItem} />} />
          <Route path="/goods" element={<Goods addToCartItem={addToCartItem} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} deleteFromCartItem={deleteFromCartItem} />} />
          <Route path="/about" element={<About />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
