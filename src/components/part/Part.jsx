import React from 'react'
import './PartStyles.css'
import Navbar from '../navbar/Navbar'

const Part = () => {
  return (
    <div className='part'>
      <Navbar/>
        <div className="container">
            <div className="content">
                <h2><span>Spare</span> Part</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime in impedit error. Accusamus totam vero, necessitatibus quos obcaecati dicta temporibus!</p>
                <div><button>Order Now</button></div>
            </div>
        </div>
    </div>
  )
}

export default Part
