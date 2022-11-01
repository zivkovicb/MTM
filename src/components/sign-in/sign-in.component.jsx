import React from 'react'

import './sign-in.styles.css';

const SignIn = () => {
  

  return (
    <div className='sign-in-container'>
      <div className='username-pssw-input-container'>
        <input
          className='username-input'
          type='text'
          placeholder='Enter username' 
        />
        <input
          className='password-input'
          type='password'
          placeholder='Enter password'
        />
      </div>
      <div className='sign-in-up-buttons-container'>
        <button className='sign-in-button'>LOG IN</button>
        {/* <button className='sign-up-button'>SIGN UP</button> */}
      </div>
      <button className='sign-in-with-google-button'>SIGN IN WITH GOOGLE</button>
      <span className='no-account-span'>Don't have an account?</span>
    </div>
  )
}

export default SignIn;