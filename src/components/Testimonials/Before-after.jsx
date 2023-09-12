import React from 'react'
import './Testimonials.css'
import img from '../../assets/image1.png'

const BeforeAfter = () => {
  return (
    <div className='wrapper'>
        
        <div className="container">
            <div>
                <span>ANTES</span>
                <span>DEPOIS</span>
            </div>
            
            <img src={img} alt="" />
        </div>
        <div className="container">
            <div>
                <span>ANTES</span>
                <span>DEPOIS</span>
            </div>
            <img src={img} alt="" />
        </div>
        <div className="container">
            <div>
                <span>ANTES</span>
                <span>DEPOIS</span>
            </div>
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default BeforeAfter