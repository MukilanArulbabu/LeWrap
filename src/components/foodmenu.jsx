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
            'Mexican Veg Warp ............... 85',
            'Paneer Wrap .................... 95',
            'Aloo Tikka Wrap ................ 80',
            'Cheesy Potato Wrap ............. 95',
            'Boiled Egg Wrap ................ 80',
            'Mexican Chicken Warp ........... 95',
            'Chicken Tandoori Warp ......... 110',
            'Grilled Hirali Chicken Warp ... 120',
            'Chicken Kebab Warp ............ 125',
            'Fish Warp ..................... 120'],
        },
        {
          id: 2,
          title: 'Burgers',
          src: 'public/images/foodMenus/burger.jpg',
          items: [
            'Regular Veg Burger.............. 70',
            'Paneer Burger .................. 95',
            'Veg Overloaded ................. 95',
            'Regular Chicken Burger ......... 80',
            'Chicken Jumbo Burger ........... 95',
            'Chicken Overloaded ............ 110'],
        },
        {
          id: 3,
          title: 'Fries',
          src: 'public/images/foodMenus/fries.jpg',
          items: [
            'Classic Fries .................. 60',
            'Factorie Special Fries ......... 70',
            'Cheese Fries ................... 80',
            'Peri Peri Fries ................ 75',
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
            'Chocolate Sandwich ............. 70',
            'Egg Sandwich ................... 70',
            'Chicken Appetizer .............. 85',
            'Veg Club Sandwich .............. 80',
            'Chicken Club Sandwich ......... 110'],
        },
        
        {
          id: 5,
          title: 'Snackers',
          src: 'public/images/foodMenus/snackers.jpg',
          items: [
            'Nachos (With Salsa & Mayo Dip) . 90',
            'Potato Wedges .................. 80',            
            'Cheese Corn Nuggets(6 pcs) ..... 90',
            'Chicken Nuggets(6 Pcs) ......... 80',
            'Chicken Cheese Nuggets(6 Pcs) . 110',
            'Fish Fingers(6 Pcs) ........... 125',
            'Chicken Tkki .................. 185',
            'Hirali Malai Chicken .......... 185',
            'Murg Chicken Kebab ............ 195'],
        },
        {
          id: 6,
          title: 'Mocktails',
          src: 'public/images/foodMenus/mocktail.jpg',
          items: [
            'Virgin Mojito .................. 85',
            'Blue Curacao ................... 80',
            'Green Apple Twist .............. 80',
            'Melon Berry .................... 80'],
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
