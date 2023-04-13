import { useState } from "react";
import NavbarHome from "../../components/Navbar/NavbarHome";
import Sidebar from "./Sidebar";
import AllBlogCards from "./AllBlogCards";
import AllBlogsGrid from "./AllBlogsGrid";

const Home = () => {
  const [allBlogCardsToggle, setAllBlogCardsToggle] = useState(true);

  return (
    <>
      <div className="flex h-screen w-screen flex-col">
        <NavbarHome />
        <div className="flex h-[calc(100vh-80px)] w-screen items-center gap-10 overflow-y-scroll">
          <Sidebar />
          <div className="mt-10 flex h-[calc(100vh-80px)] flex-col items-center gap-20 overflow-y-scroll md:w-[75%]">
            <div className="flex h-[100%] w-[100%] flex-col gap-8 p-5">
          

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
