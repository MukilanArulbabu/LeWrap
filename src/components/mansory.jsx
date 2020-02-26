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
  fontFamily: 'Roboto script=all rev=2',
  fontWeight: 700,
  fontStyle: 'italic',
  color: 'rgba(10, 2, 2, 0.54)',
};

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const childElements = this.props.elements.map(element => (
      <div className="map-food-card mdl-card" key={element.id}>
        <img src={element.src} style={ImgStyle} />
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
export default Gallery;
