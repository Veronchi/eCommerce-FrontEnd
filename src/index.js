import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import BrandStore from "./store/BrandStore";
import CategoryStore from "./store/CategoryStore";
import ProductStore from "./store/ProductStore";
import UserStore from "./store/UserStore";
import "./style.css"

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        user: new UserStore(),
        product: new ProductStore(),
        brand: new BrandStore(),
        category: new CategoryStore(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
