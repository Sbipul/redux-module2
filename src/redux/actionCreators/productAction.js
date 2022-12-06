import { ADDTOCART } from "../actionTypes/actionTypes";

export const addToCart = (data) => {
  return {
    type: ADDTOCART,
    payload: data,
  };
};
