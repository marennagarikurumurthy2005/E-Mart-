import React from 'react'
import { computerData } from '../data/computers'
import { Link } from 'react-router-dom'

const Computers = () => {
  
    const TopFiveComputers=computerData.slice(0,6)
     
    return (
   
   
       <div >
   
       <div className="NameofProduct">Computers</div>
       <div className='ProductContainer'>
   
           {
               
   
           TopFiveComputers.map((item)=>{
               return(
                   <div className='ProductImage'>
                      <Link to='computerPage'> <img src={item.image} alt="Computers" /></Link>
                   </div>
               )
           })
   
   
           }
   
       </div>
       </div>
     )
   }

export default Computers;