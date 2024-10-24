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
    <div className="sticky w-full z-40 top-0">
      {/* Navigation Bar */}
      <NavBar
        setFormType={setFormType}
        setIsAuthComponentOpen={setIsAuthComponentOpen}
      />

      {/* Auth Modal */}
      {isAuthComponentOpen && (
        <AuthComponent
          formType={formType}
          setIsAuthComponentOpen={setIsAuthComponentOpen}
          setIsSignupFormOpen={setIsSignupFormOpen}
          setIsLoginFormOpen={setIsLoginFormOpen}
        />
      )}

      {/* Sign Up Form */}
      {formType === "signup" && isSignupFormOpen && (
        <SignUpForm
          setIsSignupFormOpen={setIsSignupFormOpen}
          setIsAuthComponentOpen={setIsAuthComponentOpen}
          setFormType={setFormType}
        />
      )}

      {/* Login Form */}
      {formType === "login" && isLoginFormOpen && (
        <LoginForm
          setIsLoginFormOpen={setIsLoginFormOpen}
          setFormType={setFormType}
          setIsAuthComponentOpen={setIsAuthComponentOpen}
        />
      )}
    </div>
  );
};

export default Header;

