import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './layout.scss';
import SignIn from '../components/auth/SignIn';
import profileUser from '../assets/images/user-icon.png'


function Header() {
    const [showSignIn, setShowSignIn] = useState(false);

    const ref = useRef()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
                setIsMenuOpen(false);
                document.querySelector('.web-dropdown').classList.remove('open')
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpen]);

    const openDropdown = ()=>{
        setIsMenuOpen(true)
        document.querySelector('.web-dropdown').classList.add('open');
    }

    return (
        <>
            <header className='main-header'>
                <div className="header-container">
                    <Link className='brand-logo' to="/dashboard">Logo</Link>
                    <div className="header-links">
                        <div className="web-dropdown">
                            <button className="toggle-btn" title="User Name" onClick={openDropdown}><img src={profileUser} alt="user" /></button>
                            {isMenuOpen && (
                                <ul className="dropdown-list" ref={ref}>
                                    <li className="list-item"><Link to=''><i className="ri-user-line"></i> Profile</Link></li>
                                    <li className="list-item"><Link to=''><i className="ri-logout-circle-line"></i> Logout</Link></li>
                                </ul>
                            )}
                        </div>
                        <button className='btn-out' onClick={() => setShowSignIn(true)}>Sign In</button>
                    </div>
                </div>
            </header>
            <SignIn show={showSignIn} close={setShowSignIn} />
        </>
    )
}

export default Header;
