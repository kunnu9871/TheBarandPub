import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Header from "./components/Header";
import AddItems from "./pages/admin/AddItems";
import { ToastContainer } from "react-toastify";
import AdminHome from "./pages/admin/AdminHome";
import { useSelector } from "react-redux";

const App = () => {
  // const userType = useSelector((state) => state.user.userData.role[0]);
  // console.log(userType);

  const Menu = lazy(() => import("./pages/Menu"));
  const Cart = lazy(() => import("./pages/Cart"));
  const TableBooking = lazy(() => import("./pages/TableBooking"));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ToastContainer />
      <main className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/admin/addItems" element={<AddItems />} />

            {/* User Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/reservation" element={<TableBooking />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
