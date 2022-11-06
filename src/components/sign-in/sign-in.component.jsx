import React from 'react';
import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils';

import './sign-in.styles.css';

const defaultInputFields = {
  email: '',
  password: '',
  confirmPassword: ''
}

const SignIn = () => {
  const [ isSigningUp, setIsSignUp ] = useState('false');
  const [inputFields, setInputFields] = useState(defaultInputFields);
  const { email, password, confirmPassword } = inputFields;
  
  const handleSignUp = () => {
    setIsSignUp(!isSigningUp);
  }

  const resetInputFields = () => {
    setInputFields(defaultInputFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputFields({ ...inputFields, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
      console.log('creating new user')
      await createUserDocumentFromAuth( user, { email });
      resetInputFields();
    } catch(error) {
      console.log(error.code); 
    }
  }


  return (
    <div className='sign-in-container'>
      <span>Sign up</span>
      <div className='username-pssw-input-container'>
        <form onSubmit={handleSubmit}>
          <input
            required
            name='email'
            label='email'
            className='username-input'
            type='email'
            placeholder='Enter username'
            onChange={handleChange}
            value={email}
          />
          <input
            required
            name='password'
            className='password-input'
            type='password'
            placeholder='Enter password'
            onChange={handleChange}
            value={password}
          />
          <input
            required
            name='confirmPassword'
            className='password-input'
            type='password'
            placeholder='Confirm your password'
            onChange={handleChange}
            value={confirmPassword}
          />
          <button 
            className='sign-up-button'
            type='submit'
          >
            SIGN UP
          </button>
        </form>
      </div>
      <button className='sign-in-with-google-button'>SIGN IN WITH GOOGLE</button>
      <span 
        className='no-account-span'
        onClick={handleSignUp}
        >Already have an account?
      </span>
    </div>
  )
}

export default SignIn;