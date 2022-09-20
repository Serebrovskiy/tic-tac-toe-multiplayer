import React from 'react';
import './Popup.css';

export function Popup({ isOpen, onClose, currentPlayer }) {
  // function handleSubmit(evt) {
  //   evt.preventDefault();
  // }

  return (
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <form className="popup__form">
        <p className="popup__text">
          Game over. &nbsp; Winner {`->`} {currentPlayer}
        </p>
        <button
          className="popup__button"
          type="button"
          onClick={() => onClose()}
        >
          Ok
        </button>
      </form>
    </div>
  );
}
