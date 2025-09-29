import { Add_to_cart,Clear_cart } from './cartAction'
const initialState={
    cart:[]
};
export const cartReducer=(state=initialState,action)=>{
      switch(action.type)
      {
         case Add_to_cart:
            return {
                ...state,
                cart:[...state.cart,action.payload]
            }
        case Clear_cart:
            return {
                ...state,
                cart: []
            } 
        default:
            return state;
      }
}