import NotificationsContainer from "../../components/Explore/NotificationsContainer";

const Sidebar = () => {
  return (
    <div className="w hidden flex-col items-center bg-sky-50 md:flex md:h-[calc(100vh-80px)] md:w-[20%]">
      <div className="mt-5 flex w-[100%] flex-col px-3">
        <NotificationsContainer />
      </div>
    </div>
  );
};

export default Sidebar;
