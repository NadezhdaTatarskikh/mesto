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
const buttonImageClose = popupImage.querySelector('.popup__close-button');

const popupProfile = document.querySelector('.popup_name_profile')
const formProfileElement = popupProfile.querySelector('.popup__form_name_profile');
const profileNameInput = popupProfile.querySelector('.popup__input_text_name');
const profileJobinput = popupProfile.querySelector('.popup__input_text_job');

const popupCard = document.querySelector('.popup_name_photo');
const cardAddForm = popupCard.querySelector('.popup__form_name_photo');
const cardInputName = popupCard.querySelector('.popup__input_text_title');
const cardInputLink = popupCard.querySelector('.popup__input_text_link');
const cardCloseButton = popupCard.querySelector('.popup__close-button');

const popupList = Array.from(document.querySelectorAll('.popup'));

// Функция закрытия открытого popup по клику
popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup)
      }
      if (evt.target.classList.contains('popup__close-button')) {
        closePopup(popup)
      }
  })
})
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
}

function handleProfileButton () {
  profileNameInput.value = profileName.textContent;
  profileJobinput.value = profileJob.textContent;
  openPopup(popupProfile);
}

// Обработчик «отправки» формы
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobinput.value;
  closePopup(popupProfile);
};

function createCard(item) {
  const card = new Card(item, template, handleCardClick);
  const cardElement = card.generateCard();
  return cardElement
}

//функция отправки формы добавления карточки
function handleNewCardFormSubmit(evt) {
  evt.preventDefault();
  const data = {};
    data.name = cardInputName.value;
    data.link = cardInputLink.value;
    const newCard = createCard(data);
    elementList.prepend(newCard);
  // Очищаем поля
    cardAddForm.reset();
  // Делаем кнопку неактивной
    cardAddFormValidate._toggleButtonState();
  closePopup(popupCard);
};

//функция создания карточки
function handleCardClick(name, link) {
  popupImageImage.src = link;
  popupImageImage.alt = name;
  popupImageTitle.textContent = name;
  openPopup(popupImage);
};

function handleCardButton() {
  openPopup(popupCard);
}

cardCloseButton.addEventListener("click", () => {
  closePopup(popupCard);
});

buttonImageClose.addEventListener("click", () => {
  closePopup(popupImage);
});

profileButton.addEventListener("click", handleProfileButton);
buttonOpenPopapCard.addEventListener("click", handleCardButton);
formProfileElement.addEventListener('submit', handleProfileFormSubmit);
cardAddForm.addEventListener('submit', handleNewCardFormSubmit);

const formProfileElementValidate = new FormValidator(config, formProfileElement);
const cardAddFormValidate = new FormValidator(config, cardAddForm);
formProfileElementValidate.enableValidation();
cardAddFormValidate.enableValidation();

//подгружаем первые карточки
initialCards.forEach((item) => {
  const cardElement = createCard(item);
  elementList.append(cardElement);
});


