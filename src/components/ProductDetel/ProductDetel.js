import React from 'react';
import './ProductDetel.css'
import { useParams } from 'react-router-dom';
import Product from '../Product/Product.js';

const ProductDetel = (props) => { 
    const products  = props.products;
    const {productKey} = useParams();

    const product = products.find(pd => pd.key === productKey);
    console.log(product);
    return (
        <div> 
            <h1>Your Product Detel...{productKey}</h1> 
            <Product product={product}></Product>
        </div>
    );
};

export default ProductDetel;