import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom" 
import { FaDollarSign } from "react-icons/fa6";

const SingleProduct = () => {

    const {productId} = useParams();

    const [product,setProduct] = useState({})

    useEffect(()=>{
      fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
      .then(res=>res.json())
      .then(data=>setProduct(data))
    },[])  

    return (
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-xl-6 col-md-4 mb-4'>
                <img className='rounded' style={{ width: '80%' }} src={product.images} />
            </div>
            <div className='col-xl-6 col-md-8 d-flex flex-column justify-content-between'>
                    <div>
                        <div className='row'>
                            <div className="d-flex justify-content-between">
                                {product.images?.map((image,index)=>{
                                return <img key={index} className='rounded' style={{ width: '30%' }} src={image} />
                                })}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>{product.title}</h2>
                        <h4>category: {product.category?.name}</h4>
                    </div>
                    <div>
                        <h4>price: {product.price} <FaDollarSign style={{ fontSize: '20px' }} /></h4>
                        <p>{product.description}</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct