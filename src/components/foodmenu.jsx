import React from 'react';
import '../styles/franchize.scss';

class franchize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentElement: 1,
    };
    this.translateContent = this.translateContent.bind(this);
    this.updating = false;
  }
  componentDidMount() {
    setTimeout(() => {
      const container = document.querySelector('div.franchize_container');
      const header = document.querySelector('header.mdl-layout__header');
      const footer = document.querySelector('footer.mdl-mini-footer');
      if (container) {
        container.style.height = `${window.innerHeight - header.clientHeight - footer.clientHeight}px`;
      }
      setTimeout(() => {
        const viewport = document.querySelector('div.franchize_content_viewport');
        const height = (window.innerHeight - header.clientHeight - footer.clientHeight);
        const contents = viewport.querySelectorAll('div.franchize_content');
        viewport.addEventListener('wheel', this.translateContent, false);
        if (contents && contents.length) {
          for (let i = 0; i < contents.length; i++) {
            const c = contents[i];
            c.style.transform = `translateY(${i * height}px)`;
          }
        }
        const activeLinkElement = document.getElementById('dot1');
        activeLinkElement.classList.add('active');
      }, 200);
    }, 200);
  }
  translateContent(e, key) {
    e.preventDefault();
    const { updating } = this;
    if (!updating) {
      this.updating = true;
      let nextElement = '';
      let nextIndex = 0;
      const index = this.state.currentElement;
      if (e.deltaY < 0 || key === 'up') {
        if (index === 1) {
          nextIndex = 3;
        } else {
          nextIndex = index - 1;
        }
      }
      if (e.deltaY > 0 || key === 'down') {
        if (index === 3) {
          nextIndex = 1;
        } else {
          nextIndex = index + 1;
        }
      }
      nextElement = `content${nextIndex}`;
      const currentElement = `content${index}`;
      const currentActiveLink = `dot${index}`;
      const nextActiveLink = `dot${nextIndex}`;
      this.setState({
        currentElement: nextIndex,
      });
      setTimeout(() => {
        const header = document.querySelector('header.mdl-layout__header');
        const footer = document.querySelector('footer.mdl-mini-footer');
        const height = (window.innerHeight - header.clientHeight - footer.clientHeight);
        const currentContent = document.getElementById(currentElement);
        const nextContent = document.getElementById(nextElement);
        const currentActiveLinkElement = document.getElementById(currentActiveLink);
        const nextActiveLinkElement = document.getElementById(nextActiveLink);
        if (currentContent) {
          currentContent.style.transform = `translateY(${-1 * height}px)`;
        }
        if (currentActiveLinkElement) {
          currentActiveLinkElement.classList.remove('active');
        }
        if (nextContent) {
          nextContent.style.transform = `translateY(${0 * height}px)`;
        }
        if (nextActiveLinkElement) {
          nextActiveLinkElement.classList.add('active');
        }
      }, 100);
      setTimeout(() => {
        this.updating = false;
      }, 500);
    }
  }
  render() {
    return (
      <div className="franchize_container">
        <div className="franchize_float_navigation up" onClick={(event) => { this.translateContent(event, 'up'); }}>
          <i className="material-icons">keyboard_arrow_up</i>
        </div>
        <div className="franchize_float_navigation down" onClick={(event) => { this.translateContent(event, 'down'); }}>
          <i className="material-icons">keyboard_arrow_down</i>
        </div>
        <div className="franchize_tail">
          <div className="dot" id="dot1" />
          <div className="dot" id="dot2" />
          <div className="dot" id="dot3" />
        </div>
        <div className="franchize_content_wrapper">
          <div className="franchize_content_viewport">
            <div className="franchize_content fullblack" id="content1">
              <img src="/public/images/foodMenus/img1.jpg" className="imgContainer" />
            </div>
            <div className="franchize_content fullblack" id="content2">
              <img src="/public/images/foodMenus/img2.jpg" className="imgContainer" />
            </div>
            <div className="franchize_content fullblack" id="content3">
              <img src="/public/images/foodMenus/img3.jpg" className="imgContainer" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default franchize;
