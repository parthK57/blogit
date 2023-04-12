import FiltersContainer from "../../components/Explore/FiltersContainer";
import NotificationsContainer from "../../components/Explore/NotificationsContainer";

const Sidebar = () => {
  return (
    <div className="w hidden flex-col items-center bg-blue-50 md:flex md:h-[calc(100vh-80px)] md:w-[30%] lg:w-[25%] xl:w-[20%]">
      <div className="mt-5 flex w-[100%] flex-col gap-8 px-3">
        <NotificationsContainer />
        <FiltersContainer />
      </div>
    </div>
  );
};

export default Sidebar;
