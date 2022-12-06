// import { BiChevronRight } from "react-icons/bi";
import poe1 from "../../images/poe/poe1.jpg";
import poe2 from "../../images/poe/poe2.jpeg";
import poe3 from "../../images/poe/poe3.jpeg";
import poe4 from "../../images/poe/poe4.jpeg";
import poe5 from "../../images/poe/poe5.jpeg";

const sr = [
  {
    id: 1,
    sr: poe2,
    name: "Mobile App Showcase",
  },
  {
    id: 2,
    sr: poe3,
    name: "Product Landing",
  },
  {
    id: 3,
    sr: poe4,
    name: "Saas v.1",
  },
  {
    id: 4,
    sr: poe5,
    name: "Saas v.2",
  },
  {
    id: 5,
    sr: poe3,
    name: "Marketing Agency",
  },
  {
    id: 6,
    sr: poe4,
    name: "Shop Homepage",
  },
  {
    id: 7,
    sr: poe5,
    name: "Shop Agency",
  },
];

const Drop1 = () => {
  return (
    <>
      <div className="bg-white dark:bg-black shadow-lg border border-gray-300 dark:border-gray-500 rounded-xl overflow-hidden ">
        <div className="flex flex-row items-start relative">
          <div className="w-[228px] p-[20px] flex flex-col ">
            <div className="cursor-pointer hover:text-[#448c74] duration-500 ">
              <div className="peer py-[2px]"> Template Intro Page</div>
              <div className="w-[228px] h-[276.4px] object-cover absolute  z-[1000] top-0 right-0 opacity-100  peer-hover:opacity-100 duration-500">
                <img src={poe1} alt="" className="w-full" />
              </div>
            </div>
            {/* <div className="cursor-pointer hover:text-[#448c74] duration-500 ">
              <span className="peer py-1"> Template Intro Page</span>
              <div className="w-[228px] h-[276.4px] absolute  z-[1000] top-0 right-0 opacity-0  peer-hover:opacity-100 object-cover duration-500">
                <img src={poe2} alt="" className="w-full" />
              </div>
            </div> */}
            {sr.map((e) => (
              <div
                key={e.id}
                className="cursor-pointer hover:text-[#448c74] duration-500 "
              >
                <div className="peer py-[2.5px]"> {e.name}</div>
                <div className="w-[228px] object-cover absolute  z-[1000] top-0 right-0 opacity-0  peer-hover:opacity-100 duration-500">
                  <img src={e.sr} alt="" className="w-full" />
                </div>
              </div>
            ))}
          </div>
          <div className="w-[228px] p-[20px]">
            {sr.map((e) => (
              <div
                key={e.id}
                className="cursor-pointer hover:text-[#448c74] duration-500 "
              >
                <div className="peer py-[2.5px]"> {e.name}</div>
                <div className="w-[228px] object-cover absolute  z-[1000] top-0 right-0 opacity-0  peer-hover:opacity-100 duration-500">
                  <img src={e.sr} alt="" className="w-full" />
                </div>
              </div>
            ))}
          </div>
          <div className="w-[228px]"></div>
        </div>
      </div>
    </>
  );
};

export default Drop1;
