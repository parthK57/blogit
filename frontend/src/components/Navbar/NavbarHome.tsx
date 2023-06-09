import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

// COMPONENTS
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { setSidebarDisplay } from "../../slices/ModalSlice";

const NavbarHome = () => {
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const navigate = useNavigate();
  const displayState: string = useSelector(
    (state: any) => state.modals.value.sidebarDispay
  );
  const dispatch = useDispatch();
  const toggler = () => setToggleHamburger(!toggleHamburger);

  return (
    <>
      <div className="flex h-[80px] w-screen items-center justify-between bg-blue-200 px-4">
        <div className="flex items-center rounded-md bg-blue-300 px-2 py-1 text-2xl transition-all duration-300 ease-in-out hover:scale-110">
          <p>
            <Link className="font-Sono" to="/">
              blogit
            </Link>
          </p>
        </div>
        <div className="text-md hidden gap-7 md:flex">
          <p className="pointer-events-auto cursor-pointer">
            <Link to="/home">Home</Link>
          </p>
          <p className="pointer-events-auto cursor-pointer">
            <Link to="/explore">Explore</Link>
          </p>
          <p className="pointer-events-auto cursor-pointer">
            <Link to="/contact">Contact Us</Link>
          </p>
        </div>
        <RxHamburgerMenu
          onClick={toggler}
          className="pointer-events-auto cursor-pointer text-2xl md:hidden"
        />
      </div>
      {toggleHamburger && (
        <div className="absolute top-0 left-0 z-50 flex h-screen w-screen flex-col items-center justify-center gap-5 bg-blue-100">
          <p
            onClick={() => navigate("/home")}
            className="pointer-events-auto w-[130px] cursor-pointer rounded-lg bg-blue-200 px-3 py-2 text-xl"
          >
            Home
          </p>
          <p
            onClick={() => navigate("/contact")}
            className="pointer-events-auto w-[130px] cursor-pointer rounded-lg bg-blue-200 px-3 py-2 text-xl"
          >
            Contact Us
          </p>
          <p
            onClick={() => navigate("/explore")}
            className="pointer-events-auto w-[130px] cursor-pointer rounded-lg bg-blue-200 px-3 py-2 text-xl"
          >
            Explore
          </p>
          <p
            onClick={() => {
              if (displayState === "hidden") {
                dispatch(setSidebarDisplay("block"));
                toggler();
              } else {
                dispatch(setSidebarDisplay("hidden"));
                toggler();
              }
            }}
            className="pointer-events-auto w-[130px] cursor-pointer rounded-lg bg-blue-200 px-3 py-2 text-xl"
          >
            Account
          </p>
          <div className="pointer-events-auto mt-8 flex cursor-pointer items-center justify-center rounded-full bg-blue-200 p-2 text-4xl">
            <IoClose onClick={toggler} />
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarHome;
