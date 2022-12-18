import React from 'react'
import './navbar.css'
import logo from '../../img/logo.png'
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar_img">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navbar_links">
                    <p><a href="">Home</a></p>
                    <p><a href="">What is AI?</a></p>
                    <p><a href="">AI Api's</a></p>
                    <p><a href="">Documentation</a></p>
                </div>
                <div className="navbar_sign">
                    <p>Sign In</p>
                    <button>Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default Navbar