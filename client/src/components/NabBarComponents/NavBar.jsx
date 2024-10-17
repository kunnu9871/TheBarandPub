import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaPhone,
  FaBars,
  FaCalendarAlt,
  FaTimes,
} from "react-icons/fa";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import ProfileAndCart from "./ProfileAndCart";

const NavBar = ({ setIsAuthComponentOpen, setFormType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const isLogIn = useSelector((state) => state.user.isLoggedIn);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleAuthButtonClick = (type) => {
    setFormType(type);
    setIsAuthComponentOpen((prev) => !prev);
  };

  return (
    <nav className="w-full bg-cBlack py-1 px-4 h-fit text-cWhite border-b-2 border-cWhite relative z-40">
      <div className="w-full flex items-center justify-between relative">
        <div className="navLeft flex items-center w-auto">
          <img
            src="assets/THE.png"
            alt="Logo"
            className="h-16 w-auto rounded-full bg-gradient-to-r from-pink-500 shadow-lg shadow-pink-500/50 hover:shadow-pink-500/80 transition duration-300 ease-in-out"
          />
        </div>
        <div className="navRight w-auto flex justify-end">
          {/* Hamburger icon for mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="text-white h-6 w-6" />
              ) : (
                <FaBars className="text-white h-6 w-6" />
              )}
            </button>
          </div>

          {/* Nav Links */}
          <ul
            className={`md:flex gap-4 items-center absolute md:relative md:flex-row md:mt-0 md:mr-8 mt-4 w-full md:left-0 md:items-center transition-all ease-in duration-300 bg-cBlack md:bg-transparent ${
              isOpen ? "top-14 block z-50" : "hidden md:flex"
            }`}
          >
            <li className="flex items-center px-2 py-2 md:py-0 hover:text-pink-500 hover:shadow-pink-500/80 transition duration-300 ease-in-out">
              <FaHome className="mr-1" />
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className="flex items-center px-2 py-2 md:py-0 hover:text-pink-500 hover:shadow-pink-500/80 transition duration-300 ease-in-out">
              <FaBars className="mr-1" />
              <NavLink to="/menu" onClick={closeMenu}>
                Menu
              </NavLink>
            </li>
            <li className="px-2 py-2 md:py-0 hover:text-pink-500 hover:shadow-pink-500/80 transition duration-300 ease-in-out">
              <NavLink
                to="/contactUS"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center text-pink-500 bg-black"
                    : "flex items-center"
                }
                onClick={closeMenu}
              >
                <FaPhone className="mr-1" />
                Contact Us
              </NavLink>
            </li>
            <li className="flex items-center px-2 py-2 md:py-0 hover:text-pink-500 hover:shadow-pink-500/80 transition duration-300 ease-in-out">
              <FaCalendarAlt className="mr-1" />
              <NavLink
                to="/reservation"
                className="font-bold"
                onClick={closeMenu}
              >
                Table Booking
              </NavLink>
            </li>

            {!isLogIn && (
              <>
                <li
                  id="login"
                  className="px-2 py-2 md:py-0 hover:text-pink-500 hover:shadow-pink-500/80 transition duration-300 ease-in-out"
                >
                  <button
                    onClick={() => handleAuthButtonClick("login")}
                    className="font-bold"
                  >
                    LogIn
                  </button>
                </li>
                <li
                  name="signup"
                  className="px-2 py-2 md:py-0 hover:text-pink-500 hover:shadow-pink-500/80 transition duration-300 ease-in-out"
                >
                  <button
                    onClick={() => handleAuthButtonClick("signup")}
                    className="font-bold"
                  >
                    SignUp
                  </button>
                </li>
              </>
            )}

            {/* // user profile image....... */}
            {isLogIn && <ProfileAndCart setIsProfileOpen={setIsProfileOpen}/>}
          </ul>
        </div>
      </div>
      {isProfileOpen && <Profile  setIsProfileOpen ={setIsProfileOpen}/>}
    </nav>
  );
};

export default NavBar;
