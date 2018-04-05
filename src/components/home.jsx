import React from 'react';
import ImageSlider from './imageSlider';
import Cards from './cards';

import '../styles/custom.scss';

const home = () => (
  <div>
    <div className="mdl-layout_imageSlider">
      <ImageSlider />
    </div>
    <Cards />
  </div>
);

export default home;
