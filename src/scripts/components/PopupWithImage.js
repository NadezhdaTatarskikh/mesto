"use strict";

import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._title = this._popup.querySelector(".popup__image-title");
    this._image = this._popup.querySelector(".popup__image");
  }

  open(data) {
    this._image.src = data.link;
    this._title.textContent = data.name;
    this._image.alt = data.name;
    super.open();
  }
}
