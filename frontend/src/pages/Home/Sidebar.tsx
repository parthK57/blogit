import { AiFillGithub } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="w hidden flex-col items-center bg-sky-50 md:flex md:h-[calc(100vh-80px)] md:w-[20%]">
      <div className="flex w-[100%] flex-col items-center px-3">
        <div className="relative mt-20 flex w-[90%] flex-col rounded-[15px] bg-sky-100 px-4 text-[12px] lg:text-base">
          <div className="flex w-[100%] items-center justify-center">
            <div className="relative bottom-6 h-[55px] w-[55px] rounded-full bg-[url('/home/parth/Projects/Blogs/frontend/src/assets/Profilepicture.png')] bg-contain bg-no-repeat p-2 pb-0" />
          </div>
          <div className="absolute top-0 right-0 p-3">
            <BsThreeDotsVertical className="pointer-events-auto cursor-pointer text-lg" />
          </div>
          <div className="flex w-[100%] gap-4 px-2 pb-1 transition-all duration-200 ease-in-out hover:scale-105">
            <span>Name:</span>
            <span className="hover:text-lime-700">Parth Kolgiri</span>
          </div>
          <div className="flex w-[100%] gap-2 px-2 py-1 transition-all duration-200 ease-in-out hover:scale-105">
            <span>Title:</span>
            <span className="hover:text-lime-700">Full Stack Dev</span>
          </div>
          <div className="flex w-[100%] gap-2 px-2 py-1 transition-all duration-200 ease-in-out hover:scale-105">
            <span>Age:</span>
            <span className="hover:text-lime-700">22</span>
          </div>
          <div className="flex w-[100%] items-center gap-2 px-2 py-1 transition-all duration-200 ease-in-out hover:scale-105">
            <span>
              <HiBuildingOffice2 />
            </span>
            <span className="hover:text-lime-700">Engineering</span>
          </div>
          <div className="flex w-[100%] items-center gap-2 px-2 py-1 transition-all duration-200 ease-in-out hover:scale-105">
            <span>
              <HiLocationMarker />
            </span>
            <span className="hover:text-lime-700">Solapur, India</span>
          </div>
          <div className="flex w-[100%] items-center gap-2 px-2 py-1 transition-all duration-200 ease-in-out hover:scale-105">
            <span>
              <AiFillGithub className="text-lg" />
            </span>
            <span className="hover:text-lime-700">pathK57</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
