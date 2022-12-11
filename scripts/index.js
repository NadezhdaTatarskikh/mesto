const aboutButton = document.querySelector('.profile__edit');
const aboutPopup = document.querySelector('.popup');
const aboutCloseButton = document.querySelector('.popup__close-button');

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function openAboutPopup(event) {
    console.log(this);
    event.preventDefault();
    openPopup(aboutPopup);
}

function closeAboutPopup() {
    closePopup(aboutPopup);

}

aboutButton.addEventListener('click', openAboutPopup)
aboutCloseButton.addEventListener('click', closeAboutPopup);

aboutPopup.addEventListener('click', (event) => {
    console.log(event.target, event.currentTarget);
    if (event.target === event.currentTarget) {
        closePopup(aboutPopup);
    };
})


