import { Children, createContext, useContext, useState } from "react";



 const CartContext=createContext()
 export const CartProvider=({children})=>{
    const [cartItems,setCartItems]=useState([])

    const addToCart=(item)=>{
        setCartItems([...cartItems,item])
    }
    const removeFromCart=(item)=>{
        setCartItems(cartItems.filter((removed)=>removed!==item))
    }
    return(
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart}}>
            {children}

        </CartContext.Provider>
    )



 }


 export const useCart=()=>{
    return useContext(CartContext)
 }