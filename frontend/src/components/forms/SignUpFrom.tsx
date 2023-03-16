import { useState } from "react";
import axios from "axios";

const SignUpForm = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e: any) => {
    e.preventDefault();

    try {
      const { status } = await axios({
        method: "post",
        url: "http://localhost:4000/signup",
        data: {
          fullname,
          username,
          email,
          password,
        },
      });
      if (status === 201) alert("New ID created!");
    } catch (error: any) {
      alert(`Error: ${error.response.data}`);
    }
  };

  return (
    <form className="flex w-[85%] scale-95 flex-col gap-1 overflow-hidden rounded-[20px] bg-blue-100 p-5 sm:w-[55%] md:w-[75%] md:scale-90 lg:w-[50%] lg:scale-100">
      <div className="mt-3 flex w-[100%] items-center justify-center rounded-[25px] bg-blue-200 py-5 text-2xl text-black">
        Register
      </div>
      <div className="text-md mt-3 flex w-[100%] flex-col gap-1">
        <label className="">Name:</label>
        <input
          type="text"
          onChange={(e) => setFullname(e.target.value)}
          className="rounded-md px-2 py-1 outline-none"
        />
      </div>
      <div className="text-md flex w-[100%] flex-col gap-1">
        <label className="">User Name:</label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          className="rounded-md px-2 py-1 outline-none"
        />
      </div>
      <div className="text-md flex w-[100%] flex-col gap-1">
        <label className="">Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-md px-2 py-1 outline-none"
        />
      </div>
      <div className="text-md flex w-[100%] flex-col gap-1">
        <label className="">Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-md px-2 py-1 outline-none"
        />
      </div>
      <div className="mt-3 flex w-[100%] items-center gap-8 text-center text-lg">
        <button
          onClick={registerUser}
          className="mt-2 rounded-lg bg-blue-700 py-1 px-3 text-white transition-all duration-500 ease-in-out hover:scale-105 hover:bg-yellow-400"
        >
          Sign Up
        </button>
        <p className="mt-2 transition-all duration-150 ease-in hover:scale-105">
          Cancel
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
