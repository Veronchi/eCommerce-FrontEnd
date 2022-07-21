import { makeAutoObservable } from "mobx";

export default class CategoryStore {
  constructor() {
    this._categories = [
      { id: 1, name: "Холодильник" },
      { id: 2, name: "Телефон" },
    ];
    makeAutoObservable(this);
  }

  setCategories(categories) {
    this._isAuth = categories;
  }

  get categories() {
    return this._categories;
  }
}
