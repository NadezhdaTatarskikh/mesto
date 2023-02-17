export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._templateSelector = templateSelector;
  }
   //копируем разметку
  _getTemplate() {
    const cardElement = this._templateSelector.cloneNode(true);
    return cardElement;
  }
//метод создания карточки
  generateCard() {
    this._element = this._getTemplate();
    this._templateLike = this._element.querySelector('.photo-grid__button');
    this._templateDelite = this._element.querySelector('.photo-grid__delete');
    this._cardImage = this._element.querySelector('.photo-grid__image');
//присваиваем значения
    this._element.querySelector('.photo-grid__image').alt = this._name;
    this._element.querySelector('.photo-grid__image').src = this._link;
    this._element.querySelector('.photo-grid__text').textContent = this._name;
//навешиваем события
    this._setEventListeners();
//возвращаем готовую карточку
    return this._element;
  }
//метод добавления всех обработчиков
  _setEventListeners() {
    this._templateLike.addEventListener('click', () => {
      this._templateLike.classList.toggle('photo-grid__button_active');
    });
   this._templateDelite.addEventListener('click', () => {
      this._element.remove();
    });
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  }
}





