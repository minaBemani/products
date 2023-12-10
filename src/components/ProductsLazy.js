import { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const ProductsLazy = () => {

  const [products,setProducts] = useState([])

  useEffect(()=>{
    getAllProducts();
  },[])  


  function getAllProducts(){
    fetch("https://api.escuelajs.co/api/v1/products")
    .then(res=>res.json())
    .then(data=>setProducts(data))
}

  return (
        <div className='row justify-content-between'>
            {products.map(product=>{
            return <ProductCard key={product.id} product={product} />
            })}
        </div>
  )
}

export default ProductsLazy