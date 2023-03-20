import NavbarHome from "../../components/Navbar/NavbarHome";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <>
      <div className="flex h-screen w-screen flex-col">
        <NavbarHome />
        <div className="flex h-[calc(100vh-80px)] w-screen items-center gap-10 overflow-y-scroll">
            <Sidebar />
          <div className="mt-10 flex h-[calc(100vh-80px)] flex-col items-center gap-20 overflow-y-scroll md:w-[75%]">
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
