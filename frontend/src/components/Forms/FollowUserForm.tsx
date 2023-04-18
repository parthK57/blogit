import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

// SLICES
import { setNotify } from "../../slices/NotifySlice";
import { setFollowUserModalState } from "../../slices/ModalSlice";

const FollowUserForm = () => {
  const [username, setUsername] = useState("");
  const [usernameRetyped, setUsernameRetyped] = useState("");
  const dispatch = useDispatch();

  const follow = async (e: any) => {
    e.preventDefault();
    try {
      if (username.length === 0) throw new Error("Please provide a user name!");
      if (username !== usernameRetyped) throw new Error("Feilds do not match!");
      const response = await axios({
        method: "post",
        url: "http://localhost:4000/follow",
        headers: {
          username: localStorage.getItem("username"),
          password: localStorage.getItem("password"),
        },
        data: {
          followusername: usernameRetyped,
        },
      });
      if (response.status === 200) {
        dispatch(
          setNotify({ isActive: true, type: "success", message: "Success!" })
        );
        dispatch(setFollowUserModalState(false));
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
    <form className="flex w-[85%] scale-95 flex-col gap-1 overflow-hidden rounded-[20px] bg-blue-100 p-5 sm:w-[55%] md:w-[75%] md:scale-90 lg:w-[20%] lg:scale-100">
      <div className="mt-3 flex w-[100%] items-center justify-center rounded-[25px] bg-blue-200 py-4 text-2xl text-black">
        Follow User
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
      <div className="text-md mt-3 flex w-[100%] flex-col gap-1">
        <label className="">Re-type:</label>
        <input
          type="text"
          onChange={(e) => setUsernameRetyped(e.target.value)}
          className="rounded-md px-2 py-1 outline-none"
          required
        />
      </div>
      <div className="mt-3 flex w-[100%] items-center gap-7 text-center text-lg">
        <button
          onClick={follow}
          className="mt-2 rounded-lg bg-blue-700 py-1 px-3 text-white md:transition-all md:duration-300 md:ease-in-out md:hover:bg-green-500"
        >
          Follow
        </button>
        <button
          onClick={() => dispatch(setFollowUserModalState(false))}
          className="mt-2 cursor-pointer rounded-lg bg-gray-50 py-1 px-3 transition-all duration-150 ease-in  md:hover:bg-gray-100"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default FollowUserForm;
