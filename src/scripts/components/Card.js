export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this.name = data.name;
    this.link = data.link;
    this._handleCardClick =  handleCardClick;
    this._templateSelector = templateSelector;
  }
   //копируем разметку
  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.photo-grid__item').cloneNode(true);
    return cardElement; //вернёт клонированный элемент
  }



//метод добавления всех обработчиков
_setEventListeners() {
  //клик по лайку
    this._likeCard.addEventListener("click", () => this._handleCardLike());
  //клик на мусорке
   this._deliteCard.addEventListener('click', () => this._handleCardDelete());
  //клик по карточке
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick({ name: this.name, link: this.link });
    });
  }

  // метод лайк карточки
  _handleCardLike() {
    this._likeCard.classList.toggle('photo-grid__button_active');
  };

  //метод удаления карточки
  _handleCardDelete() {
    this._element.remove();
  };

//метод создания карточки
generateCard() {
  this._element = this._getTemplate();
  this._likeCard = this._element.querySelector('.photo-grid__button');
  this._deliteCard = this._element.querySelector('.photo-grid__delete');
  this._cardImage = this._element.querySelector('.photo-grid__image');
  this._cardName = this._element.querySelector('.photo-grid__text');
  //присваиваем значения
      this._cardImage.alt = this.name;
      this._cardImage.src = this.link;
      this._cardName.textContent = this.name;
  //навешиваем события
      this._setEventListeners();
  //возвращаем готовую карточку
      return this._element;
    }
  }
