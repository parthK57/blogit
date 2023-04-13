import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

// COMPONENTS
import NavbarHome from "../../components/Navbar/NavbarHome";
import Sidebar from "./Sidebar";

// SLICES
import { setFollowers } from "../../slices/FollowersSlice";
import { setUserData } from "../../slices/UserSlice";
import Notify from "../../components/Notify";

const Home = () => {
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
        alert(error.message);
        console.log(error);
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
        alert("Something went wrong!");
        console.log(error);
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
            <div className="flex h-[100%] w-[100%] flex-col gap-8 p-5">
              Item
            </div>
          </div>
        </div>{
          true && <Notify type="alert" message="You can't fuck with that!" />
        }
      </div>
    </>
  );
};

export default Home;
