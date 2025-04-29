import React from 'react'
import { useCart } from './context/CartContext'
import Navbar from './components/Navbar'


const UserCart = () => {
    const { cartItems, removeFromCart,addToCart } = useCart(); // <-- bring removeFromCart here
    console.log(cartItems);

    return (
        <div className='CartPage'>
            <Navbar />

            {cartItems.length === 0 ? (
                <h2>Your cart is empty 😢</h2>
            ) : (
                cartItems.map((item, index) => (
                    <div className="CartHolder" key={index}>
                        <div className="CartImage">
                            <img src={item.image} alt={item.product} />
                        </div>
                        <div className="itemdetails">
                            <h3 className='ItemProductincart'>{item.product}</h3>
                            <h2 className='ItemPriceIncart'>₹ {item.price}</h2>
                            <h3 className="Itemmodelincart">{item.model}</h3>
                        </div>
                        <div className="removeButton">
                            <button onClick={() => removeFromCart(item)}>Remove</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default UserCart;
