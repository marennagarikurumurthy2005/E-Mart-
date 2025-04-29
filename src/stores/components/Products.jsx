import React from 'react'
import Mobiles from './Mobiles';
import Computers from './Computers';
import Watches from './Watches';
import MensWear from './MensWear';
import WomenWear from './WomenWear';
import Furnitures from './Furnitures';
import Kitchen from './Kitchen';
import Fridge from './Fridge';
import Books from './Books';
import Speakers from './Speakers';
import Tv from './Tv';
import Ac from './Ac';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
    <Mobiles />
    <Computers/>
    <Watches />
    <MensWear/>
    <WomenWear/>
    <Furnitures/>
    <Kitchen/>
    <Fridge/>
    <Books/>
    <Speakers/>
    <Tv/>
    <Ac/>
    </div>
  )
}

export default Products;