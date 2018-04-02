import React from 'react';

class Cards extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="mdl-grid">
        <div className="wrap-card-square mdl-cell mdl-cell--4-col mdl-card mdl-shadow--3dp">
          <div className="wrap-food-menu mdl-card__title mdl-card--expand">
            <h2 className="mdl-card__title-text">Update</h2>
          </div>
          <div className="mdl-card__supporting-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Aenan convallis.
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="/">
            Click Here
            </a>
          </div>
        </div>
        <div className="wrap-card-square mdl-cell mdl-cell--4-col mdl-card mdl-shadow--3dp">
          <div className="wrap-food-menu mdl-card__title mdl-card--expand">
            <h2 className="mdl-card__title-text">Update</h2>
          </div>
          <div className="mdl-card__supporting-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Aenan convallis.
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="/">
            Click Here
            </a>
          </div>
        </div>
        <div className="wrap-card-square mdl-cell mdl-cell--4-col mdl-card mdl-shadow--3dp">
          <div className="wrap-food-menu mdl-card__title mdl-card--expand">
            <h2 className="mdl-card__title-text">Update</h2>
          </div>
          <div className="mdl-card__supporting-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Aenan convallis.
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="/">
            Click Here
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
