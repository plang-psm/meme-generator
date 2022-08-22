import React from 'react';
import '../index.css';
import TrollFace from '../images/TrollFace.png';

function Header() {
  return (
    <div className='header-container'>
      <img src={TrollFace} className='troll-logo' />
      <h1>Meme Generator</h1>
    </div>
  );
}

export default Header;
