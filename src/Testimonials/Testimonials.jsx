import React from "react";
import avtar from "../assets/Avatar.png";
import avtar1 from "../assets/Avatar-1.png";
import avtar2 from "../assets/Avatar-2.png";
import comma from "../assets/comma.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
const Testimonials = () => {
  return (
    <div className="mt-22 px-4 md:px-8 lg:px-1">
      <div className="flex justify-center items-center flex-col mt-10">
        <h2 className="font-bold text-[28px] md:text-[36px] lg:text-[48px] bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
          Testimonials
        </h2>
        <p className="text-center text-sm md:text-base lg:text-lg mt-5 text-[#8F9BB7] max-w-2xl">
          Rmet facilisi arcu odio urna aenean erat. Pellentesque in vitae
          lobortis orci tincidunt <br /> facilisis. Pulvinar lacus ultricies
          turpis urna sapien.
        </p>
      </div>

      <div className="flex flex-col md:flex-row mt-8 gap-6 md:mt-32  ">
        {/* card-1 */}
        <div className="relative bg-gradient-to-l from-[#6d7ecc] to-[#516b50] rounded-lg md:w-1/3 md:h-24 w-full p-4">
          <div className="bg-[#0E1330] rounded-lg p-4 shadow-lg md:-translate-y-[60%]">
            <div className="flex items-center">
              <img src={avtar} alt="Avatar" className="w-12 h-12 rounded-md" />
              <div className="flex flex-col ml-2 gap-1">
                <h4 className="text-white font-bold text-sm">
                  Cameron Williamson
                </h4>
                <p className="text-gray-400 text-xs">Web Designer</p>
              </div>
              <img src={comma} alt="" className="w-8 h-8 ml-auto" />
            </div>
            <p className="text-sm mt-4 text-[#8F9BB7]">
              Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh
              volutpat enim pellentesque. Proin iaculis nisl et neque sed
              fermentum sollicitudin lectus.
            </p>
          </div>
        </div>

        {/* card-2 */}
        <div className="relative bg-gradient-to-r from-[#4f3a5e] via-[#282D45] to-[#282D45] rounded-lg md:h-24 md:w-1/3 w-full p-4">
          <div className="bg-[#0E1330] rounded-lg p-4 shadow-lg md:-translate-y-[60%]">
            <div className="flex items-center">
              <img src={avtar1} alt="Avatar" className="w-12 h-12 rounded-md" />
              <div className="flex flex-col ml-2 gap-1">
                <h4 className="text-white font-bold text-sm">
                  Cameron Williamson
                </h4>
                <p className="text-gray-400 text-xs">Web Designer</p>
              </div>
              <img src={comma} alt="" className="w-8 h-8 ml-auto" />
            </div>
            <p className="text-sm mt-4 text-[#8F9BB7]">
              Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh
              volutpat enim pellentesque. Proin iaculis nisl et neque sed
              fermentum sollicitudin lectus.
            </p>
          </div>
        </div>

        {/* card-3 */}
        <div className="relative bg-gradient-to-b from-[#6d7ecc] to-[#282D45] rounded-lg md:h-24 md:w-1/3 w-full p-4">
          <div className="bg-[#0E1330] rounded-lg p-4 shadow-lg md:-translate-y-[60%]">
            <div className="flex items-center">
              <img src={avtar2} alt="Avatar" className="w-12 h-12 rounded-md" />
              <div className="flex flex-col ml-2 gap-1">
                <h4 className="text-white font-bold text-sm">
                  Cameron Williamson
                </h4>
                <p className="text-gray-400 text-xs">Web Designer</p>
              </div>
              <img src={comma} alt="" className="w-8 h-8 ml-auto" />
            </div>
            <p className="text-sm mt-4 text-[#8F9BB7]">
              Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh
              volutpat enim pellentesque. Proin iaculis nisl et neque sed
              fermentum sollicitudin lectus.
            </p>
          </div>
        </div>
      </div>

      <div className="flex  justify-center align-middle mt-6 gap-3">
        <button className="border border-[#1F1F1F] p-2 rounded-md text-[12px] ">
          <img src={left} alt="" />
        </button>
        <button className="border border-[#1F1F1F] p-2 rounded-md text-[12px] ">
          <img src={right} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
