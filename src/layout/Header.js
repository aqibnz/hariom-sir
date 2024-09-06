import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss'

function Header() {
    return (
        <header className='main-header'>
            <div className="header-container">
                <Link className='brand-logo' to="/">Logo</Link>
                <div className="header-links">
                    <button className='btn-out'>Sign In</button>
                </div>
            </div>
        </header>
    )
}

export default Header;
