import React from 'react'
import { booksData } from '../data/books'
import { Link } from 'react-router-dom'

const Books = () => {
 const TopFiveBooks=booksData.slice(0,6)
     return (
   
   
       <div>
   
       <div className="NameofProduct">Books</div>
       <div className='ProductContainer'>
   
           {
               
   
           TopFiveBooks.map((item)=>{
               return(
                   <div className='ProductImage'>
                    <Link to='/booksPage'>  <img src={item.image} alt="Books" /></Link> 
                   </div>
               )
           })
   
   
           }
   
       </div>
       
       </div>
     )
   }

export default Books;