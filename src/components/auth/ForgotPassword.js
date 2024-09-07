import React from 'react'

function ForgotPassword() {
    return (
        <div className='modal-row forgot-password'>
            <form>
                <h1>Forgot your password?</h1>
                <span>Enter your Username below and we will send a message to reset your password</span>
                <div className="field">
                    <input type="text" placeholder='Username' />
                </div>
                <button className='submit-btn reset-password'>Reset my password</button>
            </form>
        </div>
    )
}

export default ForgotPassword;
