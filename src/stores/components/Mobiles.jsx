import React from 'react'
import { Link } from 'react-router-dom';
import { mobileData } from '../data/mobiles';


const Mobiles = () => {
    const TopFiveMobiles=mobileData.slice(0,6)
  return (


    <div>

    <div className="NameofProduct">Mobiles</div>
    <div className='ProductContainer'>

        {
            

        TopFiveMobiles.map((item)=>{
            return(
                <div className='ProductImage'>
                  <Link to='/mobilesPage' > <img src={item.image} alt="Mobiles" /></Link> 
                </div>
            )
        })


        }

    </div>
    
    </div>
  )
}

export default Mobiles;