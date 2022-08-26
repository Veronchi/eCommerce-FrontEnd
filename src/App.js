import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_ROUTE,
  REGISTRATION_ROUTE,
} from "./utils/consts";
import Shop from "./pages/Shop/Shop";
import Auth from "./pages/Auth/Auth";
import ProductPage from "./pages/ProductPage/ProductPage";
import Admin from "./pages/Admin/Admin";
import Basket from "./pages/Basket";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import { observer } from "mobx-react-lite";
import { useStore } from "./hook/useStore";
import { check } from "./http/userAPI";
import { Spinner } from "./components/Spinner/Spinner";

const App = observer(() => {
  const { user } = useStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(data)
        user.setIsAuth(true);
      })
      .finally(() => setIsLoading(false));
      
  }, [user]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Shop />} />
          <Route path={LOGIN_ROUTE} element={<Auth />} />
          <Route path={REGISTRATION_ROUTE} element={<Auth />} />
          <Route path={`${PRODUCT_ROUTE}/:id`} element={<ProductPage />} />
          <Route
            path={BASKET_ROUTE}
            element={
              <RequireAuth>
                <Basket />
              </RequireAuth>
            }
          />
          <Route
            path={ADMIN_ROUTE}
            element={
              <RequireAuth>
                <Admin />
              </RequireAuth>
            }
          />

          <Route path="*" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
});

export default App;
