import React from 'react'

import './sign-in.styles.css';

const SignIn = () => {
  return (
    <div className='sign-in-container'>
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
      <button className='sign-in-button'>SIGN IN</button>
      <button className='sign-in-with-google-button'>SIGN IN WITH GOOGLE</button>
    </div>
  )
}

export default SignIn;