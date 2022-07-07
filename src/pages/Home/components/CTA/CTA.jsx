import React from 'react';
import { windowSize } from 'utils';
import { DarkButton } from 'blocks/Buttons';
import bgMobile from 'assets/images/homepage/ready-bg-mobile.jpg';
import bgTablet from 'assets/images/homepage/ready-bg-tablet.jpg';
import bgDesktop from 'assets/images/homepage/ready-bg-desktop.jpg';

function CTA() {
  const { width } = windowSize();
  const image = width < 768 ? bgMobile : width < 1024 ? bgTablet : bgDesktop;
  return (
    <section
      style={{
        backgroundImage: `url(${image})`,
      }}
      className='w-full h-full flex flex-col justify-center items-center'
    >
      <div className='text-center px-12 pb-5'>
        <h2 className='text-white font-bold text-[32px]'>Ready to make a reservation?</h2>
      </div>
      <div>
        <DarkButton className='w-full' onClick={() => {}} />
      </div>
    </section>
  );
}

export default CTA;
