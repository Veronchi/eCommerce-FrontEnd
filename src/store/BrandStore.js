import { makeAutoObservable } from "mobx";

export default class BrandStore {
  constructor() {
    this._brands = [
      { id: 1, name: "Sumsung" },
      { id: 2, name: "Apple" },
    ];
    makeAutoObservable(this);
  }

  setBrands(brands) {
    this._isAuth = brands;
  }

  get brands() {
    return this._brands;
  }
}
