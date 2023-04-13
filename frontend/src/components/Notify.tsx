import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillExclamationCircle,
} from "react-icons/ai";
import { clearNotify } from "../slices/NotifySlice";

// TYPES
interface notification {
  isActive: boolean;
  type: string;
  message: string;
}

const Notify = () => {
  const notificationData: notification = useSelector(
    (state: any) => state.notify.value
  );
  const dispatch = useDispatch();

  // IIFE
  (function () {
    setTimeout(() => {
      dispatch(clearNotify());
    }, 2500);
  })();

  return (
    <>
      <motion.div
        initial={{ top: -100, opacity: 0 }}
        animate={{ top: 20, opacity: 1 }}
        className="absolute top-5 flex h-[100px] w-full items-center justify-center px-4 py-3"
      >
        <div className="flex w-fit min-w-[150px] items-center gap-2 rounded-lg bg-gray-800 py-4 px-4 text-white">
          {notificationData.type === "success" ? (
            <>
              <AiFillCheckCircle className="text-lg text-green-400" />
              <p>{notificationData.message}</p>
            </>
          ) : notificationData.type === "alert" ? (
            <>
              <AiFillExclamationCircle className="text-lg text-amber-500" />
              <p>{notificationData.message}</p>
            </>
          ) : (
            <>
              <AiFillCloseCircle className="text-lg text-red-500" />
              <p>{notificationData.message}</p>
            </>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Notify;
