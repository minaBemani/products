import { useEffect, useState, Suspense, lazy } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SpinnerLoading from './SpinnerLoading';
const ProductsLazy = lazy(() => import('./ProductsLazy'));


const Products = () => {

  const [products,setProducts] = useState([])

  function getAllProducts(){
    fetch("https://api.escuelajs.co/api/v1/products")
    .then(res=>res.json())
    .then(data=>setProducts(data))
}

  function sortDescProducts(){
    fetch("https://fakestoreapi.com/products?sort=desc")
    .then(res=>res.json())
    .then(data=>setProducts(data))
}


  function filterProductsCategory(e){
    fetch(`https://fakestoreapi.com/products/category/${e.target.value}`)
    .then(res=>res.json())
    .then(data=>setProducts(data))
}



  return (
    <div className='container mt-4'>
        <Button onClick={getAllProducts} className='me-3' variant="primary">All products</Button>
        <Button onClick={sortDescProducts} variant="primary">sort products by desc</Button>
        <p className='mt-3 mb-1 fw-bold '>filter by category:</p>
        <Form onChange={filterProductsCategory}>
          <Form.Check 
            type="radio"
            label="jewelery category"
            value="jewelery"
            name="radio"
          />
          <Form.Check 
            type="radio"
            label="electronics category"
            value="electronics"
            name="radio"
          />
        </Form>
        <Suspense fallback={<SpinnerLoading />}>
        <ProductsLazy />
        </Suspense>
    </div>
  )
}

export default Products