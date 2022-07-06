import React from 'react';
import heroMobile from 'src/assets/images/homepage/hero-bg-mobile.jpg';

function Hero() {
  return (
    <div>
      <div className='hero-bg-mobile' style={{ backgroundImage: `url(${heroMobile})` }}>
        <div className='hero-bg-mobile__content'>
          <h1 className='hero-bg-mobile__title'>Dine</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
