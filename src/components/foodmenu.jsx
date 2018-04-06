import React from 'react';
import Mansory from './mansory';

class Food extends React.Component {
  constructor() {
    super();
    this.state = {
      elements: [
        {
          id: 1,
          title: 'Wraps',
          src: 'public/images/foodMenus/wrap.jpg',
          items: [
            'Mexican Veg Warp ............... 80',
            'Paneer Wrap .................... 95',
            'Boiled Egg Wrap ................ 85',
            'Mexican Chicken Warp ........... 95',
            'Grilled Chicken Warp .......... 100',
            'Fish Warp ..................... 120'],
        },
        {
          id: 2,
          title: 'Burgers',
          src: 'public/images/foodMenus/burger.jpg',
          items: [
            'Veg Burger Paneer .............. 95',
            'Veg Burger Indulge ............. 90',
            'Veg Burger Regular ............. 70',
            'Chicken Burger Jumbo ........... 95',
            'Chicken Burger Indulge ........ 100',
            'Chicken Burger Regular ......... 80'],
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
      <div className="Mansory-Container">
        <Mansory elements={this.state.elements} />
      </div>
    );
  }
}

export default Food;
