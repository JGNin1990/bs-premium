import { useSelector } from "react-redux";

const Blog = () => {
  const blogData = useSelector((state) => state.blog);

  //   console.log(blogData);
  return (
    <>
      <div className="w-full bg-white dark:bg-black duration-500">
        <div className="con mx-auto py-[120px]">
          <h1 className="pb-10 text-black dark:text-white text-[45px] font-semibold">
            Our blog
          </h1>
          <div className="flex flex-row items-start">
            {blogData.map((e, index) => (
              <div key={index} className="px-[13.2px] cursor-pointer">
                <div className="overflow-hidden border border-[#448c74] rounded-lg shadow-md ">
                  <img src={e.img} alt="" className="w-full hover:scale-105 duration-500" />
                </div>
                <h1 className="text-[27px] py-5 dark:text-gray-300 text-gray-800 font-semibold">
                  {e.name}
                </h1>
                <p className="text-[17px] text-gray-500 dark:text-gray-600">{e.des}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto text-center pt-10">
            <button className=" text-[15px] dark:text-[#448c74] text-[#448c74] font-semibold border border-[#448c74]  py-3 sm:py-4 px-5 sm:px-7 rounded-2xl shadow-lg duration-500 origin-top hover:bg-[#448c74]  hover:text-white dark:hover:text-white">
              More articles
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
