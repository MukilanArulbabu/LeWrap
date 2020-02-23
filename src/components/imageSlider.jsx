import React from 'react';
import { Carousel } from 'react-responsive-carousel';

class Content extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Carousel showThumbs={false} autoPlay stopOnHover={false} infiniteLoop>
        <div>
          <img src="/public/images/slides/slide_new1.jpg" alt="" />
        </div>
        <div>
          <img src="/public/images/slides/slide_new2.jpg" alt="" />
        </div>
        <div>
          <img src="/public/images/slides/slide_new3.jpg" alt="" />
        </div>
        <div>
          <img src="/public/images/slides/slide_new4.jpg" alt="" />
        </div>
      </Carousel>
    );
  }
}

export default Content;
