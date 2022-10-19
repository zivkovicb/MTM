import React, { useState } from 'react'

/* --- REACT ICONS --- */
import { GrUser } from 'react-icons/gr';
import { MdLogin, MdMenu } from 'react-icons/md';
import { RiSettings5Line } from 'react-icons/ri';


import './header.styles.css';

const Header = ( ) => {
  const [isOpen, setIsOpen] = useState('false');

  const handleUserMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='header'>
      <div className='menu-container'>
        <MdMenu />
      </div>
      <div className='header-title'>My Task Manager</div>
      <GrUser className='user-icon' onClick={handleUserMenu} />
      <div className={!isOpen ? 'user-menu-open' : 'user-menu-closed'}> {/*provjeriti uslov!!! da li treba !isOpne ili isOpen */}
        <div className='login-container'>
          <span className='login-text'>LogIn</span>
          <MdLogin className='login-icon'/>
        </div>
        <div className='settings-container'>
          <span className='settings-text'>Settings</span>
          <RiSettings5Line className='settings-icon'/>
        </div>
      </div>
    </div>
  )
}

export default Header;