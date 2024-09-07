import { useState } from 'react';
import './auth.scss';
import SocialSignIn from './SocialSignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword'


function SignIn(props) {
    const [isSignUp, setIsSignUp] = useState(false)
    const [forgotPassword, setForgotPassword] = useState(false)
    const [forgotPasswordModal, setForgotPasswordModal] = useState('')

    const ForgotPasswordModal = () => {
        setForgotPassword(true)
        setForgotPasswordModal('forget-modal')
    }

    const modalClose = () => {
        let animation = document.querySelector('.modal-content');
        animation.classList.remove('bounceInDown');
        animation.classList.add('bounceOutDown');
        setTimeout(() => {
            props.close(false)
            setForgotPassword(false)
            setIsSignUp(false)
            setForgotPasswordModal('')
            animation.classList.remove('bounceOutDown');
        }, 1000);
    }
    
    if (props.show) {
        return (
            <div className="registration-modal">
                <div className="overlay" onClick={modalClose}></div>
                <div className={`modal-content animated bounceInDown ${forgotPasswordModal}`}>
                    <div className="modal-header"></div>
                    {
                        forgotPassword ? <ForgotPassword /> :
                        <div className="modal-row">
                            <SocialSignIn />
                            <div className="border"><span className="line"></span><span className="text">or</span></div>
                            {
                                isSignUp ? <SignUp show={setIsSignUp} /> :
                                <div className="modal-col">
                                    <h4>Sign in with your username and password</h4>
                                    <form>
                                        <div className="field">
                                            <label htmlFor="Username">Username</label>
                                            <input type="text" placeholder='Username' id='Username' />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="password">Password</label>
                                            <input type="Password" placeholder='Password' id='password' />
                                            <span className="link" onClick={ForgotPasswordModal}>Forgot your password?</span>
                                        </div>
                                        <button className='submit-btn'>Sign in</button>
                                        <span className='signup-option'>Need an account? <span className="link" onClick={() => setIsSignUp(true)}>Sign up</span></span>
                                    </form>
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default SignIn
