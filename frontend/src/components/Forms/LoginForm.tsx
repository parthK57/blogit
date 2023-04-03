import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../slices/UserSlice";
import { setFollowers } from "../../slices/FollowersSlice";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getUserData = async () => {
    try {
      // GET USER DATA
      const userDataReq = await axios({
        method: "get",
        url: "http://localhost:4000/user",
        headers: {
          username,
          password,
        },
      });
      if (userDataReq.status === 200) dispatch(setUserData(userDataReq.data));
    } catch (error: any) {
      alert(error.message);
      console.log(error);
    }
  };

  const getFollowers = async () => {
    try {
      // GET FOLLOWERS DATA
      const followersDataReq = await axios({
        method: "get",
        url: "http://localhost:4000/followers",
        headers: {
          username,
          password,
        },
      });
      if (followersDataReq?.status === 200)
        dispatch(setFollowers(followersDataReq?.data));
    } catch (error: any) {
      alert("Something went wrong!");
      console.log(error);
    }
  };

  const loginUser = async (e: any) => {
    e.preventDefault();
    try {
      const { status } = await axios({
        method: "post",
        url: "http://localhost:4000/login",
        headers: {
          username,
          password,
        },
      });
      if (status === 200) {
        await getUserData();
        await getFollowers();
        navigate("/explore");
      }
    } catch (error: any) {
      console.log(error);
      alert(`Error: ${error.response.data}`);
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
      <div className="mt-3 flex w-[100%] items-center gap-8 text-center text-lg">
        <button
          onClick={loginUser}
          className="mt-2 rounded-lg bg-blue-700 py-1 px-3 text-white md:transition-all md:duration-300 md:ease-in-out md:hover:bg-yellow-400"
        >
          Login
        </button>
        <p className="mt-2 transition-all duration-150 ease-in hover:scale-105">
          Cancel
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
