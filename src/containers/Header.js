import React from 'react'
import './Header.css'
import Logo from '.././logo.svg'

function Header() {
  return (
    <header className='App-header shadow-lg bg-body-tertiary rounded'>
      <div className="container-fluid">
        <img src={Logo} alt="Logo" width="130" height="65" className="d-inline-block align-text-top logo" />
      </div>
    </header>
  );
}

export default Header;
