import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
// import './homecss.css'
// import HorizontalNavbar from '../../components/NavBar/horizontal navbar/HorizontalNavbar'
import Products from '../../components/productsexample/Products'
// import ProductCard from '../../components/ProductCard/ProductCard'

const Home = ({showDetail}) => {

  return (
    <div className='home-wrapper'>
      <Navbar />
      <div className="main">
      
        <div className="horizontal_navbar">
         <Products showDetail={showDetail}/>
         
         
        </div>
      </div>
    </div>
  )
}

export default Home
