import React, { useState } from 'react';
import ProductDets from './ProductDets';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ProductDes = () => {
    const [cartItems, setCartItems] = useState([]); 
    const params = useParams()

    return (
        <>
            <Navbar cartItems={cartItems} setCartItems={setCartItems} />
            <ProductDets cartItems={cartItems} params={params}/>
        </>
    );
};

export default ProductDes;