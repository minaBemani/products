import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';  

const AddNewProduct = () => {

    const [title,setTitle] = useState("")
    const [price,setPrice] = useState("")
    const [description,setDescription] = useState("")
    const [category,setCategory] = useState("")

    function handleSubmit(e){
        e.preventDefault();

        fetch("https://fakestoreapi.com/products",{
        method: "POST",
        body: JSON.stringify(
            {
                title,
                price,
                description,
                category 
            }
        )
      })
      .then(res=>res.json())
      .then(toast.success('product inserted successfully!'))
    }
      

  return (
    <div className='mx-auto w-50'>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>title</Form.Label>
        <Form.Control type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Enter title" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>price</Form.Label>
        <Form.Control type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter price" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>description</Form.Label>
        <Form.Control type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Enter description" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>category</Form.Label>
        <Form.Control type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Enter category" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>image</Form.Label>
        <Form.Control type="file" placeholder="image" />
      </Form.Group>
      <Button onClick={handleSubmit} variant="primary" type="submit"> Submit</Button>
      <ToastContainer />
    </Form>
    </div>
  )
}

export default AddNewProduct