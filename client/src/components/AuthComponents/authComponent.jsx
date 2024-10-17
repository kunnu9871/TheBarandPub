import { FaGoogle, FaApple } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

const AuthComponent = ({
  formType,
  setIsAuthComponentOpen,
  setIsSignupFormOpen,
  setIsLoginFormOpen,
}) => {
  
  // use to close the signUp ans login pop up window......
  const handleClosedButton = () => {
    setIsAuthComponentOpen((prev) => !prev);
  };


  // render forms as per the type of form 'signUp' or 'login'
  const toggleSignupForm = () => {

    if(formType === 'signup'){
      setIsAuthComponentOpen((prev) => !prev);
      setIsSignupFormOpen((prev) => !prev);
    };

    if(formType === 'login'){
      setIsAuthComponentOpen((prev) => !prev);
      setIsLoginFormOpen((prev)=> !prev);
    }
    
  };

  return (
    <div
      className="h-dvh  fixed top-0 w-full flex items-center justify-center
       z-50 bg-black bg-opacity-30 backdrop-blur ease-in-out duration-1000"
    >
      <div
        className="flex flex-col w-[350px] h-[400px] px-2
       bg-white text-black rounded-2xl border-1 border-gray-400 shadow-xl"
      >
        {/* -----------------Upper Part------------- */}

        <div className="flex flex-col relative w-full px-6">
          <h2 className="pt-5 text-center text-4xl font-bold leading-9 tracking-tight shadow-sm">
            Hello!
          </h2>
          <span
            onClick={handleClosedButton}
            className="absolute top-4 left-2 font-bold px-2
           hover:bg-gray-200 hover:rounded-md ease-in duration-100 cursor-pointer"
          >
            <IoMdClose className="font-bold text-2xl" />
          </span>
          <div className="text-md text-center mt-4">
            Use your email or another service to continue with{" "}
            <span className="font-bold">The Bar & Cafe</span>
          </div>
        </div>

        {/* ----------------Lower part-------------- */}
        <div className="flex flex-col text-lg font-semibold gap-3 pt-6 px-2">
          <NavLink className=" relative rounded-xl flex items-center justify-center py-2 bg-gray-100 hover:bg-gray-200">
            <FaGoogle className="absolute left-8" /> Continue with Google
          </NavLink>
          <NavLink className="relative rounded-xl flex items-center justify-center py-2 bg-gray-100 hover:bg-gray-200">
            <FaApple className="absolute left-8" /> Continue with Apple
          </NavLink>
          <button
            onClick={toggleSignupForm}
            className="rounded-xl flex justify-center py-2 text-white bg-cBlue
           hover:bg-blue-600 ease-in duration-100"
          >
            Continue with your email
          </button>
          <p className="text-sm font-normal text-center pt-2">
            By continuing, you agee with our Terms of Services. Read our Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;
