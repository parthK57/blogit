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
            <div className="flex w-[100%] h-[100%] flex-col justify-around gap-8 p-5">
              <h1 className="w-max rounded-lg bg-sky-50 p-3 text-xl">
                My Blogs
              </h1>
              <div className="hidden h-[230px] w-[100%] lg:relative lg:flex">
                <div className="flex h-[100%] w-[25%] items-center justify-center rounded-xl border border-blue-100 bg-sky-50 shadow-sm lg:absolute">
                  Blog 0
                </div>
                <div className="left-20 flex h-[100%] w-[25%] items-center justify-center rounded-xl border border-blue-100 bg-sky-50 shadow-sm lg:absolute">
                  Blog 1
                </div>
                <div className="left-40 flex h-[100%] w-[25%] items-center justify-center rounded-xl border border-blue-100 bg-sky-50 shadow-sm lg:absolute">
                  Blog 2
                </div>
                <div className="left-60 flex h-[100%] w-[25%] items-center justify-center rounded-xl border border-blue-100 bg-sky-50 shadow-sm lg:absolute">
                  Blog 3
                </div>
                <div className="left-80 flex h-[100%] w-[25%] items-center justify-center rounded-xl border border-blue-100 bg-sky-50 shadow-sm lg:absolute">
                  Blog 3
                </div>
              </div>
              <div className="hidden">
                {/* TODO: REACT CAROUSEL FOR MOBILE */}
              </div>
              <div className="w-[100%] justify-center flex gap-6">
                <button className="w-max rounded-lg bg-lime-200 px-3 py-2 text-lg hover:bg-lime-300">
                  Create
                </button>
                <button className="w-max rounded-lg bg-yellow-200 px-3 py-2 text-lg hover:bg-amber-300">
                  Update
                </button>
                <button className="w-max rounded-lg bg-red-300 px-3 py-2 text-lg hover:bg-red-500">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
