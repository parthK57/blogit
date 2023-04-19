import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { motion } from "framer-motion";

// COMPONENTS
import NavbarHome from "../../components/Navbar/NavbarHome";
import Sidebar from "./Sidebar";
import Notify from "../../components/Notify";
import MiniBlog from "../../components/MiniBlog";

// SLICES
import { setFollowers } from "../../slices/FollowersSlice";
import { setUserData } from "../../slices/UserSlice";
import { setNotify } from "../../slices/NotifySlice";
import { setBlogs } from "../../slices/BlogsSlice";

// TYPES
import { blog, blogsArray } from "../../slices/BlogsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const username = localStorage.getItem("username") as string;
  const password = localStorage.getItem("password") as string;
  const notifyState: boolean = useSelector(
    (state: any) => state.notify.value.isActive
  );
  const blogsArray: blogsArray = useSelector((state: any) => state.blogs.value);

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

    const getUserBlogs = async () => {
      try {
        const response = await axios({
          method: "get",
          url: "http://localhost:4000/blogs",
          headers: {
            username: localStorage.getItem("username"),
            password: localStorage.getItem("password"),
          },
        });
        if (response.status === 200) dispatch(setBlogs(response.data));
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
    getUserBlogs();

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
        <div className="flex h-[calc(100vh-80px)] w-screen flex-col items-center gap-10 overflow-y-scroll md:flex-row">
          <Sidebar />
          <div className="mt-10 flex h-full w-full flex-col items-center gap-20 overflow-y-scroll md:w-[75%]">
            <div className="flex h-[100%] w-[100%] flex-col gap-4 p-5">
              <motion.h2
                initial={{ y: -100 }}
                animate={{ y: 0, transition: { duration: 0.5 } }}
                className="relative w-fit rounded-md bg-sky-100 px-4 py-2 text-2xl"
              >
                My Blogs
              </motion.h2>
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                className="relative grid h-[90%] w-full grid-cols-1 gap-4 overflow-y-scroll px-5 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
              >
                {blogsArray.map((blog: blog, index: number) => {
                  return (
                    <div
                      key={index}
                      className="h-[25vh] overflow-y-scroll rounded-lg transition-all duration-300 hover:scale-110"
                    >
                      <MiniBlog data={blog} />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
        {notifyState && <Notify />}
      </div>
    </>
  );
};

export default Home;
