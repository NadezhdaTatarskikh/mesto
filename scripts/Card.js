export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._templateSelector = templateSelector;
    this._element = this._getTemplate();
    this._likeCard = this._element.querySelector('.photo-grid__button');
    this._deliteCard = this._element.querySelector('.photo-grid__delete');
    this._cardImage = this._element.querySelector('.photo-grid__image');
    this._cardName = this._element.querySelector('.photo-grid__text');
  }
   //копируем разметку
  _getTemplate() {
    const cardElement = this._templateSelector.cloneNode(true);
    return cardElement;
  }
//метод создания карточки
  generateCard() {
//присваиваем значения
    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;
    this._cardName = this._name;
//навешиваем события
    this._setEventListeners();
//возвращаем готовую карточку
    return this._element;
  }

  // метод лайк карточки
  _handleCardLike() {
    this._likeCard.classList.toggle('photo-grid__button_active');
  };

  //метод удаления карточки
  _handleCardDelete() {
    this._element.remove();
  };

//метод добавления всех обработчиков
  _setEventListeners() {
  //клик по лайку
    this._likeCard.addEventListener("click", () => this._handleCardLike());
  //клик на мусорке
   this._deliteCard.addEventListener('click', () => this._handleCardDelete());
  //клик по карточке
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}






