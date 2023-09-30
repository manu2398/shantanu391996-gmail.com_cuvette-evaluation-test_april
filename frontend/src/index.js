import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import ProductScreen from "./pages/ProductScreen";
import LoginScreen from "./pages/LoginScreen";
import CartScreen from "./pages/CartScreen";
import SignUpScreen from "./pages/SignUpScreen";
import DataProvider from "./store/store";
import CheckoutScreen from "./pages/CheckoutScreen";
import SuccessScreen from "./pages/SuccessScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <DataProvider>
          <App />
        </DataProvider>
      }
    >
      <Route index={true} path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<SignUpScreen />} />
      <Route path="/checkout" element={<CheckoutScreen />} />
      <Route path="/success" element={<SuccessScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
