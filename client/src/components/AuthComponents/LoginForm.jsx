import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { login } from "../../api/api.js";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/userSlice.js";
import { toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = ({
  setIsLoginFormOpen,
  setFormType,
  setIsAuthComponentOpen,
}) => {
  const initialState = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);

  const select = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // react tostify BiSlider.............
  const notify = () =>
    toast.success("Login successfully", {
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

  const navigate = useNavigate();

  // extracting data from global state......
  const { isLoggedIn, userData } = select;

  const handleClosedButton = () => {
    setIsLoginFormOpen((prev) => !prev);
  };

  const handleFormData = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // form submit button functionality.....
  const handleSubmit = async (event) => {
    event.preventDefault();
    // calling API....
    const userData = await login(formData);
    console.log(userData)

    if (userData.status) {
      dispatch(loginSuccess(userData));
      setIsLoginFormOpen((prev) => !prev);
      // navigate('/')
      notify();
    } else {
      alert(`ops! ${userData.message}`);
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
            Log in!
          </h2>
          <span
            onClick={handleClosedButton}
            className="absolute top-4 left-2 font-bold px-2
           hover:bg-gray-200 hover:rounded-md ease-in duration-100 cursor-pointer"
          >
            <IoMdClose className="font-bold text-2xl" />
          </span>
          <div className="text-md text-center mt-4">
            Login with your email here.
          </div>
        </div>

        {/* // input fields starts from here...... */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 pt-6 px-2">
          <input
            type="email"
            onChange={handleFormData}
            value={formData.email}
            name="email"
            required={true}
            placeholder="Email"
            className="rounded-xl p-2 border"
          />
          <input
            type="password"
            onChange={handleFormData}
            value={formData.password}
            name="password"
            required={true}
            placeholder="Password"
            className="rounded-xl p-2 border"
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="rounded-xl flex justify-center py-2 text-white bg-cBlue
           hover:bg-blue-600 ease-in duration-100"
          >
            Submit
          </button>
        </form>

        {/* // bottom section----- */}
        <div className="flex flex-col gap-2 border-t-2 p-4 justify-center items-center">
          <div className="flex gap-1">
            <p>Forgot password?</p>
            <button className="text-blue-600 font-semibold hover:underline">
              Reset
            </button>
          </div>
          <div className="flex gap-1">
            <p>Don't have an account?</p>
            <button
              onClick={() => {
                setIsLoginFormOpen((prev) => !prev);
                setIsAuthComponentOpen((prev) => !prev);
                setFormType("signup");
              }}
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
