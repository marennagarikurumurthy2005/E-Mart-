import React from 'react'
import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom'

const Furnitures = () => {
  const TopFiveFurnitures=furnitureData.slice(0,6)
      return (
    
    
        <div>
    
        <div className="NameofProduct">Furnitures</div>
        <div className='ProductContainer'>
    
            {
                
    
            TopFiveFurnitures.map((item)=>{
                return(
                    <div className='ProductImage'>
                        <Link to='/furniturePage'><img src={item.image} alt="Furnitures" /></Link>
                    </div>
                )
            })
    
    
            }
    
        </div>
        
        </div>
      )
    }

export default Furnitures;