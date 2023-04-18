import FollowUserForm from "../../components/Forms/FollowUserForm";

const FollowUserModal = () => {
  return (
    <>
      <div className="absolute z-50 top-0 left-0 flex h-screen w-screen items-center justify-center bg-white/80">
        <FollowUserForm />
      </div>
    </>
  );
};

export default FollowUserModal;
