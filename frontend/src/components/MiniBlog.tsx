import { BsGlobeAmericas } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";

// TYPES
import { blog } from "../slices/BlogsSlice";

type blogData = { data: blog };

const MiniBlog = ({ data }: blogData) => {
  return (
    <>
      <div className="h-auto w-full rounded-lg bg-sky-50 p-5">
        <div className="max-w-fit rounded-[15px] bg-sky-100 p-3 text-3xl md:p-5">
          {data.title}
        </div>
        <div className="flex justify-center">
          <div
            className={`mt-3 h-[40vh] w-[100%] rounded-md bg-[url('${data.image}')] bg-contain bg-center bg-no-repeat transition-all duration-500 ease-in-out hover:w-[100%] md:w-[85%] md:bg-cover`}
          />
        </div>
        <div className="mt-3 flex h-[80vh] w-[100%] flex-col overflow-y-scroll">
          <div className="flex items-end justify-between border-b border-black p-3 font-Sono text-4xl">
            <h1 className="p-3 font-Sono text-4xl tracking-tighter">
              {data.content.heading}
            </h1>
            <p className="flex items-center gap-2 p-3 text-base">
              {data.dateCreated}
              {data.blogsStatus === "Public" ? (
                <BsGlobeAmericas className="text-green-500" />
              ) : (
                <AiFillLock className="text-amber-400" />
              )}
            </p>
          </div>
          <h3 className="mt-2 p-1 font-Sono text-xl text-slate-600">
            {data.content.subheading}
          </h3>
          {data.content.body}
        </div>
      </div>
    </>
  );
};

export default MiniBlog;
