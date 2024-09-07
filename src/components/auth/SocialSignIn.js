import React from 'react'
import appleImg from '../../assets/images/apple.svg'
import googleImg from '../../assets/images/google.svg'

function SocialSignIn() {
    return (
        <div className="modal-col social-signin">
            <div className="btn-block">
                <span className='label'>Sign in with your corporate ID</span>
                <button className='btn microsoft-btn'>Microsoft</button>
            </div>
            <div className="btn-block">
                <span className='label'>Sign In with your social account</span>
                <button className='btn apple-btn'><span className="icon"><img src={appleImg} alt="icon" /></span>Continue with Apple</button>
            </div>
            <div className="btn-block">
                <button className='btn google-btn'><span className='icon'><img src={googleImg} alt="icon" /></span>Continue with Google</button>
            </div>
            <span className='info-msg'>We won't post to any of your accounts without asking first</span>
        </div>
    )
}

export default SocialSignIn
