import React from 'react';
import { windowSize } from 'utils';
import familyGatheringMobile from 'assets/images/homepage/family-gathering-mobile.jpg';
import familyGatheringTablet from 'assets/images/homepage/family-gathering-tablet.jpg';
import familyGatheringDesktop from 'assets/images/homepage/family-gathering-desktop.jpg';

function FamilyGathering({ active, handleActive }) {
  const { width } = windowSize();
  const image = width < 768 ? familyGatheringMobile : width < 1024 ? familyGatheringTablet : familyGatheringDesktop;

  const events = ['Family Gathering', 'Special Events', 'Social Events'];

  return (
    <article>
      <div className='items-stretch w-full object-fill'>
        <img className='shadow-2xl w-full h-full' src={image} alt='family gathering' />
      </div>
      {/* Event Tabs */}
      <div className='text-md py-16'>
        {events.map((event, index) => (
          <div key={index} onClick={() => handleActive(event)}>
            <div className='flex items-center justify-center'>
              <div className='text-center'>
                <h2 className={`${active === event ? 'font-semi text-secondary-clay' : 'text-secondary-gray'} py-2`}>
                  {event}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default FamilyGathering;
