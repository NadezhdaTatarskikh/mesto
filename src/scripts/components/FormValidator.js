"use strict";

export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formSelector = config.formSelector;
    this._formElement = formElement;
    this._inputSelector = config.inputSelector;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector)
    ); //найдем элементы DOM 1 раз тут и сделаем их полями класса
    this._submitButtonSelector = config.submitButtonSelector;
    this._buttonElement = this._formElement.querySelector(
      this._config.submitButtonSelector
    );
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._inputErrorActive = config.inputErrorActive;
  }
  // Функция, которая добавляет класс с ошибкой
  _showInputError(inputElement, errorMessage) {
    const formError = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._config.inputErrorClass);
    formError.textContent = errorMessage;
    formError.classList.add(this._config.inputErrorActive);
  }
  // Функция, которая удаляет класс с ошибкой
  _hideInputError = (inputElement) => {
    const formError = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    //убираем подчеркивание красным
    inputElement.classList.remove(this._config.inputErrorClass);
    //удаляем текст ошибки
    formError.classList.remove(this._config.inputErrorActive);
    // Очищаем ошибку
    formError.textContent = "";
  };

  // Функция, которая проверяет валидность форм
  _isValid = (inputElement) => {
    if (!inputElement.validity.valid) {
      // Если поле не прошло валидацию, то показываем ошибку
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      // Если проходит валидацию, то скрываем ошибку
      this._hideInputError(inputElement);
    }
  };
  // Проверка на наличие невалидных инпутов
  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  // Вызываем функцию toggleButtonState - добавляем/убираем активацию кнопки
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._config.inactiveButtonClass);
      this._buttonElement.setAttribute("disabled", true);
    } else {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled");
    }
  }

  // Функция setEventListeners
  _setEventListeners() {
    // проверяем состояние кнопки в самом начале
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      // валидируем при изменении полей
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  }

  //метод сброса валидации
  resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState();
  }

  //функция навершивает слушатели для валидации форму
  enableValidation() {
    this._setEventListeners();
  }
}
