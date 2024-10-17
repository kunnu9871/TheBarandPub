import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Header from "./components/Header";
// import Test from "./pages/Test";

const App = () => {
  return (
    <div className="w-full h-dvh">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        {/* <Route path="/test" element={<Test/>}></Route> */}
        <Route path="/menu" element={<Menu/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
