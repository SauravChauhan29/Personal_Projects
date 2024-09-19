import React from 'react'
import './navbar2.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar2 = () => {
  const cartlenght = useSelector((state) => state.toggler.cart)

  return (
    <div>
      <ul className='nav-link-ul2'>
          <li className='nav-links'><i className="fas fa-home"></i><NavLink className='main-navbar' to="/">Home</NavLink></li>
          <li className='nav-links'><i className="fas fa-bag-shopping"></i><NavLink className='main-navbar'  to="landing">Products</NavLink></li>
          <li className='nav-links'><i className="fas fa-shopping-cart" style={{position:"relative"}} ><span className={cartlenght.length>=1? "dot":"doton"}>{cartlenght.length}</span></i><NavLink className='main-navbar' to="cart" >Cart</NavLink></li>
          <li className='nav-links'><i className="fas fa-phone"></i><NavLink className='main-navbar'  to="contactus">Contact Us</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar2
