import EditUserDetailsForm from "../../components/Forms/EditUserDetailsForm";

const EditUserDetailsModal = () => {
  return (
    <>
      <div className="absolute z-50 top-0 left-0 flex h-screen w-screen items-center justify-center bg-white/80">
        <EditUserDetailsForm />
      </div>
    </>
  );
};

export default EditUserDetailsModal;
