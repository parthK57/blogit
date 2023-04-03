import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import InfoContainer from "../../components/Explore/InfoContainer";

const Sidebar = () => {

  return (
    <div className="w hidden flex-col items-center justify-center bg-sky-50 md:flex md:h-[calc(100vh-80px)] md:w-[20%]">
      <div className="relative flex flex-col px-3">
        <InfoContainer />
      </div>
    </div>
  );
};

export default Sidebar;
