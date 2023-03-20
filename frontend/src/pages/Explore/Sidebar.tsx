import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Sidebar = () => {
  const [tag, setTag] = useState("");

  return (
    <div className="w hidden flex-col items-center justify-center bg-sky-50 md:flex md:h-[calc(100vh-80px)] md:w-[20%]">
      <div className="relative flex flex-col px-3">
        <label>Tags:</label>
        <div className="flex items-center justify-center gap-2">
          <input
            type="text"
            onChange={(e) => setTag(e.target.value)}
            className="mt-2 w-[85%] rounded-md px-2 py-1 outline-none"
          />
          <div className="mt-2 rounded-full bg-white p-1">
            <AiOutlineSearch className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
