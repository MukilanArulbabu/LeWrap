import React from 'react';
import '../styles/header.scss';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <article className="container-title">
        <blockquote>
          <strong>Locate</strong> <em> Le Wrap </em>  <strong>Near You</strong>
        </blockquote>
      </article>
    );
  }
}

export default Title;
