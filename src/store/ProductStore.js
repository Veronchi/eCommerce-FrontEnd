import { makeAutoObservable } from "mobx";

export default class ProductStore {
  constructor() {
    this._products = [
      {
        id: 1,
        name: "SamsungA52",
        price: 300,
        rating: 5,
        img: "https://static.1k.by/images/products/ip/big/ppe/9/4433776/ib5b20873e.png",
      },
      {
        id: 2,
        name: "SamsungA53",
        price: 300,
        rating: 5,
        img: "https://static.1k.by/images/products/ip/big/ppe/9/4433776/ib5b20873e.png",
      },
    ];
    makeAutoObservable(this);
  }

  setProducts(products) {
    this._isAuth = products;
  }

  get products() {
    return this._products;
  }
}
