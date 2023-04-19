import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import ReactMarkdown from "react-markdown";

// COMPONENTS
import { BsGlobeAmericas, BsThreeDotsVertical } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { blogData } from "./MiniBlog";

// SLICES
import { setNotify } from "../slices/NotifySlice";

const Blog = ({ data }: blogData) => {
  const [dropDown, setDropDown] = useState(false);
  const dispatch = useDispatch();
  const [showFullName, setShowFullName] = useState("hidden");
  const follow = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:4000/follow",
        headers: {
          username: localStorage.getItem("username"),
          password: localStorage.getItem("password"),
        },
        data: {
          followusername: data.user_name,
        },
      });
      if (response.status === 200) {
        dispatch(
          setNotify({ isActive: true, type: "success", message: "Success!" })
        );
      }
    } catch (error: any) {
      console.log(error);
      if (error.response.data)
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
    <>
      <div className="relative flex flex-col items-center mb-5 h-auto w-[90%] rounded-lg bg-blue-100 p-5 shadow md:w-[80%] lg:w-[70%] xl:w-[60%]">
        <div className="w-full">
        <div className="max-w-fit rounded-[15px] bg-blue-300 p-3 text-3xl md:p-5">
          {data.title}
        </div>
        </div>
        <span
          onClick={() => setDropDown(!dropDown)}
          className="absolute top-0 right-0 mr-3 mt-4 cursor-pointer text-xl"
        >
          <BsThreeDotsVertical />
        </span>
        {dropDown && (
          <>
            <button
              onClick={(e) => {
                setDropDown(!dropDown);
                follow(e);
              }}
              className="absolute top-12 right-4 flex h-[35px] w-fit cursor-pointer items-center gap-2 rounded-md bg-blue-500 px-3 text-white shadow transition-all ease-in hover:bg-green-500"
            >
              Follow
            </button>
          </>
        )}
        <div className="relative w-full flex justify-center">
          <div
            style={{ backgroundImage: `url('${data.image}')` }}
            className="mt-3 h-[40vh] w-full rounded-md bg-contain bg-center bg-no-repeat transition-all duration-500 ease-in-out hover:w-[100%] md:w-[85%] md:bg-cover"
          />
          <span
            className={`${showFullName} absolute -bottom-7 left-40 rounded-t-xl rounded-br-xl bg-[#191919] px-3 py-3 text-white`}
          >
            {data.full_name}
          </span>
          <div className="absolute -bottom-12 right-0 flex w-full items-center justify-between gap-1 border-b border-black pb-1 text-base">
            <span className="flex items-center gap-1 text-lg">
              <p className="text-base">Post by:</p>
              <p
                onMouseOver={() => setShowFullName("block")}
                onMouseLeave={() => setShowFullName("hidden")}
                className="cursor-help font-semibold text-blue-900"
              >
                {data.user_name}
              </p>
            </span>
            <div className="flex items-center gap-2">
              <p>{data.date_created.split(" ")[0]}</p>
              {data.blog_status === "Public" ? (
                <BsGlobeAmericas className="text-xl text-green-500" />
              ) : (
                <AiFillLock className="text-xl text-amber-400" />
              )}
            </div>
          </div>
        </div>
        <div className="prose prose-neutral mt-16 mb-1 h-[80vh] w-[100%] overflow-y-scroll">
          <ReactMarkdown className="bg-white px-3 py-2 rounded-md">{data.content}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default Blog;
