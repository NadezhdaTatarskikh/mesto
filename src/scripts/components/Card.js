'use strict'

export class Card {
  constructor({ data, userId, handleCardClick, handleDeleteCard, handleAddLike, handleLikeDelite }, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._userId = userId;
    this._likes = data.likes;
    this._handleCardClick =  handleCardClick;
    this._handleAddLike = handleAddLike;
    this._handleLikeDelite = handleLikeDelite;
    this._handleAddLike = handleAddLike;
    this._owner = data.owner._id;
    this._handleDeleteCard = handleDeleteCard;
    this._templateSelector = templateSelector;
  }

   //копируем разметку
  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.photo-grid__item').cloneNode(true);
    return cardElement; //вернёт клонированный элемент
  }

  getId() {
    return this._id;
 }

// метод лайк карточки, изменение количества лайков
handleCardLike(data) {
  this._likes = data.likes;
  this._likeCard.classList.toggle('photo-grid__button_active');
  this._likesNumber.textContent = this._likes.length;
};

//метод удаления карточки
_deleteCard() {
  this._element.remove();
  this._element = null;
};

//метод ставим или убираем лайк
_checkLikeCard() {
  if (this._likeCard.classList.contains('photo-grid__button_active')) {
    this._handleLikeDelite(this._id);
  } else {
    this._handleAddLike(this._id);
  }
}

//метод проверяем пользователя карточки и убираем кнопку "удалить"
_checkDeleteCard() {
  if (this._owner !== this._userId) {
     this._deleteImage.remove();
  }
}

//метод проверяем "лайк" пользователя
_isCardLiked() {
  if (this._likes.some((user) => {
    return this._userId === user._id;
  })) {
    this._likeCard.classList.add('photo-grid__button_active');
  }
}

//метод добавления всех обработчиков
_setEventListeners() {
  //клик по лайку
    this._likeCard.addEventListener("click", () => this._checkLikeCard());
  //клик на мусорке
   this._deleteImage.addEventListener('click', () => this._handleDeleteCard());
  //клик по карточке
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick();
    });
  }

//метод создания карточки
generateCard() {
  this._element = this._getTemplate();
  this._likeCard = this._element.querySelector('.photo-grid__button');
  this._deleteImage = this._element.querySelector('.photo-grid__delete');
  this._cardImage = this._element.querySelector('.photo-grid__image');
  this._cardName = this._element.querySelector('.photo-grid__text');
  this._likesNumber =  this._element.querySelector('.photo-grid__like');
  //присваиваем значения
      this._cardImage.alt = this._name;
      this._cardImage.src = this._link;
      this._cardName.textContent = this._name;
      this._likesNumber.textContent = this._likes.length;
  //навешиваем события
      this._setEventListeners();
      this._isCardLiked();
      this._checkDeleteCard();
  //возвращаем готовую карточку
      return this._element;
    }
  }








