import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

// SLICE
import { setNotify } from "../../slices/NotifySlice";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = async (e: any) => {
    e.preventDefault();
    try {
      if (username === "" || password === "")
        throw new Error("Please fill the feilds!");
      else {
        const { status } = await axios({
          method: "post",
          url: "http://localhost:4000/login",
          headers: {
            username,
            password,
          },
        });
        if (status === 200) {
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
          navigate("/explore");
        }
      }
    } catch (error: any) {
      if (error.response?.data)
        dispatch(
          setNotify({
            isActive: true,
            type: "error",
            message: `${error.response.data}`,
          })
        );
      else if (error.message)
        dispatch(
          setNotify({
            isActive: true,
            type: "error",
            message: `${error.message}`,
          })
        );
    }
  };

  return (
    <form className="flex w-[85%] scale-95 flex-col gap-1 overflow-hidden rounded-[20px] bg-blue-100 p-5 sm:w-[55%] md:w-[75%] md:scale-90 lg:w-[50%] lg:scale-100">
      <div className="mt-3 flex w-[100%] items-center justify-center rounded-[25px] bg-blue-200 py-4 text-2xl text-black">
        Login
      </div>
      <div className="text-md mt-3 flex w-[100%] flex-col gap-1">
        <label className="">User Name:</label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          className="rounded-md px-2 py-1 outline-none"
          required
        />
      </div>
      <div className="text-md flex w-[100%] flex-col gap-1">
        <label className="">Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-md px-2 py-1 outline-none"
          required
        />
      </div>
      <div className="mt-3 flex w-[100%] items-center gap-7 text-center text-lg">
        <button
          onClick={loginUser}
          className="mt-2 rounded-lg bg-blue-700 py-1 px-3 text-white md:transition-all md:duration-300 md:ease-in-out md:hover:bg-yellow-400"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/")}
          className="mt-2 cursor-pointer rounded-lg bg-gray-50 py-1 px-3 transition-all duration-150 ease-in  md:hover:scale-105"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
