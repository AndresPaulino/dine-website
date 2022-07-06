import React from 'react';
import { DarkButton, LightButton } from 'blocks/Buttons';
import dineLogo from 'assets/images/logo.svg';

function HeroContent() {
  return (
    <section className='bg-black py-6'>
      <div className='flex flex-col'>
        {/* Logo */}
        <div className='text-center flex justify-center'>
          <img className='' src={dineLogo} alt='dine logo' />
        </div>
        {/* Header */}
        <div className='flex flex-col justify-center px-10 mt-12'>
          <h1 className='text-white text-center font-league text-lg font-light'>Exquisite dining since 1989</h1>
        </div>
        {/* Content */}
        <div className='flex flex-col justify-center px-10 mt-12'>
          <h1 className='text-white text-center font-league text-[20px] font-regular'>
            Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of
            our farmhouse.
          </h1>
        </div>
        {/* Buttons */}
        <div className='flex flex-col justify-center px-10 mt-12'>
                  <div className='flex justify-center'>
            <DarkButton text='Button' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroContent;
