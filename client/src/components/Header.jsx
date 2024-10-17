import { useState } from "react";
import NavBar from "./NabBarComponents/NavBar";
import LoginForm from "./AuthComponents/LoginForm";
import AuthComponent from "./AuthComponents/authComponent";
import SignUpForm from "./AuthComponents/SignupForm";

const Header = () => {
  const [isAuthComponentOpen, setIsAuthComponentOpen] = useState(false);
  const [isSignupFormOpen, setIsSignupFormOpen] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [formType, setFormType] = useState("");


  return (
    <div className="fixed w-full z-40 top-0">
      {/* //navBar......... */}
      <NavBar
        setFormType={setFormType}
        setIsAuthComponentOpen={setIsAuthComponentOpen}
      />

      {/* //Sign up popup and singup Form.... */}
      {isAuthComponentOpen && (
        <AuthComponent
          formType={formType}
          setIsAuthComponentOpen={setIsAuthComponentOpen}
          setIsSignupFormOpen={setIsSignupFormOpen}
          setIsLoginFormOpen = {setIsLoginFormOpen}
        />
      )}

      {/* // to render signUp form */}
      {formType === "signup" && isSignupFormOpen && (
        <SignUpForm setIsSignupFormOpen={setIsSignupFormOpen} />
      )}

      {/* // to open login form with email and password */}
      {formType === "login" && isLoginFormOpen && (
        <LoginForm setIsLoginFormOpen={setIsLoginFormOpen} />
      )}
    </div>
  );
};

export default Header;
