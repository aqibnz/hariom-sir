import React, { useState } from 'react'
import './layout.scss';
import Diagnosis from '../assets/images/diagnosis.png'
import Treatments from '../assets/images/medical.png'
import Profile from '../assets/images/user.png'
import Department from '../assets/images/structure.png';
import Settings from '../assets/images/settings.png';
import Logout from '../assets/images/exit.png';
import { NavLink } from 'react-router-dom';
function Layout({ children }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='app-layout'>
            <div className="left-panel">
                <div className="menus-list">
                    <ul className='list'>
                        <li><NavLink to='/dashboard' className='title'><img src={Diagnosis} alt="icon" /> Diagnosis</NavLink></li>
                        <li ><NavLink to='/treatments' className='title'><img src={Treatments} alt="icon" /> Treatments</NavLink></li>
                        <li ><NavLink to='/profile' className='title'><img src={Profile} alt="icon" /> Profile</NavLink></li>
                        <li attr={isOpen.toString()}>
                            <NavLink to='/test-2' className='title'><img src={Department} alt="icon" /> Department </NavLink>
                            <span className='arrow' onClick={() => setIsOpen(!isOpen)}><i className="ri-arrow-down-s-line"></i></span>
                            <ul className="sub-menus">
                                <li><NavLink to='/test' className='title'>Sub-Menu-1</NavLink></li>
                                <li><NavLink to='/profile' className='title'>Sub-Menu-2</NavLink></li>
                                <li><NavLink to='/test-6' className='title'>Sub-Menu-3</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className='list bottom-menu'>
                        <li><NavLink to='/dashboard' className='title'><img src={Settings} alt="icon" /> Settings</NavLink></li>
                        <li ><NavLink to='/treatments' className='title'><img src={Logout} alt="icon" /> Logout</NavLink></li>
                    </ul>
                </div>



            </div>
            <div className="right-panel">
                {children}
            </div>
        </div>
    )
}

export default Layout
