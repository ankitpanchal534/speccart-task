import React from 'react'
import './Header.css';
import logo from './Images/logo.png'
import {FiSearch , FiUser , FiHeart , FiHome,FiShoppingCart} from 'react-icons/fi'

export default function Header() {
  return (
    <div className='header'>
        <div className='header-list'>
<ul className='list-1 header-ul'>
    <li>Glasses </li>
    <li>Sunglasses </li>
    <li>Eye-Test </li>
    <li> Blogs</li>
</ul>
<img src={logo} alt='logo' className='logo' />
<ul className='list-2 header-ul'>
    <li><FiSearch /> </li>
    <li><FiUser /> </li>
    
    <li><FiHeart /></li>
    <li> <FiHome /></li>
    <li> <FiShoppingCart /></li>
</ul>



        </div>
        
    </div>
  )
}
