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
              <h1 className="w-max rounded-lg bg-sky-50 p-3 text-xl">
                My Blogs
              </h1>
              {/*TODO: USE REDUX AND CREATE A CARDS TOGGLER INSTEAD OF USESTATE */}
              {allBlogCardsToggle && <AllBlogCards />}
              {!allBlogCardsToggle && <AllBlogsGrid />}
              <div className="hidden">
                {/* TODO: REACT CAROUSEL FOR MOBILE */}
              </div>
              {allBlogCardsToggle && (
                <div className="mt-20 flex w-[100%] justify-center gap-6">
                  <button className="ease w-max rounded-lg bg-lime-200 px-3 py-2 text-lg transition-all duration-500 hover:bg-lime-300">
                    Create
                  </button>
                  <button className="ease w-max rounded-lg bg-yellow-200 px-3 py-2 text-lg transition-all duration-500 hover:bg-amber-300">
                    Update
                  </button>
                  <button className="ease w-max rounded-lg bg-red-300 px-3 py-2 text-lg transition-all duration-500 hover:bg-red-500">
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
