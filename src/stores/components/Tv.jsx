import React from 'react'
import {tvData} from '../data/tv'
import { Link } from 'react-router-dom'


const Tv = () => {
  const TopFiveTV=tvData.slice(0,6)
      return (
    
    
        <div>
    
        <div className="NameofProduct">Televisions</div>
        <div className='ProductContainer'>
    
            {
                
    
            TopFiveTV.map((item)=>{
                return(
                    <div className='ProductImage'>
                       <Link to='/tvPage'> <img src={item.image} alt="TV" /></Link>
                    </div>
                )
            })
    
    
            }
    
        </div>
        
        </div>
      )
    }

export default Tv