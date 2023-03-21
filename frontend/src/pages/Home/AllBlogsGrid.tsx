import { motion } from "framer-motion";
import MiniBlog from "../../components/MiniBlog";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";

const AllBlogsGrid = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, type: "spring" }}
        className="grid w-[100%] h-[65vh] overflow-y-scroll grid-flow-row gap-8 rounded-lg bg-sky-50 p-5 md:grid-cols-2 lg:grid-cols-3"
      >
        <div className="relative flex h-80 justify-center overflow-y-scroll rounded-xl border border-indigo-200 p-3 transition-all duration-300 ease-in-out hover:scale-105 hover:border-indigo-300 md:w-60 lg:w-64 xl:w-80">
          <MiniBlog />
          <BsThreeDotsVertical className="pointer-events-auto absolute right-0 mr-2 cursor-pointer text-xl" />
        </div>
        <div className="relative flex h-80 justify-center overflow-y-scroll rounded-xl border border-indigo-200 p-3 transition-all duration-300 ease-in-out hover:scale-105 hover:border-indigo-300 md:w-60 lg:w-64 xl:w-80">
          <MiniBlog />
          <BsThreeDotsVertical className="pointer-events-auto absolute right-0 mr-2 cursor-pointer text-xl" />
        </div>
        <div className="relative flex h-80 justify-center overflow-y-scroll rounded-xl border border-indigo-200 p-3 transition-all duration-300 ease-in-out hover:scale-105 hover:border-indigo-300 md:w-60 lg:w-64 xl:w-80">
          <MiniBlog />
          <BsThreeDotsVertical className="pointer-events-auto absolute right-0 mr-2 cursor-pointer text-xl" />
        </div>
        <div className="relative flex h-80 justify-center overflow-y-scroll rounded-xl border border-indigo-200 p-3 transition-all duration-300 ease-in-out hover:scale-105 hover:border-indigo-300 md:w-60 lg:w-64 xl:w-80">
          <MiniBlog />
          <BsThreeDotsVertical className="pointer-events-auto absolute right-0 mr-2 cursor-pointer text-xl" />
        </div>
      </motion.div>
    </>
  );
};

export default AllBlogsGrid;
