'use strict'

import Popup from './Popup.js';

export class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    }

    // функция, параметром которой, является колбэк на удаление карточки
      setSubmitForm(action) {
        this._handleSubmit = action;
      }

      setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
          evt.preventDefault();
      // добавим вызов функции _handleSubmit
        this._handleSubmit();
      });
    }
}
