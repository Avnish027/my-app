import React from 'react'
import icon from './icon.png'
import './navbar.css'

function Navbar() {
  return (
    <div> <header>
        <img className='logo' src={icon} alt="" />
        <nav>
            <ul className='nav_links'>
                <li><a href="#">About US</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Contact</a></li>

            </ul>
        </nav>
        <a href="#"><button>Sign Up</button></a>
        </header>
    </div>
  )
}

export default Navbar