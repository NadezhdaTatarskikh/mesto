export class UserInfo {
  constructor({ name, job }) {
    this._name = document.querySelector(name);
    this._job = document.querySelector(job);
  }
//публичный метод возвращает объект с данными пользователя
 getUserInfo() {
  const userInfo = {
      name: this._name.textContent,
      job: this._job.textContent,
    }
    return userInfo;
 }
//публичный метод, принимает новые данные пользователя и добавляет их на страницу
 setUserInfo(name, job) {
    this._name.textContent = name;
    this._job.textContent = job;
  }
}
