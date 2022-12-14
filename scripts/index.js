const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__profile');
const nameInput = document.querySelector('.popup__input_text_name');
const jobinput = document.querySelector('.popup__input_text_job');
const editProfile = document.querySelector('.profile__edit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupClose = document.querySelector('.popup__close-button');

function openPopup() {
    popup.classList.add("popup_opened");
    nameInput.value = profileName.textContent;
    jobinput.value = profileJob.textContent;
}
editProfile.addEventListener("click", openPopup);

function closePopup() {
    popup.classList.remove('popup_opened');
}
popupClose.addEventListener("click", closePopup);

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobinput.value;
    closePopup();
};

formElement.addEventListener('submit',  handleFormSubmit);









