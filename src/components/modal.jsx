import React from 'react';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';

const Modal = props => (
  <Popup
    defaultOpen
    modal
    closeOnDocumentClick
  >
    <Link to="/offers" onClick={props.onOfferClick}>
      <img src="/public/images/cards/fries_poster.png" style={{ width: '100%' }}alt="offer" />
    </Link>
  </Popup>
);

export default Modal;
