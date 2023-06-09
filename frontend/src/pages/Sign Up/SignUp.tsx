import { useSelector } from "react-redux";

// COMPONENTS
import Navbar from "../../components/Navbar/Navbar";
import SignUpForm from "../../components/Forms/SignUpFrom";
import Notify from "../../components/Notify";

const SignUp = () => {
  const notifyState: boolean = useSelector(
    (state: any) => state.notify.value.isActive
  );

  return (
    <>
      <div className="flex h-screen w-screen flex-col">
        <Navbar />
        <div className="flex h-screen w-screen gap-5">
          <div className="hidden h-[calc(100vh-80px)] w-[50%] items-center justify-center md:flex">
            <div className="h-[calc(100vh-80px)] bg-[url('/signUp.jpg')] bg-contain bg-center bg-no-repeat transition-all duration-200 ease-in-out hover:scale-105 md:w-[70%] lg:w-[65%]"></div>
          </div>
          <div className="flex h-[calc(100vh-80px)] w-screen items-center justify-center md:w-[50%]">
            <SignUpForm />
          </div>
        </div>
        {notifyState && <Notify />}
      </div>
    </>
  );
};

export default SignUp;
