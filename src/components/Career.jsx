import React from "react";
import hero from "../assets/hero-bg.png";
import feature from "../assets/career-hero.png";
import Footer from "../Footer/Footer";
import img from "../assets/career-img.png";
import circle from "../assets/Ellipse.png";
import people from "../assets/people.png";

const Career = () => {
  return (
    <div className="mt-32  ">
      <div className="home-container flex flex-col-reverse lg:flex-row gap-8 justify-between items-center px-4 h-[600px]">
        <img
          src={hero}
          alt=""
          className="absolute top-0 left-0 w-full h-[70%] z-40 object-cover"
        />
        <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-[50%] text-center lg:text-left">
          <h1 className="font-[700] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] p-4 bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
            One step closer to <br /> working with us
          </h1>
          <p className="text-[#8F9BB7] text-sm sm:text-base font-[400] w-full lg:w-[90%] p-4">
            Join our highly skilled teams and lets embark our venture together,
          </p>
          <div className="p-4 w-full sm:w-[50%] md:w-[40%] lg:w-[30%] mx-auto lg:mx-0">
            <button className="bg-[#7214FF] pl-4 pr-4 pt-3 pb-3 rounded-2xl text-sm sm:text-[14px] w-full">
              Explore Jobs
            </button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end items-center w-full lg:w-[50%]">
          <img
            src={feature}
            alt=""
            className="w-[18rem] h-[20rem] sm:w-[25rem] sm:h-[20rem] lg:w-[30rem] lg:h-[25rem]"
          />
        </div>
      </div>

      <div className="h-[90vh]">
        <div>
          {" "}
          <div className="text-center mt-20 px-4">
            <h2 className="font-[700] text-2xl sm:text-3xl md:text-4xl lg:text-[32px] mb-4 bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
              Newest Jobs for You
            </h2>
            <p className="text-[12px] sm:text-[14px] md:text-[16px] text-[#8F9BB7] font-[400]">
              Get the fastest application so that your name is above other
              application
            </p>
          </div>
        </div>
        <div className="text-[#959595] flex justify-center mt-[5rem] gap-8 p-4">
          <div className="w-[40%] flex justify-between">
            <div className="relative inline-block text-[#959595] group cursor-pointer hover:text-white">
              All Recent
              <span className="absolute  left-0 bottom-[-6px] w-full h-[2px] bg-gradient-to-r from-[#CE9FFC] via-[#A582F7] to-[#7367F0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </div>

            <div className="relative inline-block text-[#959595] group cursor-pointer hover:text-white">
              Finance
              <span className="absolute  left-0 bottom-[-6px] w-full h-[2px] bg-gradient-to-r from-[#CE9FFC] via-[#A582F7] to-[#7367F0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </div>
            <div className="relative inline-block text-[#959595] group cursor-pointer hover:text-white">
              Development
              <span className="absolute  left-0 bottom-[-6px] w-full h-[2px] bg-gradient-to-r from-[#CE9FFC] via-[#A582F7] to-[#7367F0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </div>
            <div className="relative inline-block text-[#959595] group cursor-pointer hover:text-white">
              Marketing
              <span className="absolute  left-0 bottom-[-6px] w-full h-[2px] bg-gradient-to-r from-[#CE9FFC] via-[#A582F7] to-[#7367F0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </div>
            <div className="relative inline-block text-[#959595] group cursor-pointer hover:text-white">
              Specialist
              <span className="absolute  left-0 bottom-[-6px] w-full h-[2px] bg-gradient-to-r from-[#CE9FFC] via-[#A582F7] to-[#7367F0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </div>
          </div>
        </div>
        <div className="mt-[2rem] grid grid-rows-2 gap-4 pl-[14rem] pr-[14rem] h-[64%] mb-[4rem]">
          {/* 1st row */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#150C46] flex   p-4 relative overflow-hidden">
              <img
                src={img}
                alt=""
                className="absolute bottom-0 right-[4rem]"
              />
              <img
                src={circle}
                alt=""
                className="absolute bottom-0 right-[8rem]"
              />
              <div className="w-full gap-3 flex flex-col justify-between p-2">
                <div className="flex justify-between">
                  <button className="border-white border-[0.9px] pt-2 pb-2 rounded-[10px] pl-6 pr-6">
                    Full Time
                  </button>
                  <button className="border-white border-[0.9px] pt-2 pb-2 pl-6 pr-6 rounded-[10px]">
                    Onsite
                  </button>
                  <button className="border-white border-[0.9px] pt-2 pb-2 pl-6 pr-6 rounded-[10px]">
                    $200K
                  </button>
                </div>
                <div>
                  <h2 className="text-[22px] font-[700]">UX Designer</h2>
                  <p>Advoit Digital Agency</p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <button className="px-6 py-2 text-white font-semibold rounded-md shadow-lg bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] hover:opacity-90 transition">
                      Apply
                    </button>
                  </div>
                  <div className="flex w-[25%] justify-between items-center">
                    <div>
                      <img src={people} alt="" />
                    </div>

                    <p>24 applied</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#150C46] flex   p-4 relative overflow-hidden">
              <img
                src={img}
                alt=""
                className="absolute bottom-0 right-[4rem]"
              />
              <img
                src={circle}
                alt=""
                className="absolute bottom-0 right-[8rem]"
              />
              <div className="w-full gap-3 flex flex-col justify-between p-2">
                <div className="flex justify-between">
                  <button className="border-white border-[0.9px] pt-2 pb-2 rounded-[10px] pl-6 pr-6">
                    Full Time
                  </button>
                  <button className="border-white border-[0.9px] pt-2 pb-2 pl-6 pr-6 rounded-[10px]">
                    Onsite
                  </button>
                  <button className="border-white border-[0.9px] pt-2 pb-2 pl-6 pr-6 rounded-[10px]">
                    $200K
                  </button>
                </div>
                <div>
                  <h2 className="text-[22px] font-[700]">UX Designer</h2>
                  <p>Advoit Digital Agency</p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <button className="px-6 py-2 text-white font-semibold rounded-md shadow-lg bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] hover:opacity-90 transition">
                      Apply
                    </button>
                  </div>
                  <div className="flex w-[25%] justify-between items-center">
                    <div>
                      <img src={people} alt="" />
                    </div>

                    <p>24 applied</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#150C46] flex   p-4 relative overflow-hidden">
              <img
                src={img}
                alt=""
                className="absolute bottom-0 right-[4rem]"
              />
              <img
                src={circle}
                alt=""
                className="absolute bottom-0 right-[8rem]"
              />
              <div className="w-full gap-3 flex flex-col justify-between p-2">
                <div className="flex justify-between">
                  <button className="border-white border-[0.9px] pt-2 pb-2 rounded-[10px] pl-6 pr-6">
                    Full Time
                  </button>
                  <button className="border-white border-[0.9px] pt-2 pb-2 pl-6 pr-6 rounded-[10px]">
                    Onsite
                  </button>
                  <button className="border-white border-[0.9px] pt-2 pb-2 pl-6 pr-6 rounded-[10px]">
                    $200K
                  </button>
                </div>
                <div>
                  <h2 className="text-[22px] font-[700]">UX Designer</h2>
                  <p>Advoit Digital Agency</p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <button className="px-6 py-2 text-white font-semibold rounded-md shadow-lg bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] hover:opacity-90 transition">
                      Apply
                    </button>
                  </div>
                  <div className="flex w-[25%] justify-between items-center">
                    <div>
                      <img src={people} alt="" />
                    </div>

                    <p>24 applied</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd row */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#150C46] flex   p-4 relative overflow-hidden">
              <img
                src={img}
                alt=""
                className="absolute bottom-0 right-[4rem]"
              />
              <img
                src={circle}
                alt=""
                className="absolute bottom-0 right-[8rem]"
              />
              <div className="w-full gap-3 flex flex-col justify-between p-2">
                <div className="flex justify-between">
                  <button className="border-white border-[0.9px] pt-2 pb-2 rounded-[10px] pl-6 pr-6">
                    Full Time
                  </button>
                  <button className="border-white border-[0.9px] pt-2 pb-2 pl-6 pr-6 rounded-[10px]">
                    Onsite
                  </button>
                  <button className="border-white border-[0.9px] pt-2 pb-2 pl-6 pr-6 rounded-[10px]">
                    $200K
                  </button>
                </div>
                <div>
                  <h2 className="text-[22px] font-[700]">UX Designer</h2>
                  <p>Advoit Digital Agency</p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <button className="px-6 py-2 text-white font-semibold rounded-md shadow-lg bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] hover:opacity-90 transition">
                      Apply
                    </button>
                  </div>
                  <div className="flex w-[25%] justify-between items-center">
                    <div>
                      <img src={people} alt="" />
                    </div>

                    <p>24 applied</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#150C46] flex   p-4 relative overflow-hidden">
              <img
                src={img}
                alt=""
                className="absolute bottom-0 right-[4rem]"
              />
              <img
                src={circle}
                alt=""
                className="absolute bottom-0 right-[8rem]"
              />
              <div className="w-full gap-3 flex flex-col justify-between p-2">
                <div className="flex justify-between">
                  <button className="border-white border-[0.9px] pt-2 pb-2 rounded-[10px] pl-6 pr-6">
                    Full Time
                  </button>
                  <button className="border-white border-[0.9px] pt-2 pb-2 pl-6 pr-6 rounded-[10px]">
                    Onsite
                  </button>
                  <button className="border-white border-[0.9px] pt-2 pb-2 pl-6 pr-6 rounded-[10px]">
                    $200K
                  </button>
                </div>
                <div>
                  <h2 className="text-[22px] font-[700]">UX Designer</h2>
                  <p>Advoit Digital Agency</p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <button className="px-6 py-2 text-white font-semibold rounded-md shadow-lg bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] hover:opacity-90 transition">
                      Apply
                    </button>
                  </div>
                  <div className="flex w-[25%] justify-between items-center">
                    <div>
                      <img src={people} alt="" />
                    </div>

                    <p>24 applied</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#150C46] flex   p-4 relative overflow-hidden">
              <img
                src={img}
                alt=""
                className="absolute bottom-0 right-[4rem]"
              />
              <img
                src={circle}
                alt=""
                className="absolute bottom-0 right-[8rem]"
              />
              <div className="w-full gap-3 flex flex-col justify-between p-2">
                <div className="flex justify-between">
                  <button className="border-white border-[0.9px] pt-2 pb-2 rounded-[10px] pl-6 pr-6">
                    Full Time
                  </button>
                  <button className="border-white border-[0.9px] pt-2 pb-2 pl-6 pr-6 rounded-[10px]">
                    Onsite
                  </button>
                  <button className="border-white border-[0.9px] pt-2 pb-2 pl-6 pr-6 rounded-[10px]">
                    $200K
                  </button>
                </div>
                <div>
                  <h2 className="text-[22px] font-[700]">UX Designer</h2>
                  <p>Advoit Digital Agency</p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <button className="px-6 py-2 text-white font-semibold rounded-md shadow-lg bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] hover:opacity-90 transition">
                      Apply
                    </button>
                  </div>
                  <div className="flex w-[25%] justify-between items-center">
                    <div>
                      <img src={people} alt="" />
                    </div>

                    <p>24 applied</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-container mt-[14rem] md:mt-0 lg:mt-0 xl:mt-0">
        <Footer />
      </div>
    </div>
  );
};

export default Career;
