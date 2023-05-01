import React from "react";
import {Route, Routes} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop.js";
import Review from "./components/Review/Review.js";
import Inventory from "./components/Inventory/Inventory.js";
import NotFound from "./components/NotFound/NotFound.js";
import ProductDetel from "./components/ProductDetel/ProductDetel.js";
import { useState,useEffect } from "react";
import data from "./data/data.json";


function App() { 
  const [products, setProducts] = useState(data);


  return (
    <>
      <Header />
      <Routes>
        <Route path="/shop" element ={<Shop products={products} />} />
        <Route path="/review" element ={<Review />} />
        <Route path="/inventory" element ={<Inventory />} />
        <Route exact path="/" element ={<Shop products={products}/>} />
        <Route path="/product/:productKey" element ={<ProductDetel products={products} />} />
        <Route path="*" element ={<NotFound />} />
        
      </Routes>
     
    </>
  );
}

export default App;
