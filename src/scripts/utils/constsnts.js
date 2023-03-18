'use strict'

// Конф. валидации
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__error-text_active',
};

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const buttonOpenPopupProfile = document.querySelector('.profile__edit');
const buttonOpenPopupCard = document.querySelector('.profile__add-button');


const elementList = '.photo-grid';

const popupImage = document.querySelector('.popup_name_image');
const popupImageImage = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__image-title');

const popupProfile = document.querySelector('.popup_name_profile');
const formProfileElement = document.querySelector('.popup__form_name_profile');
const profileNameInput = document.querySelector('.popup__input_text_name');
const profileJobInput = document.querySelector('.popup__input_text_job');

const popupCard = document.querySelector('.popup_name_photo');
const cardAddForm = document.querySelector('.popup__form_name_photo');
const cardInputName = document.querySelector('.popup__input_text_title');
const cardInputLink = document.querySelector('.popup__input_text_link');

//попап редактирования аватара
const popupAvatar = document.querySelector('.popup_edit-avatar');
const formEditAvatar = popupAvatar.querySelector('.popup__form');
const buttonOpenPopupAvatar = document.querySelector('.profile__btn-avatar')
const avatar = document.querySelector('.popup__form_edit_avatar')

export {
  config,
  buttonOpenPopupProfile,
  buttonOpenPopupCard,
  elementList,
  popupImage,
  popupImageImage,
  popupImageTitle,
  popupProfile,
  formProfileElement,
  profileNameInput,
  profileJobInput,
  popupCard,
  cardAddForm,
  cardInputName,
  cardInputLink,
  profileName,
  profileJob,
  buttonOpenPopupAvatar,
  formEditAvatar,
  avatar,
  popupAvatar
};
