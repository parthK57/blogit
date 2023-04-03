import React from "react";
import { AiFillHeart } from "react-icons/ai";

interface data {
  notification: string;
}

const FollowNotification = ({ notification }: data) => {
  return (
    <>
      <div className="cursor-default rounded bg-blue-200 px-2 py-1 hover:bg-white hover:text-blue-400">
        <span className="flex items-center gap-2">
          <AiFillHeart className="text-red-500" /> {notification}
        </span>
      </div>
    </>
  );
};

export default FollowNotification;
