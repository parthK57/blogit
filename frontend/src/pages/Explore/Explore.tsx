import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

// COMPONENTS
import Blog from "../../components/Blog";
import NavbarHome from "../../components/Navbar/NavbarHome";
import Sidebar from "./Sidebar";
import { setNotify } from "../../slices/NotifySlice";

// SLICES
import { setUserData } from "../../slices/UserSlice";
import { setFollowers } from "../../slices/FollowersSlice";

const Explore = () => {
  const dispatch = useDispatch();
  const username = localStorage.getItem("username") as string;
  const password = localStorage.getItem("password") as string;

  useEffect(() => {
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
        if (error.message)
          dispatch(
            setNotify({
              isActive: true,
              type: "error",
              message: `${error.message}`,
            })
          );
        else if (error.response.message)
          dispatch(
            setNotify({
              isActive: true,
              type: "error",
              message: `${error.response.message}`,
            })
          );
        else console.log(error);
      }
    };
    getUserData();

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
        if (error.message)
          dispatch(
            setNotify({
              isActive: true,
              type: "error",
              message: `${error.message}`,
            })
          );
        else if (error.response.message)
          dispatch(
            setNotify({
              isActive: true,
              type: "error",
              message: `${error.response.message}`,
            })
          );
        else console.log(error);
      }
    };
    getFollowers();
  }, []);

  return (
    <>
      <div className="flex h-screen w-screen flex-col">
        <NavbarHome />
        <div className="flex h-[calc(100vh-80px)] w-screen items-center gap-10 overflow-y-scroll">
          <Sidebar />
          <div className="mt-10 flex h-[calc(100vh-80px)] flex-col items-center gap-20 overflow-y-scroll md:w-[75%]">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
