import React from 'react'

function SignUp(props) {
    return (
        <div className="modal-col">
            <h4>Sign up with a new account</h4>
            <form>
                <div className="field">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder='Username' id='username' />
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder='name@host.com' id='email'/>
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="Password" placeholder='Password' id='password' />
                </div>
                <br/>
                <button className='submit-btn'>Sign up</button>
                <span className='signup-option'>Need an account? <span className="link" onClick={()=>props.show(false)}>Sign in</span></span>
            </form>
        </div>
    )
}

export default SignUp
