import React from 'react'
import {acData} from '../data/ac'
import { Link } from 'react-router-dom'

const Ac = () => {
 const TopFiveAC=acData.slice(0,6)
     return (
   
   
       <div>
   
       <div className="NameofProduct">Air Conditioners</div>
       <div className='ProductContainer'>
   
           {
               
   
           TopFiveAC.map((item)=>{
               return(
                   <div className='ProductImage'>
                    <Link to='/acPage' >  <img src={item.image} alt="AC" /></Link> 
                   </div>
               )
           })
   
   
           }
   
       </div>
       
       </div>
     )
   }

export default Ac