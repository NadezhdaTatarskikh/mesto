'use strict'

export class Api {
  constructor(options) {
      this._url = options.url;
      this._headers = options.headers;
  }

  //проверяем ответ с сервера
    _checkResponse(res) {
      {
         if (res.ok) {
            return res.json();
         }
         return Promise.reject(`Ошибка: ${res.status}`)
      }
   }

  // Получаем карточеки с сервера
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
       headers: this._headers
    })
       .then(this._checkResponse)
 }

  // Добавим новую карточку
  addNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(this._checkResponse)
  }

  // Удаление карточки
  delitCard(_id) {
    return fetch(`${this._url}/cards/${_id}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  // Получаем информацию о пользователе с сервера
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  // Обновляем информацию о пользователе с сервера
  updateUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.job
      })
    })
    .then(this._checkResponse)
  }
  // Редактирование аватара пользователя
  updateAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
    .then(this._checkResponse)
  }
  // Ставим лайк карточке
  setLikeCard(_id) {
    return fetch(`${this._url}/cards/${_id}/likes`, {
      method: 'PUT',
      headers: this._headers
      })
      .then(this._checkResponse)
  }

  // Удаляем лайк
  delitLike(_id) {
    return fetch(`${this._url}/cards/${_id}/likes`, {
      method: 'DELETE',
      headers: this._headers
   })
      .then(this._checkResponse)
  }
}
