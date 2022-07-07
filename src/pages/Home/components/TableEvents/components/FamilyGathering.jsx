import React from 'react';
import { windowSize } from 'utils';
import familyGatheringMobile from 'assets/images/homepage/family-gathering-mobile.jpg';
import familyGatheringTablet from 'assets/images/homepage/family-gathering-tablet.jpg';
import familyGatheringDesktop from 'assets/images/homepage/family-gathering-desktop.jpg';

function FamilyGathering() {
  const { width } = windowSize();
  const image = width < 768 ? familyGatheringMobile : width < 1024 ? familyGatheringTablet : familyGatheringDesktop;

  return (
    <article>
      <div>
        <img src={image} alt='family gathering' />
      </div>
    </article>
  );
}

export default FamilyGathering;
