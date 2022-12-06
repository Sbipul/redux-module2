import { ADDTOCART, REMOVEFROMCART } from "../actionTypes/actionTypes";

export const addToCart = (data) => {
  return {
    type: ADDTOCART,
    payload: data,
  };
};
export const removeCart = (data) => {
    return{
        type:REMOVEFROMCART,
        payload:data
    }
}