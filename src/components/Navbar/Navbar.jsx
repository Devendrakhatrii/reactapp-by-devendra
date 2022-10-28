import React, { useState } from 'react';
import {MdOutlineRestaurantMenu}  from "react-icons/md";
import {MdViewHeadline}  from "react-icons/md";
import images from "../../constants/images";
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu,setToggleMenu]=useState(false);

  return(
  <nav className="app__navbar">
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="app logo" />
    </div>

    <ul className="app__navbar-links">
      <li className="p__opensans">
        <a href="#home">Home</a>
      </li>
      <li className="p__opensans">
        <a href="#About">About</a>
      </li>
      <li className="p__opensans">
        <a href="#Menu">Menu</a>
      </li>
      <li className="p__opensans">
        <a href="#awards">Awards</a>
      </li>
      <li className="p__opensans">
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <div className="app__navbar-login">
      <a href="#login" className="p__apensans">
        Log In / Register
      </a>
      <a href="/" className="p__apensans ">
        Book Table{" "}
      </a>
    </div>

    <div className="app__navbar-smallscreen">
      <MdViewHeadline
      color='#fff'
        fontSize={27} onClick={() => setToggleMenu(true)} />


        {toggleMenu && (

      <div className="app__navbar-smallscreen_overlay   flex__center slide-bottom">
        <MdOutlineRestaurantMenu fontSize={27}  className="overlayclose" onClick={()=>setToggleMenu(false)}/>
        <ul className="app__navbar-smallscreen-links">
          <li className="p__opensans">
            <a href="#home">Home</a>
          </li>
          <li className="p__opensans">
            <a href="#About">About</a>
          </li>
          <li className="p__opensans">
            <a href="#Menu">Menu</a>
          </li>
          <li className="p__opensans">
            <a href="#awards">Awards</a>
          </li>
          <li className="p__opensans">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      )}

    </div>
  </nav>
)
}

export default Navbar;
