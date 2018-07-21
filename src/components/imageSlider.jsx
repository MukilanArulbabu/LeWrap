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
          <img src="/public/images/slides/slide2.jpg" alt="" />
          <p className="legend">Delicious</p>
        </div>
        <div>
          <img src="/public/images/slides/slide3.jpg" alt="" />
          <p className="legend">Tasty Treat</p>
        </div>
      </Carousel>
    );
  }
}

export default Content;
