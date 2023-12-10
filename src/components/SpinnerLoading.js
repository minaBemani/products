import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const SpinnerLoading = () => {
  return (
    <div style={{position: "fixed", left: "50%", top: "50%"}}>
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p>loading ...</p>
    </div>
  )
}

export default SpinnerLoading