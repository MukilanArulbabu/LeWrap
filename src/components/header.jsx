import React from 'react';
import { Link } from 'react-router-dom';

class header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <img src="/public/images/background/lewrapHeader.png" className="mdl-layout-title_lewrap" alt="" />
          {/* <span className="mdl-layout-title mdl-layout-title_font">{this.state.title}</span> */}
        </div>
        <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
          <Link to="/home" id="home" className="mdl-layout__tab mdl-button-custom-font">Home</Link>
          <Link to="/menus" id="foodmenu" className="mdl-layout__tab mdl-button-custom-font">Food Menu</Link>
          <Link to="/stores" id="stores" className="mdl-layout__tab mdl-button-custom-font">Stores</Link>
          <Link to="/franchise" id="franchise" className="mdl-layout__tab mdl-button-custom-font">Franchise</Link>
          <Link to="/media" id="media" className="mdl-layout__tab mdl-button-custom-font">Media</Link>
          <Link to="/offers" id="offers" className="mdl-layout__tab mdl-button-custom-font">Offers</Link>
          <Link to="/contactus" id="contactus" className="mdl-layout__tab mdl-button-custom-font">Contact Us</Link>
        </div>
      </header>
    );
  }
}

export default header;
