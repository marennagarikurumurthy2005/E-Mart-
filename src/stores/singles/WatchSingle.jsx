import React from 'react'
import { watchData } from '../data/watch';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

import { useParams } from 'react-router-dom'



import { useCart } from '../context/CartContext'




const WatchSingle = () => {
    const { id } = useParams();
    const product = watchData.find((item) => item.id === id);
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

export default WatchSingle