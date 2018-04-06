import React from 'react';
import Mansory from './mansory';

class Food extends React.Component {
  constructor() {
    super();
    this.state = {
      elements: [
        {
          id: 1,
          src: 'public/images/cards/1.jpg',
          items: ['Mexican Veg Warp ....... 80', 'Paneer Wrap .....90', 'Veg Wrap .....100'],
        },
        {
          id: 2,
          src: 'public/images/cards/2.jpg',
          items: ['Mexican Veg Warp ....... 80', 'Paneer Wrap .....90', 'Veg Wrap .....100'],
        },
        {
          id: 3,
          src: 'public/images/cards/3.jpg',
          items: ['Mexican Veg Warp ....... 80', 'Paneer Wrap .....90', 'Veg Wrap .....100', 'Mexican Veg Warp ....... 80', 'Paneer Wrap .....90', 'Veg Wrap .....100'],
        },
        {
          id: 4,
          src: 'public/images/cards/1.jpg',
          items: ['Mexican Veg Warp ....... 80', 'Paneer Wrap .....90', 'Veg Wrap .....100'],
        },
        {
          id: 5,
          src: 'public/images/cards/2.jpg',
          items: ['Mexican Veg Warp ....... 80', 'Paneer Wrap .....90', 'Veg Wrap .....100'],
        },
        {
          id: 6,
          src: 'public/images/cards/3.jpg',
          items: ['Mexican Veg Warp ....... 80', 'Paneer Wrap .....90', 'Veg Wrap .....100', 'Mexican Veg Warp ....... 80', 'Paneer Wrap .....90', 'Veg Wrap .....100'],
        },
      ],
    };
  }
  render() {
    return (
      <Mansory elements={this.state.elements} />
    );
  }
}

export default Food;
