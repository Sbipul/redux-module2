import { ADDTOCART, REMOVEFROMCART } from "../actionTypes/actionTypes";

const initialState = {
  cart: [],
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVEFROMCART :
        return{
            
        }
    default:
      return state;
  }
};
export default productReducer;
