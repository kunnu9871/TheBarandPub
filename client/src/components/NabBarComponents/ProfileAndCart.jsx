// import { useState } from "react";
import { BiDish } from "react-icons/bi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const ProfileAndCart = ({setIsProfileOpen}) => {
  const selector = useSelector((state)=> state.cart);

  return (
    <div 
    className="flex gap-4 items-center"
    >
      <li 
      onClick={()=> setIsProfileOpen((prev) => !prev)}
      className="h-10 w-10 rounded-full cursor-pointer overflow-hidden">
        <img
          src="assets/profilePic.png"
          alt="profile picture"
          className="object-cover object-center"
        />
      </li>
      <NavLink to={'/cart'} className="relative">
        <BiDish 
          className="h-10 w-10"
        />
        <span className="absolute bg-white text-black font-bold rounded-md w-6 h-6 text-center top-[-8px] right-[-16px]">{selector.length}</span>
      </NavLink>
    </div>
  );
};

export default ProfileAndCart;
