import CreateNewBlogForm from "../../components/Forms/CreateNewBlogForm";

const CreateNewBlogMoal = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-30 flex h-screen w-screen items-center justify-center overflow-y-scroll bg-white/80">
        <CreateNewBlogForm />
      </div>
    </>
  );
};

export default CreateNewBlogMoal;
