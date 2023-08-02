import React from 'react'
import './expolore.css'
import { Link } from 'react-router-dom'


const Expolore = () => {
  return (
    <div className='main_body'>
<div className='img_holder'>
    <div className='Wrapper'>
        <div className='header_text'>
            <h2>Trippy</h2>
            <h4>Explore the world,get Trippy🎈</h4>
       <Link to={'/login'}>
        <button>Explore</button>
       </Link>
        </div>
    </div>
</div>
    </div>
  )
}

export default Expolore