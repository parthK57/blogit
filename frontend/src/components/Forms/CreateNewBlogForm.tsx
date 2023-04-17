import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCreateNewBlogModalState } from "../../slices/ModalSlice";
import { setNotify } from "../../slices/NotifySlice";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const CreateNewBlogForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("New Blog");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("Preview Window");
  const [blogStatus, setBlogStatus] = useState("");
  const [image, setImage] = useState();

  const createNewBlog = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:4000/blogs/create",
        headers: {
          "Content-Type": "multipart/form-data",
          username: localStorage.getItem("username"),
          password: localStorage.getItem("password"),
        },
        data: {
          title,
          tags,
          content,
          blogstatus: blogStatus,
        },
      });
    } catch (error: any) {
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
            message: `${error.response.data}`,
          })
        );
      else console.log(error);
    }
  };

  return (
    <>
      <div className="flex h-[95%] w-[100%] items-center justify-center">
        <form className="flex h-full w-[100%] scale-95 flex-col gap-1 overflow-y-scroll rounded-[20px] bg-blue-100 p-5 py-10 px-10 md:w-[75%] lg:w-[85%] xl:w-[70%]">
          <h2 className="mb-4 w-fit rounded-md bg-blue-800 px-4 py-3 font-Sono text-2xl text-white">
            {title}
          </h2>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="flex h-full w-full flex-col gap-1">
              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold">Title:-</label>
                <input
                  type="text"
                  onChange={(e: any) => setTitle(e.target.value)}
                  className="rounded-md px-2 py-1 outline-none xl:w-[90%]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold">Tags:-</label>
                <input
                  type="text"
                  onChange={(e: any) => setTags(e.target.value)}
                  placeholder="F1, Sports, Cars"
                  className="rounded-md px-2 py-1 outline-none xl:w-[90%]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold">Category:-</label>
                <select
                  onChange={(e: any) => setBlogStatus(e.target.value)}
                  className="rounded-md bg-white px-2 py-1 outline-none xl:w-[90%]"
                >
                  <option value="Public">Public</option>
                  <option value="Private">Private</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold">Image:-</label>
                <input
                  type="file"
                  onChange={(e: any) => setImage(e.target.value)}
                  className="rounded-md px-2 py-1 outline-none xl:w-[90%]"
                />
              </div>
            </div>
            {/* Markdown Preview */}
            <div className="h-[100%] w-full overflow-x-scroll overflow-y-scroll rounded-md bg-white py-2 px-3">
              <ReactMarkdown className="prose prose-stone h-[300px] w-full overflow-x-scroll overflow-y-scroll">
                {content}
              </ReactMarkdown>
            </div>
          </div>
          <div className="mt-6 flex w-full flex-col gap-1">
            <label className="text-lg font-semibold">Content:-</label>
            <textarea
              onChange={(e: any) => setContent(e.target.value)}
              placeholder="Please use Markdown!"
              className="h-[75vh] w-full rounded-md bg-white px-2 py-1 font-Sono text-lg outline-none"
            ></textarea>
          </div>
          <div className="mt-1 flex w-[100%] items-center gap-7 text-center text-lg">
            <button
              onClick={createNewBlog}
              className="mt-2 min-w-[75px] rounded-lg bg-blue-700 py-1 px-3 text-white transition-all duration-300 ease-in-out md:hover:bg-green-500"
            >
              Create
            </button>
            <button
              onClick={() => dispatch(setCreateNewBlogModalState(false))}
              className="mt-2 cursor-pointer rounded-lg bg-gray-50 py-1 px-3 transition-all duration-150 ease-in md:hover:bg-white"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateNewBlogForm;