import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import ProductPage from '../components/ProductPage'

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
   <>
   <Navbar />
   <ProductPage />
   </>
  )
}

export default Product