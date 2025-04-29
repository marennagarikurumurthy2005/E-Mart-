import React from 'react'
import { kitchenData } from '../data/kitchen'
import { Link } from 'react-router-dom'


const Kitchen = () => {
  const TopFiveKitchen=kitchenData.slice(0,6)
      return (
    
    
        <div>
    
        <div className="NameofProduct">Kitchen</div>
        <div className='ProductContainer'>
    
            {
                
    
            TopFiveKitchen.map((item)=>{
                return(
                    <div className='ProductImage'>
                        <Link to='/kitchenPage'><img src={item.image} alt="Kitchen" /></Link>
                    </div>
                )
            })
    
    
            }
    
        </div>
        
        </div>
      )
    }

export default Kitchen