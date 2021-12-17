import React from 'react';
import './Popup.css';

export function Popup({ isOpen, onClose }) {
  // function handleSubmit(evt) {
  //   evt.preventDefault();
  // }

  return (
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <form className="popup__form">
        <p className="popup__text">Игра закончена</p>
        <button
          className="popup__button"
          type="button"
          onClick={() => onClose()}
        >
          Ура!
        </button>
      </form>
    </div>
  );
}
