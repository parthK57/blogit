import { BsGlobeAmericas } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";

const Blog = () => {
  return (
    <>
      <div className="h-auto w-[90%] rounded-lg bg-blue-100 p-5 shadow md:w-[60%]">
        <div className="max-w-fit rounded-[15px] bg-blue-300 p-3 text-3xl md:p-5">
          Indian Butter Chicken
        </div>

        <div className="flex justify-center">
          <div className="mt-3 h-[40vh] w-[100%] rounded-md bg-[url('/home/parth/Projects/Blogs/frontend/src/assets/indian-butter-chicken.jpg')] bg-contain bg-center bg-no-repeat transition-all duration-500 ease-in-out hover:w-[100%] md:w-[85%] md:bg-cover" />
        </div>
        <div className="mt-3 flex h-[80vh] w-[100%] flex-col overflow-y-scroll">
          <div className="flex items-end justify-between border-b border-black p-3 font-Sono text-4xl">
            <h1 className="p-3 font-Sono text-4xl tracking-tighter">
              Parth's Receipy
            </h1>
            <p className="flex items-center gap-2 p-3 text-base">
              24/6/23
              <BsGlobeAmericas className="text-green-500" />
            </p>
          </div>
          <h3 className="mt-2 p-1 font-Sono text-xl text-slate-600">
            Sub-Heading
          </h3>
          <p className="mt-3 font-Sono">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            impedit hic maxime assumenda officia illo eaque architecto esse,
            totam illum beatae voluptatum sunt dolore sit libero ab veritatis!
            Illum, in? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Omnis sed nulla deleniti earum neque quod vel animi nihil
          </p>
          <p className="mt-3 font-Sono text-xl font-semibold">Contents</p>
          <ul className="list-inside list-disc">
            <li className="font-Sono">Chicken</li>
            <li className="font-Sono">Butter</li>
            <li className="font-Sono">2 Tbs Salt</li>
            <li className="font-Sono">Red Chilli</li>
            <li className="font-Sono">Rice</li>
          </ul>
          <p className="mt-3 font-Sono">
            doloremque ut, quia quae ipsam, placeat necessitatibus voluptas
            mollitia quibusdam excepturi! Labore. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Consequatur sequi, soluta provident
            enim, laudantium dignissimos placeat ex autem natus iste veniam
            recusandae sint ad. Illum consequuntur debitis voluptate repellat
            voluptatibus? Lorem Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Quia iusto aspernatur nobis eveniet quae repellat?
            Quia eius vero nihil dignissimos voluptatem laudantium recusandae
            non? Non voluptate labore voluptatem eligendi libero.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
