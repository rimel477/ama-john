import React, {useState} from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getStoredCart } from '../../utilities/fakedb.js';
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const Shop = (props) => {
  const product= props.products;
  const products = product.slice(0, 10);
  const [cart, setCart] =useState([]);

  useEffect(()=>{
    const saveCart = getStoredCart();
    const productKeys = Object.keys(saveCart);
    const previousCart = productKeys.map(existingKey => {
      const productExist = product.find(pd => pd.key === existingKey);
      productExist.quantity = saveCart[existingKey];
      return productExist;
    })
    setCart(previousCart);
  },[])

    const handleAddProduct = (product) =>{

      const toBeAddedKey = product.key;
      const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
      
      let count = 1;
      let newCart;
      if(sameProduct)  {
        const count = sameProduct.quantity + 1;
        sameProduct.quantity = count;
        const others = cart.filter(pd => pd.key !== toBeAddedKey);
        newCart = [...others, sameProduct];

      }
      else {
        product.quantity = 1;
        newCart = [...cart, product];

      }
        setCart(newCart); 
        addToDb(product.key, count);
    }


    return (
      <div className="twin-container">
        <div className="product-container">
          {
            products.map(pd => <Product 
                handleAddProduct = {handleAddProduct}
                showAddToCart={true}
                product={pd} key={pd.key} 
                ></Product>)
          }
        </div>
        <div className="cart-container">
          <Cart cart ={cart}>
            <Link to='/review'>
                <button className='main-btn'>Review Order</button>
            </Link>
          </Cart>
        </div>
      
      </div>
    );
};
 export default Shop;