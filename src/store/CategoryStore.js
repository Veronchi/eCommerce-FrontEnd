import { makeAutoObservable } from "mobx";

export default class CategoryStore {
  constructor() {
    this._categories = [
      { id: 1, name: "Холодильник" },
      { id: 2, name: "Телефон" },
      { id: 3, name: "Кофеварки" },
      { id: 4, name: "Кофемашины" },
    ];
    this._selectedCategory = {};
    makeAutoObservable(this);
  }

  setCategories(categories) {
    this._isAuth = categories;
  }

  setSelectedCategory(category) {
    this._selectedCategory = category;
  }

  get categories() {
    return this._categories;
  }

  get selectedCategory() {
    return this._selectedCategory;
  }
}
