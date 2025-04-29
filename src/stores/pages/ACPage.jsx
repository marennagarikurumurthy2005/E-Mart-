import React, { useState } from 'react'
import { acData } from '../data/ac';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';


const ACPage = () => {
 const [productSelected,setProductSelected]=useState([])

 const companyHandler=(setPro)=>{
  if (productSelected.includes(setPro)) {
    setProductSelected(productSelected.filter(item=>item!==setPro))
    
  } else {
    setProductSelected([...productSelected,setPro])
    
  }
 }

const filteredProduct=productSelected.length===0? acData : acData.filter((filterpro)=>productSelected.includes(filterpro.company))





    return (

    

        <div>
            
           <div>
            <Navbar/>
             </div> 

              
 <div className="CheckBoxSelected">
          { acData.map((theProis)=>{
            return(
              <div>
                <label >
                  <input type='checkbox' 
                  checked={productSelected.includes(theProis.company)}
                  onChange={()=>{
                    companyHandler(theProis.company)
                  }}
                  
                  ></input>
                  {theProis.company}

                </label>

              </div>
            )
          })}
         </div>



             
        
        <div className="ProductPageContainerofPages">
          <h1>Air Conditioners</h1>
          <div className="ProductPageGridofPages">
            {filteredProduct.map((item, index) => (
              <div className="ProductCardofPages" key={index}>
                <Link to={`/acSingle/${item.id}`}><img src={item.image} alt={item.company} /></Link>
                <h3>{item.company} {item.model}</h3>
                <p>Price: {item.price}</p>
              </div>
            ))}
          </div>
        </div>
        
        </div>
       
      );
    };

export default ACPage