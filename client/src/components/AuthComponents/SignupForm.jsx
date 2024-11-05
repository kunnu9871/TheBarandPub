import { useState } from "react";
import { register } from "../../api/api";
import { IoMdClose } from "react-icons/io";

const SignUpForm = ({
  setIsSignupFormOpen,
  setIsAuthComponentOpen,
  setFormType,
}) => {
  const initial_state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    avatar: "",
  };
  const [formData, setFormData] = useState(initial_state);
  console.log(formData)
  const handle_formData = (event) => {
    const { type, name, files, value } = event.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };


  const handle_submit = async (event) => {
    event.preventDefault();
    try {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      const formDataToSend = new FormData();
      for (let key in formData) {
        formDataToSend.append(key, formData[key]);
      }
  
      
      const response = await register(formDataToSend);
      if (response.status) {
        alert("sign up successfully, Please login");
        setFormData(initial_state);
        setIsSignupFormOpen((prev) => !prev);
      }
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div
      className="h-dvh fixed top-0 w-full flex items-center justify-center
       z-50 bg-black bg-opacity-30 backdrop-blur ease-in-out duration-1000"
    >
      <div
        className="flex flex-col w-[350px] px-2
       bg-white text-black rounded-2xl border-1 border-gray-400 shadow-xl"
      >
        {/* // Top section----- */}
        <div className="flex flex-col relative w-full px-6">
          <h2 className="pt-5 text-center text-4xl font-bold leading-9 tracking-tight">
            Sign up!
          </h2>
          <span
            onClick={() => setIsSignupFormOpen((prev) => !prev)}
            className="absolute top-4 left-2 font-bold px-2
           hover:bg-gray-200 hover:rounded-md ease-in duration-100 cursor-pointer"
          >
            <IoMdClose className="font-bold text-2xl" />
          </span>
          <div className="text-md text-center mt-4">
            Create a free account with your email.
          </div>
        </div>

        {/* // input fields starts from here...... */}
        <form
          onSubmit={handle_submit}
          enctype="multipart/form-data"
          className="flex flex-col gap-3 pt-6 px-2"
        >
          <input
            type="text"
            name="firstName"
            onChange={handle_formData}
            value={formData.firstName}
            required={true}
            placeholder="First Name"
            className="rounded-xl p-2 border"
          />
          <input
            type="text"
            name="lastName"
            onChange={handle_formData}
            value={formData.lastName}
            placeholder="Last Name"
            className="rounded-xl p-2 border"
          />
          <input
            type="email"
            onChange={handle_formData}
            value={formData.email}
            name="email"
            required={true}
            placeholder="Email"
            className="rounded-xl p-2 border"
          />
          <input
            type="tel"
            pattern="[0-9]{10}"
            onChange={handle_formData}
            value={formData.phone}
            name="phone"
            required={true}
            placeholder="Phone number"
            className="rounded-xl p-2 border"
          />
          <input
            type="password"
            onChange={handle_formData}
            value={formData.password}
            name="password"
            required={true}
            placeholder="Password"
            className="rounded-xl p-2 border"
          />
          <input
            type="text"
            onChange={handle_formData}
            value={formData.confirmPassword}
            name="confirmPassword"
            required={true}
            placeholder="Confirm Password"
            className="rounded-xl p-2 border"
          />
          <input
            type="file"
            name="avatar"
            accept="png, jpeg, jpg"
            className="rounded-xl p-2 border"
            onChange={handle_formData}
          />
          <button
            type="submit"
            className="rounded-xl flex justify-center py-2 text-white bg-cBlue
           hover:bg-blue-600 ease-in duration-100"
          >
            Submit
          </button>
        </form>

        {/* // bottom section----- */}
        <div className="flex gap-2 border-t-2 p-4 justify-center items-center">
          <p>Already have an account?</p>
          <button
            onClick={() => {
              setIsSignupFormOpen((prev) => !prev);
              setIsAuthComponentOpen((prev) => !prev);
              setFormType("login");
            }}
            className="text-blue-600 font-semibold hover:underline"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
