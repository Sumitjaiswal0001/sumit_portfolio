import React, { useState } from 'react'
import './navbar.css'
import logo  from '../../assets/logo.png'
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';


const  Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img className='logo' src={logo} alt='' />
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem '>HOME</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem '>ABOUT</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem '>PORTFOLIO</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem '>CLIENT</Link>
        </div>
        <button onClick={() =>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}
           className="desktopMenubtn">
            <img src={contactImg} alt='' className='contactImg' />
            contact me
            </button>
            <img className='mobMenu' src={menu} alt='menu' onClick={()=>(setShowMenu(!showMenu))} />
        <div className='navMenu'  style={{display: showMenu ? 'flex' : ' none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>(setShowMenu(false))}>HOME</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>(setShowMenu(false))}>ABOUT</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>(setShowMenu(false))}>PORTFOLIO</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>(setShowMenu(false))}>CLIENT</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>(setShowMenu(false))}>contact</Link>
        </div>
    </nav>
  )
}

export default Navbar
