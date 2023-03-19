'use strict'

import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._title = this._popup.querySelector('.popup__image-title');
    this._image = this._popup.querySelector('.popup__image');
   }

   open(name, link)  {
      this._image.src = link;
      this._title.textContent = name;
      this._image.alt = name;
      super.open();
   }
}


