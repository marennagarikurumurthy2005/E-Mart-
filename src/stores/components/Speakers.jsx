import React from 'react'
import {speakerData} from '../data/speaker'
import { Link } from 'react-router-dom'
const Speakers = () => {
  const TopFiveSpeakers=speakerData.slice(0,6)
      return (
    
    
        <div>
    
        <div className="NameofProduct">Speakers</div>
        <div className='ProductContainer'>
    
            {
                
    
            TopFiveSpeakers.map((item)=>{
                return(
                    <div className='ProductImage'>
                        <Link to='/speakersPage'><img src={item.image} alt="Speakers" /></Link>
                    </div>
                )
            })
    
    
            }
    
        </div>
        
        </div>
      )
    }

export default Speakers