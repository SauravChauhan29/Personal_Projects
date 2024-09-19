import React from 'react'
import LandingPgae from '../HOME PAGE/LandingPgae'
import MainProduct from '../mainProducts/MainProduct'
import { useSelector } from 'react-redux'


const MainHome = () => {
  


const isTruess = useSelector((state) => state.toggler.isTrue);


  return (
    <>
      {isTruess ? <LandingPgae /> : <MainProduct />}
    </>
  );
}


  export default MainHome
