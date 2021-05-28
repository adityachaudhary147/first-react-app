import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'
function Product({product}) {
    return (
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} />
        </Link>
        <Card.Body>
          <Card.Title as="div">
           
              <h3> {product.name} </h3>
           
          </Card.Title>

          <Card.Title>
            <div className="my-3">
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#f8e825"}
              />
            </div>
          </Card.Title>
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    );
}

export default Product
