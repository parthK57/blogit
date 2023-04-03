import { useSelector } from "react-redux";

// COMPONENTS
import NewBlogNotification from "./NewBlogNotification";
import FollowNotification from "./FollowNotification";
import { RxDotFilled } from "react-icons/rx";
import { IoNotifications } from "react-icons/io5";
import { GrDocumentVerified } from "react-icons/gr";

// SLICES
import {
  notification,
  notificationsArray,
} from "../../slices/NotificationSlice";

const NotificationsContainer = () => {
  const fullName: string = useSelector(
    (state: any) => state.user?.value[0]?.full_name
  );
  const Notifications: notificationsArray = useSelector(
    (state: any) => state.notifications.value
  );

  return (
    <>
      <div className="w-[90%] overflow-hidden rounded bg-blue-100 shadow-sm">
        <div className="flex flex-col items-center gap-3">
          <div className="flex w-[100%] items-center justify-between bg-blue-300 px-4 py-3 text-xl shadow">
            Notifications <IoNotifications className="text-white" />
          </div>
          <div className="flex w-max items-center rounded-md bg-blue-200 px-2 py-1 font-Sono text-lg shadow-sm transition-all ease-in-out hover:scale-105">
            {fullName} <RxDotFilled className="text-green-500" />
          </div>
          <div className="mb-2 flex h-[80px] w-[100%] flex-col justify-center gap-2 overflow-y-scroll bg-blue-100 px-2">
            {Notifications?.map((notification: notification, index: number) => {
              if (notification.type === "new blog")
                return (
                  <NewBlogNotification
                    key={index}
                    notification={notification.notification}
                    title={notification.blog_title}
                  />
                );
              else
                return (
                  <FollowNotification
                    key={index}
                    notification={notification.notification}
                  />
                );
            })}
            {Notifications.length === 0 ? (
              <div className="cursor-default rounded bg-blue-200 px-2 py-2 hover:bg-blue-300 ">
                <span className="flex items-center gap-2">
                  <GrDocumentVerified className="text-xl" /> You are all caught
                  up!
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationsContainer;
