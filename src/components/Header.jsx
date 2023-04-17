import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/Header.css';

const Header = ({ width }) => {
    const location = useLocation();
    const pathName = location.pathname;

    const [ menuClicked, setMenuClicked ] = useState(false);

    const handleMenuClick = () => {
        setMenuClicked(true);
    }

    const handleCloseClick = () => {
        setMenuClicked(false);
    }

    return (
        <header>
            <img src="/assets/shared/logo.svg" alt="star-img"/>
            <div className="header-line"></div>
      
            <img 
                className="menu-btn" 
                src="/assets/shared/icon-hamburger.svg" 
                alt="menu-btn"
                onClick={handleMenuClick} 
            />
            
            <nav className={menuClicked || width.screenWidth > 375 ? '' : 'hidden'}>
                <img 
                    className="close-btn" 
                    src="/assets/shared/icon-close.svg" 
                    alt="close-btn"
                    onClick={handleCloseClick}  
                />   
                <Link 
                    to='/' 
                    className={pathName === '/' ? 'link-selected' : undefined}
                    onClick={handleCloseClick} 
                >{((width.screenWidth > 768 && width.innerWidth > 768) || width.screenWidth) <= 375 && <span>00&nbsp;</span>}HOME</Link>
                <Link 
                    to='/destination' 
                    className={pathName === '/destination' ? 'link-selected' : undefined}
                    onClick={handleCloseClick} 
                >{((width.screenWidth > 768 && width.innerWidth > 768) || width.screenWidth <= 375) && <span>01&nbsp;</span>}DESTINATION</Link>
                <Link 
                    to='/crew' 
                    className={pathName === '/crew' ? 'link-selected' : undefined}
                    onClick={handleCloseClick}
                >{((width.screenWidth > 768 && width.innerWidth > 768) || width.screenWidth <= 375) && <span>02&nbsp;</span>}CREW</Link>
                <Link 
                    to='/technology' 
                    className={pathName === '/technology' ? 'link-selected' : undefined}
                    onClick={handleCloseClick} 
                >{((width.screenWidth > 768 && width.innerWidth > 768) || width.screenWidth <= 375) && <span>03&nbsp;</span>}TECHNOLOGY</Link>
            </nav>
        </header>
    )
}

export default Header;