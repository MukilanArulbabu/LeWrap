import React from 'react';
import { Link } from 'react-router-dom';

class header extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Le Wrap Factorie',
    };
  }
  render() {
    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">{this.state.title}</span>
        </div>
        <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
          <Link to="/home" className="mdl-layout__tab is-active"><i className="material-icons">home</i></Link>
          <Link to="/menus" className="mdl-layout__tab">Food Menu</Link>
          <Link to="/stores" className="mdl-layout__tab">Store Locator</Link>
          <Link to="/franchize" className="mdl-layout__tab">Franchise with ME</Link>
          <Link to="/contactus" className="mdl-layout__tab">Contact Us</Link>
        </div>
      </header>
    );
  }
}

export default header;
