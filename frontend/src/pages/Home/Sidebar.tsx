import {
  AiFillFacebook,
  AiFillGithub,
  AiFillGitlab,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";
import { userObject } from "../../slices/UserSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

const Sidebar = () => {
  const userData: userObject = useSelector((state: any) => state.user.value[0]);
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="w hidden flex-col items-center bg-sky-50 md:flex md:h-[calc(100vh-80px)] md:w-[20%]">
      <div className="flex w-[100%] flex-col items-center px-3">
        <div className="relative mt-20 flex w-[90%] flex-col rounded-[15px] bg-sky-100 px-4 text-[12px] lg:text-base">
          <div className="flex w-[100%] items-center justify-center">
            <div
              className={`relative bottom-6 h-[55px] w-[55px] rounded-full bg-[url(${userData?.profile_picture})] bg-contain bg-no-repeat p-2 pb-0`}
            />
          </div>
          <div className="absolute top-0 right-0 p-3">
            <BsThreeDotsVertical
              onClick={() => setDropDown(!dropDown)}
              className="pointer-events-auto cursor-pointer text-lg"
            />
          </div>
          {dropDown && (
            <>
              <div className="absolute top-10 flex h-[45px] w-[90%] cursor-pointer items-center rounded-md bg-white px-4 shadow-md hover:text-blue-700">
                Edit
              </div>
            </>
          )}
          <div className="flex w-[100%] gap-4 px-2 pb-1 transition-all duration-200 ease-in-out hover:scale-105">
            <span>Name:</span>
            <span className="hover:text-blue-700">{userData?.full_name}</span>
          </div>
          <div className="flex w-[100%] gap-2 px-2 py-1 transition-all duration-200 ease-in-out hover:scale-105">
            <span>Title:</span>
            <span className="hover:text-blue-700">
              {userData?.title !== null ? userData?.title : "No Data"}
            </span>
          </div>
          <div className="flex w-[100%] gap-2 px-2 py-1 transition-all duration-200 ease-in-out hover:scale-105">
            <span>Age:</span>
            <span className="hover:text-blue-700">
              {userData?.age !== null ? userData?.age : "No Data"}
            </span>
          </div>
          <div className="flex w-[100%] items-center gap-2 px-2 py-1 transition-all duration-200 ease-in-out hover:scale-105">
            <span>
              <HiBuildingOffice2 className="text-amber-700" />
            </span>
            <span className="hover:text-blue-700">
              {userData?.education !== null ? userData?.education : "No Data"}
            </span>
          </div>
          <div className="flex w-[100%] items-center gap-2 px-2 py-1 transition-all duration-200 ease-in-out hover:scale-105">
            <span>
              <HiLocationMarker className="text-red-500" />
            </span>
            <span className="hover:text-blue-700">
              {userData?.location !== null ? userData?.location : "No Data"}
            </span>
          </div>
          <div className="flex w-[100%] items-center gap-2 px-2 py-1 transition-all duration-200 ease-in-out hover:scale-105">
            <span>
              <AiFillGithub className="text-lg text-gray-600" />
            </span>
            <span className="hover:text-blue-700">
              {userData?.github !== null ? userData?.github : "No Data"}
            </span>
          </div>
          <div className="flex w-[100%] items-center gap-2 px-2 py-1 transition-all duration-200 ease-in-out hover:scale-105">
            <span>
              <AiFillGitlab className="text-lg text-[#fca326]" />
            </span>
            <span className="hover:text-blue-700">
              {userData?.gitlab !== null ? userData?.gitlab : "No Data"}
            </span>
          </div>
          <div className="flex w-[100%] items-center gap-2 px-2 py-1 transition-all duration-200 ease-in-out hover:scale-105">
            <span>
              <AiFillFacebook className="text-lg text-[#4267B2]" />
            </span>
            <span className="hover:text-blue-700">
              {userData?.facebook !== null ? userData?.facebook : "No Data"}
            </span>
          </div>
          <div className="flex w-[100%] items-center gap-2 px-2 py-1 transition-all duration-200 ease-in-out hover:scale-105">
            <span>
              <AiFillInstagram className="text-lg text-[#da4391]" />
            </span>
            <span className="hover:text-blue-700">
              {userData?.instagram !== null ? userData?.instagram : "No Data"}
            </span>
          </div>
          <div className="flex w-[100%] items-center gap-2 px-2 py-1 transition-all duration-200 ease-in-out hover:scale-105">
            <span>
              <AiFillTwitterSquare className="text-lg text-[#1DA1F2]" />
            </span>
            <span className="hover:text-blue-700">
              {userData?.twitter !== null ? userData?.twitter : "No Data"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
