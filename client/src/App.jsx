import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Header from "./components/Header";
import AdminPage from "./pages/admin/AdminPage";
import Cart from "./pages/Cart";
// import Test from "./pages/Test";

const App = () => {
  return (
    <div className="w-full h-dvh relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        {/* <Route path="/test" element={<Test/>}></Route> */}
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/admin" element={<AdminPage/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
