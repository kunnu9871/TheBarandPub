import React, { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Header from "./components/Header";
import AddItems from "./pages/admin/AddItems";
import { ToastContainer } from "react-toastify";
import AdminHome from "./pages/admin/AdminHome";
import AdminHeader from "./pages/admin/components/AdminHeader";
// import { useSelector } from "react-redux";

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  const Menu = lazy(() => import("./pages/Menu"));
  const Cart = lazy(() => import("./pages/Cart"));
  const ContactUs = lazy(() => import("./pages/ContactUs"));
  const TableBooking = lazy(() => import("./pages/TableBooking"));

  return (
    <div className="min-h-screen flex flex-col">
      {/* Conditionally render Header based on route */}
      {isAdminRoute ? <AdminHeader /> : <Header />}

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
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/reservation" element={<TableBooking />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
