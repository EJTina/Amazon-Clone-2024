import React, { useState, useEffect } from 'react'; 
import classes from './ProductDetail.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../Components/Product/ProductCard'


function ProductDetail() {
  const [product, setProduct] = useState({});
  const {productId} = useParams()
  useEffect(() => {
    
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      setProduct(res.data);
     
    }).catch((err)=>{
      console.log(err)
      setIsLoading(false)
    })
  }, [])
  return (
    <LayOut>
      <ProductCard
    product={product}/>
    </LayOut>
  )
}

export default ProductDetail