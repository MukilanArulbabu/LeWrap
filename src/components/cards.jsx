import React from 'react';

class Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {
          id: 1,
          title: 'Food Menu',
          supportingText: 'Find our delicious food menu',
          supportClass: 'wrap-food-menu mdl-card__title mdl-card--expand',
        },
        {
          id: 2,
          title: 'Store Locator',
          supportingText: 'Find our stores near by',
          supportClass: 'wrap-store-locator mdl-card__title mdl-card--expand',
        },
        {
          id: 3,
          title: 'Franchize With Us',
          supportingText: 'Come join with us',
          supportClass: 'wrap-franchize mdl-card__title mdl-card--expand',
        },
      ],
    };
  }
  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-grid-custom">
          {this.state.cards.map(card => (
            <div className="wrap-card-square map-card mdl-card mdl-shadow--3dp" key={card.id}>
              <div className={card.supportClass} />
              {/* <div className="mdl-card__supporting-text content_text">
                <div>{card.supportingText}</div>
              </div> */}
              <div className="mdl-card__actions mdl-card--border mdl-card-color">
                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button-custom-font" href="/">
                  {card.title}
                </a>
              </div>
            </div>
      ))}
        </div>
      </div>
    );
  }
}

export default Cards;
