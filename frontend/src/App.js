import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TabBar from "./components/TabBar";
import { useEffect, useState } from "react";
import { getMe } from "./store/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getMe());
  }, [auth?.token]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(auth?.user?.cartItems));
  }, [auth?.user?.cartItems]);
  return (
    <>
      <Header />
      <main className="main">
        <div className="main__container">
          <TabBar />
          <Navbar />
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
