import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CiBadgeDollar } from "react-icons/ci";
import { useNavigate } from "react-router-dom" 

function ProductCard(props) {

  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/products/${id}`)
  }

  return (
    <div className='mt-4 col-xl-3 col-lg-4 col-sm-6 d-flex justify-content-center'>
    <Card style={{ width: '18rem',cursor: "pointer" }} onClick={()=>handleClick(props.product.id)}>
      <Card.Img variant="top" src={props.product.images} />
      <Card.Body className='d-flex flex-column justify-content-between'>
        <div>
          <Card.Title>{props.product.title}</Card.Title>
          <Card.Text>{props.product.description}</Card.Text>
        </div>
        <div className='mt-3'>
          <Card.Text>price: {props.product.price}{<CiBadgeDollar style={{fontSize: "30px"}} className='ms-2' />}</Card.Text>
          <Button onClick={()=>handleClick(props.product.id)} variant="primary">click to view details</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ProductCard;