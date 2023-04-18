import ReactMarkdown from "react-markdown";

// COMPONENTS
import { BsGlobeAmericas } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { blogData } from "./MiniBlog";

const Blog = ({ data }: blogData) => {
  return (
    <>
      <div className="h-auto w-[90%] rounded-lg bg-blue-100 p-5 shadow md:w-[80%] lg:w-[70%] xl:w-[60%]">
        <div className="max-w-fit rounded-[15px] bg-blue-300 p-3 text-3xl md:p-5">
          {data.title}
        </div>
        <div className="relative flex justify-center">
          <div
            style={{ backgroundImage: `url('${data.image}')` }}
            className="mt-3 h-[40vh] w-[100%] rounded-md bg-contain bg-center bg-no-repeat transition-all duration-500 ease-in-out hover:w-[100%] md:w-[85%] md:bg-cover"
          />
          <span className="absolute -bottom-12 right-0 flex w-full items-center justify-end gap-2 border-b border-black pb-1 text-base">
            {data.date_created.split(" ")[0]}
            {data.blog_status === "Public" ? (
              <BsGlobeAmericas className="text-xl text-green-500" />
            ) : (
              <AiFillLock className="text-xl text-amber-400" />
            )}
          </span>
        </div>
        <div className="mt-16 prose prose-stone h-[80vh] w-[100%] overflow-y-scroll">
          <ReactMarkdown>{data.content}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default Blog;
