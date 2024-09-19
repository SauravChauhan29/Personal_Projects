import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import Navbar2 from './Navbar2';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const cartlenght = useSelector((state) => state.toggler.cart)




  return (
    <>
      <div className='nav-bar'>
      
        <div className="nav-bar-wrapper">
          <div className="logo-navbar"><NavLink className='main-navbar' to="/">Web Shop</NavLink></div>
          <ul className='nav-link-ul'>
            <li className='nav-links'><i className="fas fa-home"></i><NavLink className='main-navbar' to="/">Home</NavLink></li>
            <li className='nav-links'><i className="fa-solid fa-bag-shopping"></i><NavLink className='main-navbar' to="landing">Products</NavLink></li>
            <li className='nav-links' ><i className="fas fa-shopping-cart" style={{position:"relative"}}><span className={cartlenght.length>=1? "dot":"doton"}>{cartlenght.length}</span></i><NavLink className='main-navbar' to="cart">Cart</NavLink> </li>

            <li className='nav-links'><i className="fas fa-phone"></i><NavLink className='main-navbar' to="contactus">Contact Us</NavLink></li>
          </ul>
          {/* <i class='fa-solid fa-bar slide  blockofflogo  blockonlogo'></i>
          <i class='fa-solid fa-x slide  blockofflogo  blockonlogo' ></i> */}

        </div>
      </div>
      <div className='blocktoggle'>
        <Navbar2  />
      </div>
    </>
  );
}

export default Navbar;
