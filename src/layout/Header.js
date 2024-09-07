import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import SignIn from '../components/auth/SignIn';


function Header() {
    const [showSignIn, setShowSignIn] = useState(false);

    return (
        <>
            <header className='main-header'>
                <div className="header-container">
                    <Link className='brand-logo' to="/">Logo</Link>
                    <div className="header-links">
                        <button className='btn-out' onClick={() => setShowSignIn(true)}>Sign In</button>
                    </div>
                </div>
            </header>
            <SignIn show={showSignIn} close={setShowSignIn} />
        </>
    )
}

export default Header;
