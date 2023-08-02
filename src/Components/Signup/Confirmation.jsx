import React from 'react'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import './signup.css'

const Confirmation = () => {
  return (
    <div className='confirm_holder'>
        <div className='confirm_box'>
            <div className='confirm_icon'>
                <AiOutlineInfoCircle className='ico'/>
            </div>
           <div className='confirm_text'> 
           <h4>Dear User,  please check your Email for verification</h4>
           </div>
        </div>
    </div>
  )
}

export default Confirmation