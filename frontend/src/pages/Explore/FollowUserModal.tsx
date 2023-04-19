import FollowUserForm from "../../components/Forms/FollowUserForm";

const FollowUserModal = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-white/80">
        <FollowUserForm />
      </div>
    </>
  );
};

export default FollowUserModal;
