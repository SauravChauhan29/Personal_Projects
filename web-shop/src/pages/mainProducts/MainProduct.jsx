import React from 'react'
import Home from '../home/Homes.jsx'
import ProductDetailPage from '../../components/ProductDetail/ProductDetail.jsx'
import { useSelector } from 'react-redux';
const MainProduct = () => {
const isShowDetails = useSelector((state)=> state.toggler.showproductdetailtoggle)
console.log(isShowDetails)


  return (
    <div style={{marginTop:"5%"}}>
      {isShowDetails? <Home />: <ProductDetailPage />}
    </div>
  )
}

export default MainProduct
