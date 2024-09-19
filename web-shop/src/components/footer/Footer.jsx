import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <div className="footer-wrapper border-t border-black text-black mb-12">
      <hr className='hr-edit' />
        <div className="footer-container flex justify-evenly m-2">
          <div className="footer-top-block">
            <h3>Credits:</h3>
            <p>DummyJson Links Below</p>
            <a href="https://dummyjson.com/products"> Products Json</a>
            <br />
            <a href='https://dummyjson.com/products/category-list'> Category Json</a>
          </div>
          {/* Contact Information */}
          <div className="footer-section contact-info">
            <h3>Contact Us</h3>
            <p>
              <i className="fa-solid fa-phone" /> +123-456-7890
            </p>
            <p>
              <i className="fa-solid fa-envelope" /> support@yourwebsite.com
            </p>
            <p className="button mb-3">
              <i className="fa-solid fa-map-marker" /> 123 Main Street, City, Country
            </p>
            <NavLink className="button mt-3 p-2 border border-black rounded-lg" to="contactus">
              Complain or suggestion
             
            </NavLink>
          </div>
        </div>
        <hr className='hr-edit' />
        <div className="footer-bottom footer-bottom mt-4 p-4 border-t border-black text-center">
          <p>&copy; 2024 Your Website. All Rights Reserved. &copy;</p>
        </div>
      </div>

    </div>
  )
}

export default Footer
