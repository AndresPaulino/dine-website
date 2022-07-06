import React from 'react';
import { windowSize } from '../../utils';
import heroMobile from '../../assets/images/homepage/hero-bg-mobile.jpg';
import heroTablet from '../../assets/images/homepage/hero-bg-tablet.jpg';
import heroDesktop from '../../assets/images/homepage/hero-bg-desktop.jpg';

function Hero() {
  const { width } = windowSize();
  const heroImage = width < 768 ? heroMobile : width < 1024 ? heroTablet : heroDesktop;

  return (
    <>
      <section className='bg-primary-gray'>
        <div className=''>
          <div>
            <img src={heroImage} alt='pizza hero' className='mx-auto' />
          </div>
        </div>
      </section>
    </>
  ); 
}

export default Hero;
