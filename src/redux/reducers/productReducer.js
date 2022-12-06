import { ADDTOCART, REMOVEFROMCART } from "../actionTypes/actionTypes";

const initialState = {
  cart: [],
};
const productReducer = (state = initialState, action) => {
    const selectedProduct = state.cart.find(product=> product.id === action.payload.id)
  switch (action.type) {
    case ADDTOCART:
        if (selectedProduct) {
            const newCart = state.cart.filter(product => product.id !== selectedProduct.id)
            selectedProduct.quantity = selectedProduct.quantity +1
            return {
                ...state,
                cart:[...newCart,selectedProduct]
            }
        }
      return {
        ...state,
        cart: [...state.cart, {...action.payload,quantity:1}],
      };
    case REMOVEFROMCART :
        return{
            ...state,
            cart:state.cart.filter(product => product.id !== action.payload)
        }
    default:
      return state;
  }
};
export default productReducer;
