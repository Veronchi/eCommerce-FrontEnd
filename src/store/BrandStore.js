import { makeAutoObservable } from "mobx";

export default class BrandStore {
  constructor() {
    this._brands = [
      { id: 1, name: "Sumsung" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Intel" },
      { id: 4, name: "Honor" },
      { id: 5, name: "Nivona" },
    ];
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setBrands(brands) {
    this._isAuth = brands;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get brands() {
    return this._brands;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
