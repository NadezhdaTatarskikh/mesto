'use strict'

// создаём класс, который отвечает за отрисовку элементов на странице
export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

// метод, который отвечает за создание и отрисовку данных на странице
  renderItems() {
    this._renderedItems.forEach((item) => {
      this._renderer(item)
    });
  }

  // принимает DOM-элемент и добавляет его в контейнер
  addItem(element) {
    this._container.prepend(element);
  }
  addCardAppend(element) {
    this._container.append(element);
 }
}
