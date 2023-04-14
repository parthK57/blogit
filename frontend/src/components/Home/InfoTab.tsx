import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// TYPES
import { userObject } from "../../slices/UserSlice";

// COMPONENTS
import {
  AiFillEdit,
  AiFillFacebook,
  AiFillGithub,
  AiFillGitlab,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";

// SLICES
import { setUserEditModalIsActiveState } from "../../slices/ModalSlice";

const InfoTab = () => {
  const [dropDown, setDropDown] = useState(false);
  const dispatch = useDispatch();
  const userData: userObject = useSelector((state: any) => state.user.value[0]);
  
  return (
    <>
      <div className="flex w-[100%] items-center justify-center">
        <div
          className={`relative -top-7 h-[70px] w-[70px] rounded-full bg-[url('/Profilepicture.png')] bg-contain bg-no-repeat p-2 pb-0 md:h-[60px] md:w-[60px]`}
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
          <div
            onClick={() => {
              dispatch(setUserEditModalIsActiveState(true));
              setDropDown(!dropDown);
            }}
            className="absolute top-10 flex h-[45px] w-[90%] cursor-pointer items-center gap-2 rounded-md bg-white px-4 shadow-md hover:text-blue-700"
          >
            <AiFillEdit className="text-amber-400" />
            Edit
          </div>
        </>
      )}
      <span className="-mt-12 border-b border-black py-2 text-xl">
        Details:-
      </span>
      <div className="flex h-[200px] flex-col gap-3 overflow-y-scroll rounded-md py-3 px-2">
        <div className="flex w-[100%] items-center gap-4 rounded bg-blue-100 px-2 py-1 shadow-sm shadow-blue-400 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-blue-300">
          <span>Name:</span>
          <span className="hover:text-blue-700">{userData?.full_name}</span>
        </div>
        <div className="flex w-[100%] items-center gap-2 rounded bg-blue-100 px-2 py-1 shadow-sm shadow-blue-400 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-blue-300">
          <span>Title:</span>
          <span className="hover:text-blue-700">
            {userData?.title !== null ? userData?.title : "No Data"}
          </span>
        </div>
        <div className="flex w-[100%] items-center gap-2 rounded bg-blue-100 px-2 py-1 shadow-sm shadow-blue-400 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-blue-300">
          <span>Age:</span>
          <span className="hover:text-blue-700">
            {userData?.age !== null ? userData?.age : "No Data"}
          </span>
        </div>
        <div className="flex w-[100%] items-center gap-2 rounded bg-blue-100 px-2 py-1 shadow-sm shadow-blue-400 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-blue-300">
          <span>
            <HiBuildingOffice2 className="text-amber-700" />
          </span>
          <span className="hover:text-blue-700">
            {userData?.education !== null ? userData?.education : "No Data"}
          </span>
        </div>
        <div className="flex w-[100%] items-center gap-2 rounded bg-blue-100 px-2 py-1 shadow-sm shadow-blue-400 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-blue-300">
          <span>
            <HiLocationMarker className="text-red-500" />
          </span>
          <span className="hover:text-blue-700">
            {userData?.location !== null ? userData?.location : "No Data"}
          </span>
        </div>
        {userData?.github && (
          <div className="flex w-[100%] items-center gap-2 rounded bg-blue-100 px-2 py-1 shadow-sm shadow-blue-400 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-blue-300">
            <span>
              <AiFillGithub className="text-lg text-gray-600" />
            </span>
            <span className="hover:text-blue-700">{userData?.github}</span>
          </div>
        )}
        {userData?.gitlab && (
          <div className="flex w-[100%] items-center gap-2 rounded bg-blue-100 px-2 py-1 shadow-sm shadow-blue-400 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-blue-300">
            <span>
              <AiFillGitlab className="text-lg text-[#fca326]" />
            </span>
            <span className="hover:text-blue-700">{userData?.gitlab}</span>
          </div>
        )}
        {userData?.linkedin && (
          <div className="flex w-[100%] items-center gap-2 rounded bg-blue-100 px-2 py-1 shadow-sm shadow-blue-400 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-blue-300">
            <span>
              <AiFillLinkedin className="text-lg text-[#0077b5]" />
            </span>
            <span className="hover:text-blue-700">{userData?.linkedin}</span>
          </div>
        )}
        {userData?.facebook && (
          <div className="flex w-[100%] items-center gap-2 rounded bg-blue-100 px-2 py-1 shadow-sm shadow-blue-400 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-blue-300">
            <span>
              <AiFillFacebook className="text-lg text-[#4267B2]" />
            </span>
            <span className="hover:text-blue-700">{userData?.facebook}</span>
          </div>
        )}
        {userData?.instagram && (
          <div className="flex w-[100%] items-center gap-2 rounded bg-blue-100 px-2 py-1 shadow-sm shadow-blue-400 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-blue-300">
            <span>
              <AiFillInstagram className="text-lg text-[#da4391]" />
            </span>
            <span className="hover:text-blue-700">{userData?.instagram}</span>
          </div>
        )}
        {userData?.twitter && (
          <div className="flex w-[100%] items-center gap-2 rounded bg-blue-100 px-2 py-1 shadow-sm shadow-blue-400 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-blue-300">
            <span>
              <AiFillTwitterSquare className="text-lg text-[#1DA1F2]" />
            </span>
            <span className="hover:text-blue-700">{userData?.twitter}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default InfoTab;
