import ReactMarkdown from "react-markdown";

// COMPONENTS
import { BsGlobeAmericas } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";

// TYPES
import { blog } from "../slices/BlogsSlice";

export type blogData = { data: blog };

const MiniBlog = ({ data }: blogData) => {
  return (
    <>
      <div className="h-auto w-full rounded-lg bg-sky-50 p-5">
        <div className="max-w-fit overflow-x-scroll rounded-[15px] bg-sky-100 p-3 text-3xl md:p-5">
          {data.title}
        </div>
        <div className="relative flex justify-center">
          <div
            style={{ backgroundImage: `url('${data.image}')` }}
            className={`mt-3 mb-2 h-[25vh] w-[100%] rounded-md bg-contain bg-center bg-no-repeat object-contain transition-all duration-500 ease-in-out hover:w-[100%] md:w-[85%] md:bg-cover`}
          />
          <span className="absolute -bottom-8 right-0 flex w-full items-center justify-end gap-2 border-b border-black pb-1 text-base">
            {data.date_created.split(" ")[0]}
            {data.blog_status === "Public" ? (
              <BsGlobeAmericas className="text-xl text-green-500" />
            ) : (
              <AiFillLock className="text-xl text-amber-400" />
            )}
          </span>
        </div>
        <div className="mt-10 flex h-[80vh] w-[100%] flex-col overflow-y-scroll">
          {/* @ts-expect-error */}
          <ReactMarkdown className="prose prose-stone">
            {data.content}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default MiniBlog;
