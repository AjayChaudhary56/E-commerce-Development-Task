import { createContext } from "react"


const initialState = {
    cartItems: [],
    setCartItems: ()=>{},
}


const CartContext = createContext(initialState)


export default CartContext