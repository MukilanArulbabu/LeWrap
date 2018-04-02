import React from 'react';
import ImageSlider from './imageSlider';
import Cards from './cards';

import '../styles/custom.scss';

const home = () => (
  <div className="mdl-layout__content">
    <ImageSlider />
    <Cards />
  </div>
);

export default home;
