import React from 'react'
import Slider from '../../components/slider1/Slider'
import Categorise from '../../components/POSTPAGE CATEGORY/Categorise'
import Ads from '../../components/ads_4x4/Ads'
import './landingpage.css'
import SingleAdd from '../../components/singleadd/SingleAdd'

const LandingPgae = () => {
 
  return (
    <div>
      <Slider/>
      <Categorise/>

      <div className="flexe">
        <div className='add-sec-1' style={{width:"100%" ,height: "fit-content"}}>
        <Ads/>
        </div>
        <div style={{width:"100%"}}>
        
          <SingleAdd/>
        </div>

      </div>

    </div>
  )
}

export default LandingPgae
