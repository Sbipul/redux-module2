import { ADDTOCART, REMOVEFROMCART } from "../actionTypes/actionTypes";

export const addToCart = (data) => {
  return {
    type: ADDTOCART,
    payload: data,
  };
};
export const removeCart = (id) => {
    return{
        type:REMOVEFROMCART,
        payload:id
    }
}