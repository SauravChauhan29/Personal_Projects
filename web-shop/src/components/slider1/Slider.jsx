import React, { useEffect, useState } from 'react'
import './slider.css'

import img1 from '../ecomimages/ecom1.jpg'
import img2 from '../ecomimages/ecom2.jpg'
import img3 from '../ecomimages/ecom3.jpg'
import img4 from '../ecomimages/ecom4.jpg'
import styled from 'styled-components'



const sliderarr = [img1, img2, img3, img4]
const Slido = styled.div`
    height: 100%;
    width: 100%;
    background: url(${(prop) => prop.$backgroundimage});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;`

const Slider = () => {
    const [slidestate, setslidestate] = useState(0)

    const forward = () => {
        const isfirstSlide = slidestate === sliderarr.length - 1
        const newindex = isfirstSlide ? 0 : slidestate + 1
        setslidestate(newindex)
    }
    // console.log(slidestate)
    const bacWard = () => {
        const isfirstSlide = slidestate === 0
        const newindex = isfirstSlide? sliderarr.length - 1 : slidestate - 1
        setslidestate(newindex)
    }


    useEffect(() => {
        const interval = setInterval(() => {
            setslidestate((prevIndex) => {
                const isLastSlide = prevIndex === sliderarr.length - 1;
                return isLastSlide ? 0 : prevIndex + 1;
            });
        }, 3000);
    
        return () => clearInterval(interval); 
    }, []);





    return (
        <div className='slider-mom'>
            <Slido className="slider-contrainer " $backgroundimage={sliderarr[slidestate]}>
                
            </Slido>
           
                <button type="button" className="btn btn-secondary btn-pos-lef" onClick={bacWard} ><i className="fa-solid fa-arrow-left"></i></button>
                {/* <button type="button" className="btn btn-secondary" disabled></button> */}
                <button type="button" className="btn btn-secondary btn-pos-rig" onClick={forward} ><i className="fa-solid fa-arrow-right"></i></button>
       
        </div>
    )
}

export default Slider
