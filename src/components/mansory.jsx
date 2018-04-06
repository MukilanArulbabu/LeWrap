import React from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 0,
};

const ImgStyle = {
  width: '100%',
};

const UlStyle = {
  listStyle: 'none',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: '600',
  color: 'rgba(10, 2, 2, 0.54)',
};

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const childElements = this.props.elements.map(element => (
      <div className="map-card mdl-card mdl-shadow--3dp" key={element.id}>
        <span className="monsoryHeader"> {element.title} </span>
        <li className="image-element-class">
          <img src={element.src} style={ImgStyle} />
        </li>
        <ul className="mdl-card__supporting-text" style={UlStyle}>
          {element.items.map(item => (
            <li key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>

    ));

    return (
      <Masonry
        className="my-gallery-class" // default ''
        elementType="ul" // default 'div'
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false}
      >
        {childElements}
      </Masonry>
    );
  }
}
module.exports = Gallery;
