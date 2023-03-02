export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._buttonClosePopup = this._popup.querySelector('.popup__close-button');
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  // открытие попапа
  open () {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  // открытие и закрытие попапа
  close () {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  // содержит логику закрытия попапа клавишей Esc
  _handleEscClose = (event) => {
    if (event.key == 'Escape') {
    this.close();
    }
  }
  // функция закрытия попапа на крестик и на оверлей
  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (
        evt.target.classList.contains('popup') ||
        evt.target.classList.contains('popup__close-button')
    ) {
      this.close();
      }
    });
  }
}
