import MiniBlog from "../../components/MiniBlog";

const AllBlogCards = () => {
  return (
    <>
      <div className="hidden h-[230px] w-[100%] lg:relative lg:flex">
        <div className="flex h-[100%] w-[25%] items-center justify-center overflow-clip rounded-xl border border-blue-100 bg-sky-50 shadow-sm lg:absolute">
          <MiniBlog />
        </div>
        <div className="left-20 flex h-[100%] w-[25%] items-center justify-center overflow-clip rounded-xl border border-blue-100 bg-sky-50 shadow-sm lg:absolute">
          <MiniBlog />
        </div>
        <div className="left-40 flex h-[100%] w-[25%] items-center justify-center overflow-clip rounded-xl border border-blue-100 bg-sky-50 shadow-sm lg:absolute">
          <MiniBlog />
        </div>
        <div className="left-60 flex h-[100%] w-[25%] items-center justify-center overflow-clip rounded-xl border border-blue-100 bg-sky-50 shadow-sm lg:absolute">
          <MiniBlog />
        </div>
        <div className="left-80 flex h-[100%] w-[25%] items-center justify-center overflow-clip rounded-xl border border-blue-100 bg-sky-50 shadow-sm lg:absolute">
          <MiniBlog />
        </div>
      </div>
    </>
  );
};

export default AllBlogCards;
