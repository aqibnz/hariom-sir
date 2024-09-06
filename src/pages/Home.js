import React from 'react';
import './home.scss';

const Home = () => {
    return (
        <div className='home-page'>
            <div className="content">
                <h1>Modern ICD-10</h1>
                <p>The treatment bank meant for the end users when it truly matters.</p>
                <button className='green-btn'>See Available Treatments</button>
            </div>
        </div>
    )
}

export default Home;