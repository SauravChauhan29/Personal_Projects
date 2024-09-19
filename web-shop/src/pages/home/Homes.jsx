import React from 'react'
import './homecss.css'
// import Navbar from '../../components/NavBar/Navbar'
import Products from '../../components/productsexample/Products'
import { NavLink } from 'react-router-dom'
import { landingPageTogggle2 } from '../../redux/action/action'
import { useDispatch } from 'react-redux'


const Home = () => {
  const dispatch = useDispatch()
  const handleMainHomeNavigation = ()=> {
    dispatch(landingPageTogggle2())
  }
  return (
    <div>
      <h2 className='nav-linker' onClick={handleMainHomeNavigation}><NavLink className='main-navbar' to="/">Home /</NavLink></h2>
      <Products/>
    </div>
  )
}

export default Home
