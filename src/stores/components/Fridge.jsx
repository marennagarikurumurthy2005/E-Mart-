import React from 'react'
import { fridgeData } from '../data/fridge'
import { Link } from 'react-router-dom'

const Fridge = () => {
  const TopFiveFridges=fridgeData.slice(0,6)
      return (
    
    
        <div>
    
        <div className="NameofProduct">Fridges</div>
        <div className='ProductContainer'>
    
            {
                
    
            TopFiveFridges.map((item)=>{
                return(
                    <div className='ProductImage'>
                        <Link to='/fridgePage'><img src={item.image} alt="Fridges" /></Link>
                    </div>
                )
            })
    
    
            }
    
        </div>
        
        </div>
      )
    }

export default Fridge