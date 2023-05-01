import React, {useState} from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = (props) => {

  const product = props.products;
  // console.log(products);
   const products = product.slice(0, 10);
    const [cart, setCart] =useState([]);
    const handleAddProduct = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
      <div className="shop-container">
        <div className="product-container">
          {
            products.map(pd => <Product 
                handleAddProduct = {handleAddProduct}
                product={pd} key={pd.key} 
                ></Product>)
          }
        </div>
        <div className="cart-container">
          <Cart cart ={cart}></Cart>
        </div>
      
      </div>
    );
};
 export default Shop;