import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actionCreators/productAction";
const CartItem = (props) => {
  const { title, id } = props?.cart;
const dispatch = useDispatch()
  return (
    <div>
      <h6>{title}</h6>
      <p>{id}</p>
      <Button onClick={() => dispatch(addToCart(props?.cardData))}>
        Add cart
      </Button>
    </div>
  );
};

export default CartItem;
