export const Add_to_cart='Add_to_cart';
export const Clear_cart='Clear_cart';
export const cartAction=(data)=>{
    return {
        type:Add_to_cart,
        payload:data
    }
}
export const clearCart=()=>{
    return{
        type:Clear_cart
    }
}