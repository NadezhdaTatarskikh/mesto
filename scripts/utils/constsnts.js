const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
// Конф. валидации
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__error-text_active',
};


const profileNameSelector = '.profile__name';
const profileJobSelector = '.profile__job';
const profileButton = '.profile__edit';
const buttonOpenPopapCard = '.profile__add-button';

const elementList = '.photo-grid';
const template = document.querySelector('.card-template').content.querySelector('.photo-grid__item');

const popupImageSelector = '.popup_name_image';
const popupImageImage = '.popup__image';
const popupImageTitle = '.popup__image-title';

const popupProfileSelector = '.popup_name_profile';
const formProfileElement = '.popup__form_name_profile';
const profileNameInput = '.popup__input_text_name';
const profileJobInput = '.popup__input_text_job';

const popupCard = '.popup_name_photo';
const cardAddForm = '.popup__form_name_photo';
const cardInputName = '.popup__input_text_title';
const cardInputLink = '.popup__input_text_link';

const popupList = Array.from(document.querySelectorAll('.popup'));

export {
  initialCards,
  config,
  profileButton,
  buttonOpenPopapCard,
  elementList,
  template,
  popupImageSelector,
  popupImageImage,
  popupImageTitle,
  popupProfileSelector,
  formProfileElement,
  profileNameInput,
  profileJobInput,
  popupCard,
  cardAddForm,
  cardInputName,
  cardInputLink,
  popupList,
  profileNameSelector,
  profileJobSelector,
};
