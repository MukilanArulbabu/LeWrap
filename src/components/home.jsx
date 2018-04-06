import React from 'react';
import ImageSlider from './imageSlider';
import Cards from './cards';

import '../styles/custom.scss';

const home = () => (
  <div>
    <div className="sliderContainer mdl-shadow--3dp" >
      <div className="mdl-layout_imageSlider">
        <ImageSlider />
      </div>
    </div>
    <Cards />
  </div>
);

export default home;
