


import React from 'react'
import { kitchenData } from '../data/kitchen';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'


import { useCart } from '../context/CartContext'




const KitchenSingle = () => {
    const { id } = useParams();
    const product = kitchenData.find((item) => item.id === id);
    const {addToCart,cartItems}=useCart()
  
    return (
      <div>
        <Navbar />
  
        <div className="SinglePage">
          <div className="ImageHolder">
            {/* Left Side - Image */}
            <img src={product.image} alt={product.brand} className="ImageClassforSingle" />
            
            {/* Right Side - Details */}
            <div className="ProductDetails">
              <div className="SingleImageName">{product.brand}</div>
              <div className="SingleImageModel">{product.model}</div>
              <div className="SingleImagePrice">₹{product.price}</div>
              <div className="SingleImageDes">
                <p>{product.description}</p>
              </div>
              <div className="btn">
                <button className="AddtoCartButton" onClick={()=>addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default KitchenSingle