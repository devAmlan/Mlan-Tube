import React from 'react'
import "./Navbar.css"
import { CgProfile } from "react-icons/cg"
function Navbar() {
    return (

        <nav className="navbar">
            <div className="logo">
                <h3>Mlan Tube</h3>
            </div>
            <div className="search_bar">
                <input type="text" placeholder='Enter Video name'/>
            </div>
            <div className="login_btn">
                <CgProfile className='login_profile_icon'/>
                SIGN UP
            </div>
        </nav>
    )
}

export default Navbar