import React from 'react';
import HeroImage from './components/HeroImage';
import HeroContent from './components/HeroContent';

function Hero() {
  return (
    <section>
      <div className='relative'>
        <HeroImage />
      </div>
      <div className='absolute w-full top-[232px]'>
        <HeroContent />
      </div>
    </section>
  );
}

export default Hero;
