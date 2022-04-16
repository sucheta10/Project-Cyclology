import React, { useState } from 'react';
import logo from '../images/logo.png';
import { Link } from "react-router-dom";


function Navbar() {

    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 30) {
            setNav('true');
        }
        else {
            setNav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);
    

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to='/' className='logo rounded-full pt-2 pb-2 pl-6' smooth={'true'} duration={2000}>
                <img className='rounded-full' src={logo} alt='...' />
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn' />
            <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li className='dropdown'><Link to='/event' smooth={'true'} duration={1000} className='font-serif'>Event</Link>
                    <ul className="dropdown-menu pr-2 pt-2 pb-2 bg-black" >
                        <li><a className="dropdown-item text-white font-serif text-xs mt-0 pt-3 hover:bg-[#1814ff] hover:text-white" href="#top">Current Events</a></li>
                        <li><a className="dropdown-item text-white font-serif text-xs pt-3 hover:bg-[#1814ff] hover:text-white" href="#upcomingevent">Upcoming Events</a></li>
                        <li><a className="dropdown-item text-white font-serif text-xs pt-3 hover:bg-[#1814ff] hover:text-white" href="#previousevent">Previous Events</a></li>
                    </ul>
                </li>
                <li className='dropdown'><Link to='/gallery' smooth={'true'} duration={1000} className='font-serif'>Gallery</Link>
                    <ul className="dropdown-menu pr-2 pt-2 pb-2 bg-black" >
                        <li><a className="dropdown-item text-white font-serif text-xs mt-0 pt-3 hover:bg-[#1814ff] hover:text-white" href="#photo">Photo Album</a></li>
                        <li><a className="dropdown-item text-white font-serif text-xs pt-3 hover:bg-[#1814ff] hover:text-white" href="#video">Videos</a></li>
                    </ul>
                </li>
                <li><Link to='/blog' smooth={'true'} duration={1000} className='font-serif'>Blog</Link></li>
                <li><Link to='/mainabout' smooth={'true'} duration={1000} className='font-serif'>About</Link></li>
                <li><Link to='/signin' smooth={'true'} duration={1000} className='font-serif'>Sign In</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;