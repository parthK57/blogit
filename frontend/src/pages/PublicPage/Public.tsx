import Blog from "../../components/Blog";
import NavbarHome from "../../components/Navbar/NavbarHome";

const Public = () => {
  return (
    <>
      <div className="flex h-screen w-screen flex-col">
        <NavbarHome />
        <div className="mt-10 flex h-[calc(100vh-80px)] w-screen flex-col items-center gap-20 overflow-y-scroll">
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>
    </>
  );
};

export default Public;
