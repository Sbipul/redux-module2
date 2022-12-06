import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADDTOCART } from "../redux/actionTypes/actionTypes";
import { addToCart } from "../redux/actionCreators/productAction";
const HomeComponents = (props) => {
  const { id, thumbnailUrl, title, url } = props?.cardData;
  const dispatch = useDispatch();
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={thumbnailUrl} />
        <Card.Body>
          <span>{id}</span>
          <Card.Title>{title.slice(0,15)}</Card.Title>
          <div className="d-flex align-items-center justify-content-between">
            <Button onClick={() => dispatch(addToCart(props?.cardData))}>
              Add cart
            </Button>
            <Button>Remove cart</Button>
          </div>
          <Link to={url}>Link</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HomeComponents;
