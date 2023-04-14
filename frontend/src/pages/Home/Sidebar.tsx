import { useSelector } from "react-redux";

// COMPONENTS

import EditUserDetailsModal from "../Explore/EditUserDetailsModal";
import UtilityTab from "../../components/Home/UtilityTab";
import InfoTab from "../../components/Home/InfoTab";

const Sidebar = () => {
  const editUserModalState: boolean = useSelector(
    (state: any) => state.modals.value.userEditModalIsActiveState
  );

  return (
    <>
      <div className="hidden flex-col items-center bg-blue-50 md:flex md:h-[calc(100vh-80px)] md:w-[34%] lg:w-[27%] xl:w-[20%]">
        <div className="flex w-[100%] flex-col items-center gap-10 px-3">
          <div className="relative mt-20 flex w-[90%] flex-col gap-2 rounded-[15px] bg-blue-200 p-4 pt-0 text-[12px] lg:text-base">
            <InfoTab />
          </div>
          {/* // TODO: Create New Component */}
          <UtilityTab />
        </div>
        {editUserModalState && <EditUserDetailsModal />}
      </div>
    </>
  );
};

export default Sidebar;
