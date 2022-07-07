import React from 'react';
import logo from 'assets/images/logo.svg';

function Footer() {
  return (
    <div className='bg-black py-24 px-16 flex flex-col justify-center items-center'>
      <div>
        <img src={logo} alt='logo' />
      </div>
      <div className='text-white text-sm uppercase tracking-widest font-light flex flex-col justify-center items-center text-center py-12 gap-1'>
        <span>Marthwaite, Sedbergh</span>
        <span>Cumbria</span>
        <span>+00 44 123 4567</span>
      </div>
      <div className='text-white text-sm uppercase tracking-widest font-light flex flex-col justify-center items-center text-center gap-1'>
        <span>Open Times</span>
        <span>Mon - Fri: 9:00 AM - 10:00 PM</span>
        <span>Sat - Sun: 9:00 AM - 11:30 PM</span>
      </div>
    </div>
  );
}

export default Footer;
