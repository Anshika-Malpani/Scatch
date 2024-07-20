import React, { useEffect } from 'react'
import ProductPage from '../components/ProductPage'

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
   <>
   <ProductPage />
   </>
  )
}

export default Product