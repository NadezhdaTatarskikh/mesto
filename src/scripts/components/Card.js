'use strict'

export class Card {
  constructor(data, userId, handleCardClick, handleAddLike, handleLikeDelite, templateSelector) {
    this.name = data.name;
    this.link = data.link;
    this._handleCardClick =  handleCardClick;
    this._id = data._id;
    this._userId = userId;
    this._likes = data.likes;
    this._handleAddLike = handleAddLike;
    this._handleLikeDelite = handleLikeDelite;
    this._owner = data.owner._id;
    this._templateSelector = templateSelector;
  }

   //копируем разметку
  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.photo-grid__item').cloneNode(true);
    return cardElement; //вернёт клонированный элемент
  }

// метод лайк карточки, изменение количества лайков
_handleCardLike(data) {
  this._likeCard.classList.toggle('photo-grid__button_active');
  this._likeNumber.textContent = this._likes.length;
};

//метод удаления карточки
_handleCardDelete() {
  this._element.remove();
  this._element = null;
};

//метод ставим или убираем лайк
_checkLiked() {
  if (this._likeCard.classList.constains('photo-grid__button_active')) {
    this._handleLikeDelite(this._id);
  } else {
    this.handleAddLike(this._id);
  }
}

//метод проверяем пользователя карточки и убираем кнопку "удалить"
_checkDeleteCard() {
  if (this._owner !== this._userId) {
     this._deleteCard.remove();
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
    this._likeCard.addEventListener("click", () => this._handleCardLike());
  //клик на мусорке
   this._deliteCard.addEventListener('click', () => this._handleCardDelete());
  //клик по карточке
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick();
    });
  }

//метод создания карточки
generateCard() {
  this._element = this._getTemplate();
  this._likeCard = this._element.querySelector('.photo-grid__button');
  this._deliteCard = this._element.querySelector('.photo-grid__delete');
  this._cardImage = this._element.querySelector('.photo-grid__image');
  this._cardName = this._element.querySelector('.photo-grid__text');
  this._likeNumber =  this._element.querySelector('.photo-grid__like');
  //присваиваем значения
      this._cardImage.alt = this.name;
      this._cardImage.src = this.link;
      this._cardName.textContent = this.name;
      this._likesNumber.textContent = this._likes.length;
  //навешиваем события
      this._setEventListeners();
      this._checkLiked();
      this._isCardLiked();
  //возвращаем готовую карточку
      return this._element;
    }
  }








