import React from 'react'
import './header.css'
import mainimg from '../../img/mainimg.png'
function Header() {
  return (
    <>
      <div className='header'>
        <div className="header_content">
          <h1 className='header_text'>OpenAI Is An Artificial Intelligence Research Laboratory</h1>
          <div className="header_paragraph">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nostrum numquam veritatis dolor cupiditate pariatur facere possimus esse ipsam nulla, id, ut doloremque minus eos itaque, nobis adipisci voluptates atque. </p>
          </div>
          <div className="header_input">
            <input type="text" placeholder='Email Address'/>
            <button type='submit'>Get Started</button>
          </div>
        </div>
        <div className="header_image">
          <img src={mainimg} alt="random-image" />
        </div>
      </div>
    </>
  )
}

export default Header