import React, { useEffect, useState } from 'react';
import { deleteFromDb, clearTheCart, getStoredCart} from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem.js';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';

const Review = (props) => {
    const products = props.products;
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        clearTheCart(); 
    }


    const hendalRemoveProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        deleteFromDb(productKey);
        
    }

    useEffect(()=>{
        const saveCart = getStoredCart();
        const productKeys = Object.keys(saveCart);

        const cartProducts = productKeys.map( key => {
            const product = products.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        });
        setCart(cartProducts);
    }, [products])

    let thankYou;
    if (orderPlaced) {
        thankYou = <img src={happyImage} alt="" />
    }
     
    return (
        <div className='twin-container'>
            <div className='product-container'>
               {
                    cart.map(pd => <ReviewItem 
                        key={pd.key}
                        hendalRemoveProduct={hendalRemoveProduct}
                        product={pd} 
                    ></ReviewItem>)
                } 
                 {thankYou}
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className='main-btn'>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;