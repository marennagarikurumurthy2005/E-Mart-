import React from 'react'
import { watchData } from '../data/watch'
import { Link } from 'react-router-dom'

const Watches = () => {
  const TopFiveWatches=watchData.slice(0,6)
    return (
  
  
      <div>
  
      <div className="NameofProduct">Watches</div>
      <div className='ProductContainer'>
  
          {
              
  
          TopFiveWatches.map((item)=>{
              return(
                  <div className='ProductImage'>
                      <Link to='/watchPage'><img src={item.image} alt="Watches" /></Link>
                  </div>
              )
          })
  
  
          }
  
      </div>
      
      </div>
    )
  }
  

export default Watches