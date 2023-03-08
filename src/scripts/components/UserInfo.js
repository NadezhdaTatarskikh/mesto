export class UserInfo {
  constructor({ userName, userJob }) {
    this._userName = document.querySelector(userName);
    this._userJob = document.querySelector(userJob);
  }
//публичный метод возвращает объект с данными пользователя
 getUserInfo() {
  const userInfo = {
      userName: this._userName.textContent,
      userJob: this._userJob.textContent,
    }
    return userInfo;
 }
//публичный метод, принимает новые данные пользователя и добавляет их на страницу
 setUserInfo({ name, job }) {
    this._userName.textContent = name;
    this._userJob.textContent = job;
  }
}
