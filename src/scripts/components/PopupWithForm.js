import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ popupSelector, handleSubmitForm }) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._form = this._popup.querySelector('.popup__form');
    this._submitButton = this._popup.querySelector('.popup__button');
    this._inputList = this._popup.querySelectorAll('.popup__input');
  }
  // собирает данные всех полей формы.
    _getInputValues() {
  // создаём пустой объект
      this._formValues = {};
  // добавляем в этот объект значения всех полей
      this._inputList.forEach((input) => {
        this._formValues[input.name] = input.value;
    });
  // возвращаем объект значений
    return this._formValues;
  }

  // функция, параметром которой, является колбэк на удаление карточки
    setEventListeners() {
      super.setEventListeners();
      this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
    // добавим вызов функции _handleFormSubmit
    // передадим ей объект — результат работы _getInputValues
      this._handleSubmitForm(this._getInputValues());
    });
  }
    close() {
      super.close();
      this._form.reset();
    }
}
