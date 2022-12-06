import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, removeCart } from "../redux/actionCreators/productAction";
const ProductCard = (props) => {
  const { id, thumbnailUrl, title, url,quantity } = props.cardData;
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  return (
    <Col>
      <Card>
        <Card.Img className="h-50" variant="top" src={thumbnailUrl} />
        <Card.Body>
          <span>{quantity}</span>
          <Card.Title>{title?.slice(0, 15)}</Card.Title>
          <div className="d-flex align-items-center justify-content-between">
            {pathname.includes("cart") ? (
              <Button onClick={() => dispatch(removeCart(id))}>
                Remove cart
              </Button>
            ) : (
              <Button onClick={() => dispatch(addToCart(props?.cardData))}>
                Add cart
              </Button>
            )}
          </div>
          <Link to={url}>Link</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
