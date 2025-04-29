import React from 'react'
import { menData } from '../data/men'
import { Link } from 'react-router-dom'

const MensWear = () => {
  const TopFiveMensWear=menData.slice(0,6)
    return (
  
  
      <div>
  
      <div className="NameofProduct">Mens Fashion Wear</div>
      <div className='ProductContainer'>
  
          {
              
  
          TopFiveMensWear.map((item)=>{
              return(
                  <div className='ProductImage'>
                      <Link to='mensPage'><img src={item.image} alt="Mobiles" /></Link>
                  </div>
              )
          })
  
  
          }
  
      </div>
      
      </div>
    )
  }

export default MensWear