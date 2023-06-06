import React from 'react'
import './HeroStyles.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Product from '../product/Product'
import Part from '../part/Part'
import Contact from '../contact/Contact'

const Hero = () => {
  return (
    <div className='hero'>
      <Navbar/>
      <div className="container">
        <div className="content">
            <h1>Learn</h1>
            <h1 className='blue'>Cyber</h1>
            <h1>Security</h1>
            <div><button>Learn More</button></div>
        </div>
      </div>
      <Product/>
      <Part/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Hero
