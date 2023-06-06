import React from 'react'
import './ProductStyles.css'
import Navbar from '../navbar/Navbar'

const Product = () => {
  return (
    <div className='product'>
      <Navbar/>
        <div className="container">
            <div className="content">
                <h2><span>New</span> Product</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi suscipit veniam deleniti maiores dolorem animi, ipsum nemo facilis vero est nulla corrupti dicta debitis?</p>
                <div><button>Join Us</button></div>            
            </div>
        </div>
    </div>
  )
}

export default Product
