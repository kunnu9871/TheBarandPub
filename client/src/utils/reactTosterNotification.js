import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (message, duration=1500, position="top-right") =>
    toast.success(message, {
      position: position,
      autoClose: duration,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    export default notify