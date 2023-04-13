import { motion } from "framer-motion";
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillExclamationCircle,
} from "react-icons/ai";

interface data {
  message: string;
  type: string;
}

const Notify = ({ message, type }: data) => {
  return (
    <>
      <motion.div
        initial={{ top: -100, opacity: 0 }}
        animate={{ top: 20, opacity: 1 }}
        className="absolute top-5 flex h-[100px] w-full items-center justify-center px-4 py-3"
      >
        <div className="flex w-fit min-w-[150px] items-center gap-2 rounded-lg bg-gray-800 py-4 px-4 text-white">
          {type === "success" ? (
            <>
              <AiFillCheckCircle className="text-lg text-green-400" />
              <p>{message}</p>
            </>
          ) : type === "alert" ? (
            <>
              <AiFillExclamationCircle className="text-lg text-amber-500" />
              <p>{message}</p>
            </>
          ) : (
            <>
              <AiFillCloseCircle className="text-lg text-red-500" />
              <p>{message}</p>
            </>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Notify;
