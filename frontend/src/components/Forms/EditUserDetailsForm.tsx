import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

// SLICE
import { setUserData, userObject } from "../../slices/UserSlice";
import { setUserEditModalIsActiveState } from "../../slices/ModalSlice";
import { setNotify } from "../../slices/NotifySlice";

const EditUserDetailsForm = () => {
  const dispatch = useDispatch();
  const userData: userObject = useSelector((state: any) => state.user.value[0]);
  const [fullname, setFullName] = useState(userData.full_name);
  const [username, setUsername] = useState(userData.user_name);
  const [title, setTitle] = useState(userData.title);
  const [profilePicture, setProfilePicture] = useState(
    userData.profile_picture
  );
  const [age, setAge] = useState(userData.age);
  const [education, setEducation] = useState(userData.education);
  const [location, setLocation] = useState(userData.location);
  const [github, setGithub] = useState(userData.github);
  const [gitlab, setGitlab] = useState(userData.gitlab);
  const [linkedIn, setLinkedIn] = useState(userData.linkedin);
  const [facebook, setFacebook] = useState(userData.facebook);
  const [instagram, setInstagram] = useState(userData.instagram);
  const [twitter, setTwitter] = useState(userData.twitter);

  const updateUserDetails = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: "patch",
        url: "http://localhost:4000/user/update",
        headers: {
          username: localStorage.getItem("username"),
          password: localStorage.getItem("password"),
        },
        data: {
          fullname,
          username,
          title,
          profilePicture,
          age,
          education,
          location,
          github,
          gitlab,
          linkedIn,
          facebook,
          instagram,
          twitter,
        },
      });
      if (response.status === 200) {
        dispatch(
          setNotify({ isActive: true, type: "success", message: "Success!" })
        );
        dispatch(setUserEditModalIsActiveState(false));
        dispatch(setUserData(response.data));
      }
    } catch (error: any) {
      if (error.response.data)
        dispatch(
          setNotify({
            isActive: true,
            type: "error",
            message: "Something went wrong!",
          })
        );
    }
  };

  return (
    <>
      <div className="flex w-[100%] items-center justify-center">
        <form className="flex w-[100%] scale-95 flex-col gap-1 overflow-hidden rounded-[20px] bg-blue-100 p-5 md:w-[50%] xl:w-[45%]">
          <div className="mt-3 flex w-[200px] items-center justify-center rounded-[25px] bg-blue-200 py-5 text-2xl text-black">
            Edit Details
          </div>
          <div className="mt-5 grid h-[50vh] grid-cols-1 gap-4 overflow-y-scroll px-5 lg:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label className="">Full Name:</label>
              <input
                type="text"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                className="rounded-md px-2 py-1 outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="">User Name:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="rounded-md px-2 py-1 outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="">Tile:</label>
              <input
                type="text"
                value={title !== null ? title : "No Data"}
                onChange={(e) => setTitle(e.target.value)}
                className="rounded-md px-2 py-1 outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="">Profile Picture:</label>
              <input
                type="text"
                value={profilePicture !== null ? profilePicture : "No Data"}
                onChange={(e) => setProfilePicture(e.target.value)}
                className="rounded-md px-2 py-1 outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="">Age:</label>
              <input
                type="text"
                value={age !== null ? age : "No Data"}
                onChange={(e) => setAge(e.target.value)}
                className="rounded-md px-2 py-1 outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="">Education:</label>
              <input
                type="text"
                value={education !== null ? education : "No Data"}
                onChange={(e) => setEducation(e.target.value)}
                className="rounded-md px-2 py-1 outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="">Location:</label>
              <input
                type="text"
                value={location !== null ? location : "No Data"}
                onChange={(e) => setLocation(e.target.value)}
                className="rounded-md px-2 py-1 outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="">GitHub:</label>
              <input
                type="text"
                value={github !== null ? github : "No Data"}
                onChange={(e) => setGithub(e.target.value)}
                className="rounded-md px-2 py-1 outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="">GitLab:</label>
              <input
                type="text"
                value={gitlab !== null ? gitlab : "No Data"}
                onChange={(e) => setGitlab(e.target.value)}
                className="rounded-md px-2 py-1 outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="">LinkedIn:</label>
              <input
                type="text"
                value={linkedIn !== null ? linkedIn : "No Data"}
                onChange={(e) => setLinkedIn(e.target.value)}
                className="rounded-md px-2 py-1 outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="">Facebook:</label>
              <input
                type="text"
                value={facebook !== null ? facebook : "No Data"}
                onChange={(e) => setFacebook(e.target.value)}
                className="rounded-md px-2 py-1 outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="">Instagram:</label>
              <input
                type="text"
                value={instagram !== null ? instagram : "No Data"}
                onChange={(e) => setInstagram(e.target.value)}
                className="rounded-md px-2 py-1 outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="">Twitter:</label>
              <input
                type="text"
                value={twitter !== null ? twitter : "No Data"}
                onChange={(e) => setTwitter(e.target.value)}
                className="rounded-md px-2 py-1 outline-none"
                required
              />
            </div>
          </div>
          <div className="mt-3 flex w-[100%] items-center gap-7 text-center text-lg">
            <button
              onClick={updateUserDetails}
              className="mt-2 min-w-[75px] rounded-lg bg-blue-700 py-1 px-3 text-white transition-all duration-300 ease-in-out md:hover:bg-yellow-400"
            >
              Update
            </button>
            <button
              onClick={() => dispatch(setUserEditModalIsActiveState(false))}
              className="mt-2 cursor-pointer rounded-lg bg-gray-50 py-1 px-3 transition-all duration-150 ease-in  md:hover:scale-105"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditUserDetailsForm;
