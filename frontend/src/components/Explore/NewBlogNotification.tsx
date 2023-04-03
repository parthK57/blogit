import { ImBlog } from "react-icons/im";

interface data {
  notification: string;
  title: string;
}

const NewBlogNotification = ({ notification, title }: data) => {
  return (
    <>
      <div className="cursor-default rounded bg-blue-200 px-2 py-1 hover:bg-white hover:text-blue-400">
        <span className="flex items-center gap-2">{notification}</span>
        <p className="flex cursor-pointer items-center gap-2 hover:text-teal-500">
          <ImBlog /> {title}
        </p>
      </div>
    </>
  );
};

export default NewBlogNotification;
