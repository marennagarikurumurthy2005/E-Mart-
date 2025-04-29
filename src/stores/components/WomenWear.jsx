import React from 'react'
import { womanData } from '../data/woman'
import { Link } from 'react-router-dom'

const WomenWear = () => {
  const TopFiveWomenWear=womanData.slice(0,6)
    return (
  
  
      <div>
  
      <div className="NameofProduct">Women Fashion Wear</div>
      <div className='ProductContainer'>
  
          {
              
  
          TopFiveWomenWear.map((item)=>{
              return(
                  <div className='ProductImage'>
                      <Link to='/womenPage'><img src={item.image} alt="WomenWear" /></Link>
                  </div>
              )
          })
  
  
          }
  
      </div>
      
      </div>
    )
  }

export default WomenWear;