import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

// COMPONENTS
import Blog from "../../components/Blog";
import NavbarHome from "../../components/Navbar/NavbarHome";
import Sidebar from "./Sidebar";
import Notify from "../../components/Notify";

// SLICES
import { setUserData } from "../../slices/UserSlice";
import { setFollowers } from "../../slices/FollowersSlice";
import { setNotify } from "../../slices/NotifySlice";

// TYPES
import { blog, blogsArray, setBlogs } from "../../slices/BlogsSlice";

const Explore = () => {
  const dispatch = useDispatch();
  const username = localStorage.getItem("username") as string;
  const password = localStorage.getItem("password") as string;
  const blogsArray: blogsArray = useSelector((state: any) => state.blogs.value);
  const notifyState: boolean = useSelector(
    (state: any) => state.notify.value.isActive
  );
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
          url: "http://localhost:4000/blogs/public/getrandom",
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
        <div className="flex h-[calc(100vh-80px)] w-screen items-center gap-10 overflow-y-scroll">
          <Sidebar />
          <div className="mt-10 flex h-[calc(100vh-80px)] flex-col items-center gap-16 overflow-y-scroll md:w-[75%]">
            {blogsArray.map((blog: blog) => {
              return <Blog key={blog.id} data={blog} />;
            })}
          </div>
        </div>
        {notifyState && <Notify />}
      </div>
    </>
  );
};

export default Explore;
