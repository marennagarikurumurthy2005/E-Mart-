import React from 'react'
import Products from './Products';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';


const Navbar = () => {
  const {cartItems}=useCart()
  return (
    <div>
    <div className='Navbar'>
        <Link to='/' ><div className="Name">E-Mart</div></Link>
        <div className="Searchbar">
            <input type="text" placeholder='Search.....' />
            <div className="Sign">SignIn | SignUp</div>
            <Link to='/cartPage'><div className="Lancart">Cart <span className='Cart-Count'>{cartItems.length}</span></div></Link>
        </div>
    </div>
    <div>  
      <div className='ProductsHead'>
      
             <Link to='/mobilesPage' className="ProductHeadLink"> <div className="ProductHeadMobiles">Mobiles</div></Link>
             <Link to='/computerPage' className="ProductHeadLink"><div className="ProductHeadComputers">Computers</div></Link>
             <Link to='/watchPage' className="ProductHeadLink"> <div className="ProductHeadWatches">Watches</div></Link>
             <Link to='/mensPage' className="ProductHeadLink"> <div className="ProductHeadMensWear">Mens-Wear</div></Link>
             <Link to='/womenPage' className="ProductHeadLink"><div className="ProductHeadWomenWear">Women-Wear</div></Link>
             <Link to='/furniturePage' className="ProductHeadLink"><div className="ProductHeadFurniture">Furnitures</div></Link>
             <Link to='/kitchenPage' className="ProductHeadLink"><div className="ProductHeadKitchen">Kitchen</div></Link>
             <Link to='/fridgePage' className="ProductHeadLink"><div className="ProductRe-Fridgerator">Re-Fridgerator</div></Link>
             <Link to='/booksPage' className="ProductHeadLink"><div className="ProductHeadBooks">Books</div></Link>
             <Link to='/speakersPage' className="ProductHeadLink"><div className="ProductHeadSpeakers">Speakers</div></Link>
             <Link to='/tvPage' className="ProductHeadLink"><div className="ProductHeadTV's">TV's</div></Link>
             <Link to='/acPage' className="ProductHeadLink"><div className="ProductHeadAC's">AC's</div></Link>
          </div>
    </div>
    </div>
  )
}

export default Navbar;