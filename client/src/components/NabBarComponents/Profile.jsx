import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CiCamera } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";
import { toast, Bounce } from "react-toastify";

const Profile = ({ setIsProfileOpen }) => {
  const [userPicture, setUserPicture] = useState("/assets/profilePic.png");
  const {userData:{firstName, lastName, avatar}, isLoggedIn} = useSelector((state) => state.user);
  

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const notify = () =>
    toast.success("Logout Successfully", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  const handleLogout = () => {
    dispatch(logout());
    setIsProfileOpen((prev) => !prev);
    navigate("/");
    notify();
  };

  return (
    <div
      className="absolute hidden md:block sm:w-[400px] sm:h-[500px] sm:right-10 sm:top-20 sm:mt-1 z-50 
  bg-white transition ease-in-out duration-300 delay-200 text-black border rounded-3xl shadow-2xl"
    >
      <div className="relative before:absolute before:bottom-0 before:left-[315px] before:-translate-x-1/2 before:border-b-[25px] before:border-b-white before:border-r-[15px] before:border-r-transparent before:border-l-[15px] before:border-l-transparent"></div>

      <div
        id="profileSection"
        className="flex flex-col items-center gap-4 h-[40%] border-b-2 pt-4 relative"
      >
        <div className="border-2 border-black h-32 w-32 rounded-full overflow-hidden">
          <img
            src={avatar || userPicture}
            alt="profilePicture"
            className="object-cover object-center"
          />
        </div>
        <CiCamera className="h-6 w-6 absolute right-[30%] bottom-14 cursor-pointer" />
        <p className="font-bold text-lg text-center">{`${firstName} ${lastName}`}</p>
      </div>

      <div
        id="profileLinks"
        className="h-[60%] flex flex-col items-start justify-around pl-10"
      >
        <NavLink className="text-lg font-semibold text-gray-700 hover:text-white hover:bg-gray-400 transition-colors duration-300 ease-in-out py-2 px-4 rounded-lg">
          Edit Profile
        </NavLink>
        <NavLink className="text-lg font-semibold text-gray-700 hover:text-white hover:bg-gray-400 transition-colors duration-300 ease-in-out py-2 px-4 rounded-lg">
          Orders
        </NavLink>
        <NavLink className="text-lg font-semibold text-gray-700 hover:text-white hover:bg-gray-400 transition-colors duration-300 ease-in-out py-2 px-4 rounded-lg">
          Offers
        </NavLink>
        <button
          onClick={handleLogout}
          className="text-lg font-semibold text-gray-700 hover:text-white hover:bg-gray-400 transition-colors duration-300 ease-in-out py-2 px-4 rounded-lg"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Profile;
