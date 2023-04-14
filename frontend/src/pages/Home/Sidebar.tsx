import { useSelector } from "react-redux";
import { motion } from "framer-motion";

// COMPONENTS
import EditUserDetailsModal from "../Explore/EditUserDetailsModal";
import UtilityTab from "../../components/Home/UtilityTab";
import InfoTab from "../../components/Home/InfoTab";

const Sidebar = () => {
  const editUserModalState: boolean = useSelector(
    (state: any) => state.modals.value.userEditModalIsActiveState
  );
  const displayState: string = useSelector(
    (state: any) => state.modals.value.sidebarDispay
  );

  return (
    <>
      <motion.div
        initial={{ x: -100, opacity: 0.5 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 0.3 } }}
        className={`relative ${displayState} h-[calc(100vh-50px)] w-full flex-col items-center bg-blue-50 md:flex md:w-[34%] lg:w-[27%] xl:w-[20%]`}
      >
        <div className="flex w-[100%] flex-col items-center gap-10 px-3">
          <div className="relative mt-20 flex w-[90%] flex-col gap-2 rounded-[15px] bg-blue-200 p-4 pt-0 text-[12px] lg:text-base">
            <InfoTab />
          </div>
          <UtilityTab />
        </div>
        {editUserModalState && <EditUserDetailsModal />}
      </motion.div>
    </>
  );
};

export default Sidebar;
