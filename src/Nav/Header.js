import React from 'react'
import {Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
    <div>Header
<div className='conatiner' >
        <nav >
            <ul className='ul'>
          <li>  <Link  className='li'to='home'>Home</Link></li>
          <li>  <Link className='li' to='about'>About</Link></li>
          <li> <Link className='li' to='message'>Message</Link></li>
          <li> <Link  className='li' to='contact'>Contact</Link></li> 
            </ul>
        </nav>
        </div>
    </div>
  )
}

export default Header