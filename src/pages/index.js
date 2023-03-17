'use strict'

import {
  config,
  buttonOpenPopupProfile,
  buttonOpenPopupCard,
  buttonOpenPopupAvatar,
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
  formEditAvatar
} from "../scripts/utils/constsnts.js";
import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { Section } from "../scripts/components/Section.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import { PopupWithSubmit } from "../scripts/components/PopupWithSubmit.js";
import { Api } from "../scripts/components/Api.js";

import "../pages/index.css"; // импорт главного файла стилей

// api
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-61',
  headers: {
    authorization: 'b5e191e2-a9f1-4b65-96ec-0b7ea96da54a',
    'Content-Type': 'application/json'
  }
});

// Загрузка готовых карточек и данных о пользователе с сервера
Promise.all([api.getInitialCards(), api.getUserInfo()])
.then(([initialCards, userData]) => {
  userInfo.setUserInfo(userData);
  cardsList.renderItems(initialCards);
})
.catch((err) => {
  console.log(`Ошибка: ${err}`);
})

// попап просмотра изображения
const popupWithImage = new PopupWithImage('.popup_name_image');
popupWithImage.setEventListeners();

// попап удаления карточки
const popupWithSubmit = new PopupWithSubmit('.popup_delete-card');
popupWithSubmit.setEventListeners();

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
  avatar: '.profile__avatar',
});

// попап редактирования профиля
const editProfilePopup = new PopupWithForm({
  popupSelector: '.popup_name_profile',
  handleFormSubmit: (data) => {
    editProfilePopup.loading(true);
    api.updateUserInfo(data)
      .then((data) => {
        console.log(data);
        userInfo.setUserInfo(data);
        editProfilePopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        editProfilePopup.loading(false);
      })
  }
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

//создание попапа редактирования аватара
const editAvatarPopup = new PopupWithForm({
  popupSelector: '.popup_edit-avatar',
  handleSubmitForm: (data) => {
    editAvatarPopup.loading(true);
    api.updateAvatar(data)
      .then((data) => {
        avatar.src = data.avatar;
        editAvatarPopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        editAvatarPopup.loading(false);
      });
  }
});
editAvatarPopup.setEventListeners();

//функция открытия попапа редактирования аватара
buttonOpenPopupAvatar.addEventListener('click', () => {
  editAvatarPopup.open();
})

// Создаем новую карточку
const createCard = (data) => {
  const card = new Card({
    data: data,
    userId: userInfo.getUserId(),
    handleCardClick: () => {
      popupWithImage.open(data);
    },
    handleCardDelete: () => {
      popupWithSubmit.open();
      popupWithSubmit.setSubmitAction(() => {
        api.handleCardDelete(card.getId())
          .then(() => {
            card.handleCardDelete();
            handleCardDelete.close();
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
      });
    },
    handleAddLike: () => {
      api.addLike(card.getId())
        .then((data) => {
          card.handleCardLike(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    },
    handleCardLike: () => {
      api.deleteLike(card.getId())
        .then((data) => {
          card.handleCardLike(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  }, '.template');
  return card.generateCard();
}

// Создание экземпляра класса Section
const cardList = new Section ({
  renderer: (card) => {
    cardList.addCardAppend(createCard(card));
  },
}, '.photo-grid' );

// Добавляем новую карточку
const editCardPopup = new PopupWithForm({
  popupSelector: '.popup_name_photo',
  handleSubmitForm: (data) => {
    editCardPopup.loading(true);
    api.newCardElement(data)
    .then((data) => {
      cardList.addCardAppend(createCard(data))
      editCardPopup.close()
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      editCardPopup.loading(false);
    })
  }
})

editCardPopup.setEventListeners();

// слушатель кнопки открытия попапа добавления новой карточки
buttonOpenPopupCard.addEventListener('click', () => {
  cardAddFormValidate.hideInputErrors();
  editCardPopup.open();
});

// валидация формы редактирования профиля
const formProfileElementValidate = new FormValidator(config, formProfileElement);
formProfileElementValidate.enableValidation();

// валидация формы добавления новой карточки
const cardAddFormValidate = new FormValidator(config, cardAddForm);
cardAddFormValidate.enableValidation();

// валидация формы редактирования аватара
const formEditAvatarValidate = new FormValidator(config, formEditAvatar);
formEditAvatarValidate.enableValidation();


















