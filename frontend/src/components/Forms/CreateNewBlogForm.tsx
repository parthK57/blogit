import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import ReactMarkdown from "react-markdown";

// SLICES
import { setCreateNewBlogModalState } from "../../slices/ModalSlice";
import { setNotify } from "../../slices/NotifySlice";
import { setBlogs } from "../../slices/BlogsSlice";

const CreateNewBlogForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("New Blog");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("Preview Window");
  const [blogStatus, setBlogStatus] = useState("");
  const [image, setImage] = useState(null);

  const createNewBlog = async (e: any) => {
    e.preventDefault();
    try {
      if (title.length === 0 || title === "New Blog")
        throw new Error("Title feild is required!");
      if (tags.length === 0) throw new Error("Tags feild is required!");
      if (content.length < 20)
        throw new Error(
          "The length of content should be greater than 20 characters!"
        );
      if (image === null) throw new Error("Please provide an image!");
      // REQUESTING USERS TO HAVE PATIENCE
      dispatch(
        setNotify({
          isActive: true,
          type: "alert",
          message: "Please be patient, the file is being uploaded!",
        })
      );
      // CLOSING THE MODAL & FORM
      dispatch(setCreateNewBlogModalState(false));

      const formData = new FormData();
      formData.append("title", title);
      formData.append("tags", tags);
      formData.append("blogstatus", blogStatus);
      formData.append("content", content);
      formData.append("image", image);

      const response = await axios.post(
        "http://localhost:4000/blogs/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            username: localStorage.getItem("username"),
            password: localStorage.getItem("password"),
          },
        }
      );
      if (response.status === 201) {
        dispatch(
          setNotify({
            isActive: true,
            type: "success",
            message: "Blog Posted!",
          })
        );
        // ------ //
        // *UPDATING BLOGS ARRAY OF REDUX
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
        // ------ //
      }
    } catch (error: any) {
      if (error?.response?.data)
        dispatch(
          setNotify({
            isActive: true,
            type: "error",
            message: `${error.response.data}`,
          })
        );
      else if (error.message) {
        console.log(error);
        dispatch(
          setNotify({
            isActive: true,
            type: "error",
            message: `${error.message}`,
          })
        );
      }
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
                  defaultValue="Public"
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
                  onChange={(e: any) => setImage(e.target.files[0])}
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
