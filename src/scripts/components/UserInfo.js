'use strict'

export class UserInfo {
  constructor({ userName, userJob, avatar }) {
    this._userName = document.querySelector(userName);
    this._userJob = document.querySelector(userJob);
    this._avatar = document.querySelector(avatar);
  }
//публичный метод возвращает объект с данными пользователя
 getUserInfo() {
  const userInfo = {
      userName: this._userName.textContent,
      userJob: this._userJob.textContent,
      avatar: this._avatar.src
    }
    return userInfo;
 }
//публичный метод, принимает новые данные пользователя и добавляет их на страницу
 setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userJob.textContent = data.job;
    this._avatar.src = data.avatar;
    this._id = data._id;
  }
  getUserId() {
    return this._id;
 }
}
