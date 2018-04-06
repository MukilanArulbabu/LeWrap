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
          title: 'Fries',
          src: 'public/images/foodMenus/fries.jpg',
          items: [
            'Classic Fries .................. 60',
            'Factorie Special Fries.......... 70',
            'Honey N Chilli Fries ........... 80'],
        },
        {
          id: 4,
          title: 'Sandwiches',
          src: 'public/images/foodMenus/sandwich.jpg',
          items: [
            'Simple Veg Sandwich ............ 50',
            'Thousand Island ................ 60',
            'Peppy Paneer ................... 70',
            'Cheesy Delight ................. 70',
            'Peanut Butter .................. 70',
            'Chocolate Sandwich ............. 70',
            'Chicken Appetizer .............. 80',
            'Veg Club Sandwich .............. 80',
            'Chicken Club Sandwich ......... 100'],
        },
        
        {
          id: 5,
          title: 'Snackers',
          src: 'public/images/foodMenus/snackers.jpg',
          items: [
            'Garlic Bread Cheese ............ 80',
            'Garlic Bread Chilly Cheese...... 90',
            'Potato Wedges .................. 80',
            'Chicken Nuggets(6 Pcs) ......... 80',
            'Cheese Nuggets(6 Pcs)',
            'Veg / Corn / Chicken .......75 / 90 / 100'],
        },
        {
          id: 6,
          title: 'Mocktails',
          src: 'public/images/foodMenus/mocktail.jpg',
          items: [
            'Virgin Mojito .................. 75',
            'Blue Curacao ................... 60',
            'Green Apple Twist .............. 70',
            'Melon Berry .................... 70'],
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
