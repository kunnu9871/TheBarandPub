import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Header from "./components/Header";
import AdminPage from "./pages/admin/AdminPage";
import Cart from "./pages/Cart";
import TableBooking from "./pages/TableBooking";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col"> {/* Correct layout with flexbox */}
      <Header />
      <ToastContainer/>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/reservation" element={<TableBooking />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
