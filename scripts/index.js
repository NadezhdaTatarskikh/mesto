import {
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
  profileJobSelector
} from "./utils/constsnts.js";
import { Card } from "./components/Card.js";
import { FormValidator } from "./components/FormValidator.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { Section } from "./components/Section.js";
import { UserInfo } from "./components/UserInfo.js";

// попап просмотра изображения
const popupWithImage = new PopupWithImage(popupImageSelector);
popupWithImage.setEventListeners();

//функция всплытия отдельным попапом нажатой карточки
function handleCardClick({ name, link }) {
  popupWithImage.open(name, link);
};

// Создаем экземпляр новой карточки
function createCard(item) {
  const card = new Card(item, template, handleCardClick);
  const cardElement = card.generateCard();
  return cardElement
};

//подгружаем первые карточки
const cardList = new Section ({
  items: initialCards,
  renderer: (item) => {
      cardList.addItem(createCard(item));
    },
  }, '.photo-grid' );
  cardList.renderItems();

//экземпляр UserInfo с селекторами профиля
const userInfo = new UserInfo({
  name: profileNameSelector,
  job: profileJobSelector,
});

// попап редактирования профиля
//const popupEditProfile = new PopupWithForm(popupProfileSelector, (input) => {
//  userInfo.setUserInfo(input.profile__name, input.profile__job);
//  popupEditProfile.close();
//});

//popupEditProfile.setEventListeners();

//открыть попап профиля, тут же данные о пользователе
function handleProfileButton () {
  // Получаем значение полей jobInput и nameInput из свойства value
    profileNameInput.value = profileName.textContent;
    profileJobinput.value = profileJob.textContent;
    openPopup(popupProfileSelector);
  };

  // Обработчик «отправки» формы через submit
function handleProfileFormSubmit(evt) {
  //Отменяем стандартную отправку формы.
  evt.preventDefault();
  // Получаем значение полей jobInput и nameInput из свойства value
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobinput.value;
  // Закрываем попап
  closePopup(popupProfileSelector);
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

 // profileButton.addEventListener("click", handleProfileButton);
 // buttonOpenPopapCard.addEventListener("click", handleCardButton);

  formProfileElement.addEventListener('submit', handleProfileFormSubmit);
  cardAddForm.addEventListener('submit', handleNewCardFormSubmit);

//создать экземпляр класса FormValidator
const formProfileElementValidate = new FormValidator(config, formProfileElement);
const cardAddFormValidate = new FormValidator(config, cardAddForm);
formProfileElementValidate.enableValidation();
cardAddFormValidate.enableValidation();




















