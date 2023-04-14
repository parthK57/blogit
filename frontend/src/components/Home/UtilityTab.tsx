// COMPONENTS
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoCreate } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

const UtilityTab = () => {
  return (
    <>
      <div className="flex w-[90%] flex-col gap-2 rounded-[15px] bg-blue-200 px-4 py-2">
        <span className="border-b border-black pb-2 pt-1 text-lg">
          Utility:-
        </span>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <IoCreate className="text-xl text-white" />
            <button className="w-[80px] scale-90 rounded-md bg-blue-500 px-2 py-1 text-white transition-all duration-300 hover:bg-yellow-400">
              Create
            </button>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineUserAdd className="text-xl text-white" />
            <button className="w-[80px] scale-90 rounded-md bg-sky-500 px-2 py-1 text-white transition-all duration-300 hover:bg-green-400">
              Follow
            </button>
          </div>
          <div className="flex items-center gap-2">
            <MdLogout className="text-xl text-white" />
            <button className="w-[80px] scale-90 rounded-md bg-white px-2 py-1 transition-all duration-300 hover:bg-red-500 hover:text-white">
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UtilityTab;
