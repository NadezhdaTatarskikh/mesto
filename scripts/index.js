 const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close-button');

const profile = document.querySelector('.profile');
const editProfile = profile.querySelector('.profile__edit');
const editProfileCard = profile.querySelector('.profile__add-button');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');

const template = document.querySelector('.card-template').content;
const elementList = document.querySelector('.photo-grid');

const popupImage = document.querySelector('.popup_name_image');
const popupImageImage = popupImage.querySelector('.popup__image');
const popupImageTitle = popupImage.querySelector('.popup__image-title');
const imagecloseButton = popupImage.querySelector('.popup__close-button');

const popupProfile = document.querySelector('.popup_name_profile')
const formElement = popupProfile.querySelector('.popup__profile_name_profile');
const profileNameInput = popupProfile.querySelector('.popup__input_text_name');
const profileJobinput = popupProfile.querySelector('.popup__input_text_job');
const profileCloseButton = popupProfile.querySelector('.popup__close-button');

const popupCard = document.querySelector('.popup_name_photo');
const cardAddForm = popupCard.querySelector('.popup__profile_name_photo');
const cardInputName = popupCard.querySelector('.popup__input_text_title');
const cardInputLink = popupCard.querySelector('.popup__input_text_link');
const cardCloseButton = popupCard.querySelector('.popup__close-button');

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

function createCard(item) {
  const templateElement = template.querySelector('.photo-grid__item').cloneNode(true);
  const templateLike = templateElement.querySelector('.photo-grid__button');
  const templateDelite = templateElement.querySelector('.photo-grid__delete');
  const ImageButton = templateElement.querySelector('.photo-grid__image');
  const cardTitle = templateElement.querySelector('.photo-grid__text');
  const cardImage = templateElement.querySelector('.photo-grid__image');

    cardImage.src = item.link;
    cardImage.alt = item.name;
    cardTitle.textContent = item.name;

    templateLike.addEventListener('click', (evt) => { evt.target.classList.toggle('photo-grid__button_active')});
    templateDelite.addEventListener('click', (evt) => { evt.target.closest('.photo-grid__item').remove()});

    ImageButton.addEventListener('click', () => {
      popupImageImage.src = item.link;
      popupImageImage.alt = item.name;
      popupImageTitle.textContent = item.name;
      openPopup(popupImage);
    });

return templateElement;
};

initialCards.map(function (item) {
  elementList.append(createCard(item));
});

function handleProfileButton () {
  profileNameInput.value = profileName.textContent;
  profileJobinput.value = profileJob.textContent;
  openPopup(popupProfile);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobinput.value;
  closePopup(popupProfile);
};

function handleNewCardFormSubmit(evt) {
  evt.preventDefault();
  const newCard = { name: cardInputName.value, link: cardInputLink.value };
  elementList.prepend(createCard(newCard));
  closePopup(popupCard);
  titleInput.value = "";
  imageInput.value = "";
};

function handleCardButton() {
  openPopup(popupCard);
}

profileCloseButton.addEventListener("click", () => {
  closePopup(popupProfile);
});

cardCloseButton.addEventListener("click", () => {
  closePopup(popupCard);
});

imagecloseButton.addEventListener("click", () => {
  closePopup(popupImage);
});

editProfile.addEventListener("click", handleProfileButton);
editProfileCard.addEventListener("click", handleCardButton);
formElement.addEventListener('submit', handleProfileFormSubmit);
cardAddForm.addEventListener('submit', handleNewCardFormSubmit);


