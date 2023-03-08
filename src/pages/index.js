import {
  initialCards,
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
  profileJob
} from "../scripts/utils/constsnts.js";
import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { Section } from "../scripts/components/Section.js";
import { UserInfo } from "../scripts/components/UserInfo.js";

import "../pages/index.css"; // импорт главного файла стилей

// попап просмотра изображения
const popupWithImage = new PopupWithImage('.popup_name_image');
popupWithImage.setEventListeners();

//функция, которая заносит информацию в инпуты профиля
function addUserInfoForm({ userName, userJob }) {
  //Получаем значение полей jobInput и nameInput из свойства value
    profileNameInput.value = userName;
    profileJobInput.value = userJob;
  };

//экземпляр UserInfo с селекторами профиля
const userInfo = new UserInfo({
  userName: '.profile__name',
  userJob: '.profile__job',
});

// попап редактирования профиля
const editProfilePopup = new PopupWithForm({
  popupSelector: '.popup_name_profile',
  handleSubmitForm: (data) => {
    userInfo.setUserInfo({
      name: data.userName,
      job: data.userJob,
    });
    editProfilePopup.close()
  },
});
editProfilePopup.setEventListeners();

//функция открытия попапа профиля и занесения  информации в инпуты
buttonOpenPopupProfile.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  addUserInfoForm({
    userName: info.userName,
    userJob: info.userJob,
  });
  editProfilePopup.open();
});

// Добавляем новую карточку
const editCardPopup = new PopupWithForm({
  popupSelector: '.popup_name_photo',
  handleSubmitForm: (data) => {
  const newCardElement = createCard(data);
  cardList.addItem(newCardElement);
    editCardPopup.close()
  }
});
editCardPopup.setEventListeners();

// слушатель кнопки открытия попапа добавления новой карточки
buttonOpenPopupCard.addEventListener('click', () => {
  cardAddFormValidate.hideInputErrors();
  editCardPopup.open();
});

// Создаем экземпляр новой карточки
function createCard(item) {
  const card = new Card(item, '.card-template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement
};

//подгружаем первые карточки
const cardList = new Section ({
  items: initialCards,
  renderer: (item) => {
      console.log(item);
      cardList.addCardAppend(createCard(item));
    },
  }, '.photo-grid' );
  cardList.renderItems();


//функция всплытия отдельным попапом нажатой карточки
function handleCardClick({ name, link }) {
  popupWithImage.open(name, link);
};

//создать экземпляр класса FormValidator
const formProfileElementValidate = new FormValidator(config, formProfileElement);
const cardAddFormValidate = new FormValidator(config, cardAddForm);
formProfileElementValidate.enableValidation();
cardAddFormValidate.enableValidation();




















