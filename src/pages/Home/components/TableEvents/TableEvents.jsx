import React, { useState } from 'react';
import { FamilyGathering, SocialEvents, SpecialEvents } from './components';
import { windowSize } from 'utils';
import { DarkButton } from 'blocks/Buttons';

function TableEvents() {
  const [activeTab, setActiveTab] = useState('Family Gathering');

  const handleActive = (eventParam) => {
    setActiveTab(eventParam);
  };

  return (
    <section className='w-full'>
      {activeTab === 'Family Gathering' && <FamilyGathering active={activeTab} handleActive={handleActive} />}
      {activeTab === 'Special Events' && <SpecialEvents active={activeTab} handleActive={handleActive} />}
      {activeTab === 'Social Events' && <SocialEvents active={activeTab} handleActive={handleActive} />}
    </section>
  );
}

export default TableEvents;
