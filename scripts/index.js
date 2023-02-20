import { initialCards, config } from "./cards.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const profile = document.querySelector('.profile');
const profileButton = profile.querySelector('.profile__edit');
const buttonOpenPopapCard = profile.querySelector('.profile__add-button');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');

const elementList = document.querySelector('.photo-grid');
const template = document.querySelector('.card-template').content.querySelector('.photo-grid__item');

const popupImage = document.querySelector('.popup_name_image');
const popupImageImage = popupImage.querySelector('.popup__image');
const popupImageTitle = popupImage.querySelector('.popup__image-title');

const popupProfile = document.querySelector('.popup_name_profile')
const formProfileElement = popupProfile.querySelector('.popup__form_name_profile');
const profileNameInput = popupProfile.querySelector('.popup__input_text_name');
const profileJobinput = popupProfile.querySelector('.popup__input_text_job');

const popupCard = document.querySelector('.popup_name_photo');
const cardAddForm = popupCard.querySelector('.popup__form_name_photo');
const cardInputName = popupCard.querySelector('.popup__input_text_title');
const cardInputLink = popupCard.querySelector('.popup__input_text_link');

const popupList = Array.from(document.querySelectorAll('.popup'));

// Общая функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscape);
};

//Общая функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEscape);
};

//Функция закрытия попапа по нажатию на кнопку "ESC"
function closePopupByEscape(event) {
  if (event.key == 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
   }
};

// Функция закрытия открытого popup по клику по оверлау (обработчики оверлея и крестиков)
popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup)
      }
      if (evt.target.classList.contains('popup__close-button')) {
        closePopup(popup)
      }
  })
});

//открыть попап профиля, тут же данные о пользователе
function handleProfileButton () {
// Получаем значение полей jobInput и nameInput из свойства value
  profileNameInput.value = profileName.textContent;
  profileJobinput.value = profileJob.textContent;
  openPopup(popupProfile);
};

// Обработчик «отправки» формы через submit
function handleProfileFormSubmit(evt) {
  //Отменяем стандартную отправку формы.
  evt.preventDefault();
  // Получаем значение полей jobInput и nameInput из свойства value
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobinput.value;
  // Закрываем попап
  closePopup(popupProfile);
};

//функция отправки формы добавления карточки
function handleNewCardFormSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: cardInputName.value,
    link: cardInputLink.value,
  };
    elementList.prepend(createCard(newCard));
    closePopup(popupCard);
  // Очищаем поля
  cardInputName.value = "";
  cardInputLink.value = "";
  //методы класса FormValidator активируют/деактивируют кнопку сабмита
  //и очищать ошибки в index.js
  cardAddFormValidate.hideInputErrors();
};
//открыть попап добавления новых карточек
function handleCardButton() {
  openPopup(popupCard);
};

//функция создания карточки
function handleCardClick(name, link) {
  popupImageImage.src = link;
  popupImageImage.alt = name;
  popupImageTitle.textContent = name;
  openPopup(popupImage);
};

// Создаем экземпляр новой карточки
function createCard(item) {
  const card = new Card(item, template, handleCardClick);
  const cardElement = card.generateCard();
  return cardElement
};

profileButton.addEventListener("click", handleProfileButton);
buttonOpenPopapCard.addEventListener("click", handleCardButton);

formProfileElement.addEventListener('submit', handleProfileFormSubmit);
cardAddForm.addEventListener('submit', handleNewCardFormSubmit);

//создать экземпляр класса FormValidator
const formProfileElementValidate = new FormValidator(config, formProfileElement);
const cardAddFormValidate = new FormValidator(config, cardAddForm);
formProfileElementValidate.enableValidation();
cardAddFormValidate.enableValidation();

//подгружаем первые карточки
initialCards.forEach((item) => {
  const cardElement = createCard(item);
  elementList.append(cardElement);
});


