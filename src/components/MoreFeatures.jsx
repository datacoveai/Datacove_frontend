import React from "react";
import hero from "../assets/hero-bg.png";
import feature from "../assets/feature-icon.png";
import kaspersky from "../assets/kaspersky.png";
import disney from "../assets/disney.png";
import McAfee from "../assets/McAfee.png";
import britbox from "../assets/britbox.png";
import comodo from "../assets/comodo.png";
import feature_img from "../assets/feature-img.png";
import feature_1 from "../assets/feature_1.png";
import feature_2 from "../assets/feature_2.png";
import feature_3 from "../assets/feature_3.png";
import feature_4 from "../assets/feature_4.png";
import about from "../assets/about_1.png";
import check from "../assets/check.png";
import heading from "../assets/features.png";
import section2 from "../assets/section2.png";
import ft from "../assets/fg-img3.png";
import service1 from "../assets/service_1.png";
import service2 from "../assets/service_2.png";
import service3 from "../assets/service_3.png";
import service4 from "../assets/service_4.png";
import service5 from "../assets/service_5.png";
import export_1 from "../assets/export.png";
import eclipse3 from "../assets/elipse3.png";
import elipse4 from "../assets/elipse4.png";

import Footer from "../Footer/Footer";
const MoreFeatures = () => {
  return (
    <div className="mt-32  ">
      {/* Hero */}
      <div className=" home-container flex gap-8 justify-between">
        <img
          src={hero}
          alt=""
          className="absolute top-0 left-0 w-full h-auto -z-40"
        />
        <div className="flex justify-center  flex-col w-[50%]  ">
          <h1 className="font-[700] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] p-4   bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
            Prioritize high-value <br />
            tasks with streamlined <br />
            contract review
          </h1>
          <p className="text-[#8F9BB7] text-[14px] font-[400] w-[100%] p-4">
            Attract new business and deliver enhanced client value with Kira’s
            machine learning technology, enabling rapid and efficient contract
            review and analysis
          </p>
          <div className="p-4 w-[30%]">
            {" "}
            <button className="bg-[#7214FF] pl-4 pr-4 pt-3 pb-3 rounded-2xl text-[12px] w-full ">
              Get a demo
            </button>
          </div>
        </div>
        <div className="flex justify-end align-middle items-center w-[50%] ">
          <img src={feature} alt="" className="w-[30rem] h-[25rem]" />
        </div>
      </div>
      {/* Collab */}
      <div className="flex justify-between items-center gap-3 left-0 top-0 feature-padding mb-36 mt-36">
        <div className="flex justify-center items-center p-2 h-24 w-24 ">
          <img src={kaspersky} alt="" className="h-32 w-32 object-contain" />
        </div>
        <div className="flex justify-center items-center p-2 h-24 w-24 ">
          <img src={disney} alt="" className="h-32 w-32 object-contain" />
        </div>
        <div className="flex justify-center items-center p-2 h-24 w-24 ">
          <img src={McAfee} alt="" className="h-32 w-32 object-contain" />
        </div>
        <div className="flex justify-center items-center p-2 h-24 w-24 ">
          <img src={britbox} alt="" className="h-32 w-32 object-contain" />
        </div>
        <div className="flex justify-center items-center p-2 h-24 w-24 ">
          <img src={comodo} alt="" className="h-32 w-32 object-contain" />
        </div>
      </div>
      {/* AI's Potential */}
      <div className="feature-padding_two flex gap-6 justify-center  align-middle mb-6 mt-[10rem] ">
        <div className="p-4">
          <img src={feature_img} alt="" />
        </div>
        <div
          className=" flex flex-col items-center bg-cover bg-center "
          style={{
            backgroundImage: `url(${heading})`,
            // borderRadius: "50%",
            top: 0,
            backgroundSize: "contain", // Can also use 'contain' or custom values like '100px 100px'
            backgroundPosition: "top", // Position the image
            backgroundRepeat: "no-repeat", // Prevents repetition
          }}
        >
          <div className="flex flex-col justify-center items-center mt-6">
            {" "}
            <div className="flex justify-center items-center align-middle w-[80%] mb-6 z-50  ">
              <h2 className="font-[700] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] h-24   bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
                Unleashing AIs Potential in your Documents
              </h2>
            </div>
            <div className="flex gap-4 justify-center align-middle p-4 w-[80%] h-auto">
              <div className="flex flex-col gap-8 justify-between ">
                <div className="flex gap-6">
                  <div className="flex justify-center ">
                    <img src={feature_1} alt="" className="h-8 w-10 mt-2" />
                  </div>
                  <div className="flex flex-col ">
                    <h2 className="text-[19px] font-beVietnam font-[600]">
                      Business Growth
                    </h2>
                    <p className="text-[13px] text-[#8F9BB7] w-[80%]">
                      Sed perspiciatis unde omnis natus error voluptatem
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex justify-center ">
                    <img src={feature_3} alt="" className="h-8 w-10 mt-2" />
                  </div>
                  <div className="flex flex-col ">
                    <h2 className="text-[19px] font-beVietnam font-[600]">
                      Business Growth
                    </h2>
                    <p className="text-[13px] text-[#8F9BB7] w-[80%]">
                      Sed perspiciatis unde omnis natus error voluptatem
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8 justify-between ">
                <div className="flex gap-6">
                  <div className="flex justify-center ">
                    <img src={feature_2} alt="" className="h-8 w-10 mt-2" />
                  </div>
                  <div className="flex flex-col ">
                    <h2 className="text-[19px] font-beVietnam font-[600]">
                      Business Growth
                    </h2>
                    <p className="text-[13px] text-[#8F9BB7] w-[80%]">
                      Sed perspiciatis unde omnis natus error voluptatem
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex justify-center ">
                    <img src={feature_4} alt="" className="h-8 w-10 mt-2" />
                  </div>
                  <div className="flex flex-col ">
                    <h2 className="text-[19px] font-beVietnam font-[600]">
                      Business Growth
                    </h2>
                    <p className="text-[13px] text-[#8F9BB7] w-[80%]">
                      Sed perspiciatis unde omnis natus error voluptatem
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Numbers */}
      <div className="bg-[#150C46] h-44 flex justify-center mt-[10rem] ">
        <div className="pl-40 pr-40 flex gap-4 justify-between h-full w-[90%]">
          <div className=" flex flex-col justify-center items-center align-middle gap-3 ">
            <h2 className="text-[36px] font-[400] text-[#FFFFFF]">400+</h2>
            <p className="text-[18px] text-[#9C9C9C] font-[400]">
              Projects Completed
            </p>
          </div>
          <div className="justify-center items-center align-middle flex">
            <div className="border-[1px] h-[35%] border-[#FFFFFF] border-opacity-30 "></div>
          </div>

          <div className=" flex flex-col justify-center items-center align-middle gap-3 ">
            <h2 className="text-[36px] font-[400] text-[#FFFFFF]">15+</h2>
            <p className="text-[18px] text-[#9C9C9C] font-[400]">
              Successful Years
            </p>
          </div>
          <div className="justify-center items-center align-middle flex">
            <div className="border-[1px] h-[35%] border-[#FFFFFF] border-opacity-30 "></div>
          </div>
          <div className=" flex flex-col justify-center items-center align-middle gap-3 ">
            <h2 className="text-[36px] font-[400] text-[#FFFFFF]">98%</h2>
            <p className="text-[18px] text-[#9C9C9C] font-[400]">
              Client Retention
            </p>
          </div>
          <div className="justify-center items-center align-middle flex">
            <div className="border-[1px] h-[35%] border-[#FFFFFF] border-opacity-30 "></div>
          </div>
          <div className=" flex flex-col justify-center items-center align-middle ">
            <h2 className="text-[36px] font-[400] text-[#FFFFFF]">30+</h2>
            <p className="text-[18px] text-[#9C9C9C] font-[400]">Countries</p>
          </div>
        </div>
      </div>
      {/* Enhanced Features */}
      <div
        style={{
          backgroundImage: `url(${section2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionc: "center",
          top: "5%",
        }}
        className="w-full relative -top-4 h-[60vh] flex justify-center align-middle mt-[10rem]"
      >
        <div className="feature-padding_two flex gap-2 justify-center align-middle  ">
          <div className="w-[50%] mt-12">
            <div>
              <h2 className="font-[700]  sm:text-3xl md:text-4xl lg:text-[32px]  mb-8  bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
                Providing enhanced features across <br />
                variety of industries
              </h2>
            </div>
            <div>
              <p className="text-[18px] text-[#8F9BB7] w-[70%]">
                Lorem ipsum dolor sit amet consectetur. Sit non diam justo
                fames. Blandit et purus mollis convallis malesuada egestas risus
                quam enim. Semper lorem rhoncus et felis tristique tellus
                volutpat orci. Dui elementum a sed.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <div className="flex gap-3">
                {" "}
                <div className="flex gap-2 justify-center align-middle bg-[#FFFFFF0D] bg-opacity-5% pr-6 pl-3 pt-2 pb-2 rounded-md ">
                  <div>
                    <img src={check} alt="" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-[600]">Law Firms</h3>
                  </div>
                </div>
                <div className="flex gap-2 justify-center align-middle bg-[#FFFFFF0D] bg-opacity-5% pr-6 pl-3 pt-2 pb-2 rounded-md ">
                  <div>
                    <img src={check} alt="" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-[600]">IT Consulting</h3>
                  </div>
                </div>
                <div className="flex gap-2 justify-center align-middle bg-[#FFFFFF0D] bg-opacity-5% pr-6 pl-3 pt-2 pb-2 rounded-md ">
                  <div>
                    <img src={check} alt="" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-[600]">Finances</h3>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                {" "}
                <div className="flex gap-2 justify-center align-middle bg-[#FFFFFF0D] bg-opacity-5% pr-6 pl-3 pt-2 pb-2 rounded-md ">
                  <div>
                    <img src={check} alt="" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-[600]">Law Firms</h3>
                  </div>
                </div>
                <div className="flex gap-2 justify-center align-middle bg-[#FFFFFF0D] bg-opacity-5% pr-6 pl-3 pt-2 pb-2 rounded-md ">
                  <div>
                    <img src={check} alt="" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-[600]">IT Consulting</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={about} alt="" className="h-[30rem] w-[30rem] -top-4 " />
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <h2 className="font-[700]  sm:text-3xl md:text-4xl lg:text-[32px]  mb-2  bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
          Exclusive Features
        </h2>
        <p className="text-[12px] text-[#8F9BB7] font-[400] font-beVietnam">
          Rmet facilisi arcu odio urna aenean erat. Pellentesque in vitae
          lobortis orci tincidunt <br /> facilisis. Pulvinar lacus ultricies
          turpis urna sapien.
        </p>
      </div>
      {/* Exlusive Features */}
      <div
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full relative -top-4 h-[90vh] flex flex-col justify-center align-middle mt-20"
      >
        <div className="flex flex-col justify-center items-center m-2 h-auto">
          <div className="flex mt-12  justify-center w-[80%] gap-8 h-auto">
            <div className="w-[40%] flex justify-center  align-middle">
              <img
                src={ft}
                alt=""
                className="w-[28rem] h-[28rem] ml-[10rem] mt-[5rem]"
              />
            </div>
            <div>
              <div className="w-auto gap-10 flex flex-col p-8">
                <div className="flex gap-6  border rounded-md pl-6 pr-6 pt-3 pb-3 bg-[#FFFFFF0D] bg-opacity-5">
                  <div className="flex justify-center items-center align-middle">
                    <img src={service1} alt="" className="w-[4rem] h-[4rem]" />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <h3 className="text-[27px] font-[600]">Law Firms</h3>
                    <p className="text-[16px] text-[#67687A] font-[400]">
                      Sed perspiciatis unde omnis <br /> natus error voluptatem
                    </p>
                  </div>
                  <div className="flex justify-center align-middle mt-2  items-center">
                    <div>
                      <img
                        src={export_1}
                        alt=""
                        className="w-[4rem] h-[4rem]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex  gap-6  rounded-md pl-6 pr-6 pt-3 pb-3 bg-[#FFFFFF0D] bg-opacity-5 ml-[5rem] -mr-[2rem] justify-center">
                  <div className="flex justify-center items-center align-middle">
                    <img src={service2} alt="" className="w-[4rem] h-[4rem]" />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <h3 className="text-[27px] font-[600]">IT Consulting</h3>
                    <p className="text-[16px] text-[#67687A] font-[400]">
                      Sed perspiciatis unde omnis <br /> natus error voluptatem
                    </p>
                  </div>
                  <div className="flex justify-center align-middle mt-2  items-center">
                    <div>
                      <img
                        src={export_1}
                        alt=""
                        className="w-[4rem] h-[4rem]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex  gap-6 rounded-md pl-6 pr-6 pt-3 pb-3 bg-[#FFFFFF0D] bg-opacity-5 ml-[7rem] -mr-[4rem]">
                  <div className="flex justify-center items-center align-middle">
                    <img src={service3} alt="" className="w-[4rem] h-[4rem]" />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <h3 className="text-[27px] font-[600]">Finances</h3>
                    <p className="text-[16px] text-[#67687A] font-[400]">
                      Sed perspiciatis unde omnis <br /> natus error voluptatem
                    </p>
                  </div>
                  <div className="flex justify-center align-middle mt-2  items-center">
                    <div>
                      <img
                        src={export_1}
                        alt=""
                        className="w-[4rem] h-[4rem]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex  gap-6  rounded-md pl-6 pr-6 pt-3 pb-3 bg-[#FFFFFF0D] bg-opacity-5 ">
                  <div className="flex justify-center items-center align-middle">
                    <img src={service4} alt="" className="w-[4rem] h-[4rem]" />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                    <h3 className="text-[27px] font-[600]">Business Growth</h3>
                    <p className="text-[16px] text-[#67687A] font-[400]">
                      Sed perspiciatis unde omnis <br /> natus error voluptatem
                    </p>
                  </div>
                  <div className="flex justify-center align-middle mt-2  items-center">
                    <div>
                      <img
                        src={export_1}
                        alt=""
                        className="w-[4rem] h-[4rem]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex  gap-6  rounded-md p-4 bg-[#FFFFFF0D] bg-opacity-5 ">
              <div className="flex justify-center items-center align-middle">
                <img src={service5} alt="" className="w-[4rem] h-[4rem]" />
              </div>
              <div className="flex flex-col justify-center gap-1">
                <h3 className="text-[27px] font-[600]">Insurance</h3>
                <p className="text-[16px] text-[#67687A] font-[400]">
                  Sed perspiciatis unde omnis <br /> natus error voluptatem
                </p>
              </div>
              <div className="flex justify-center align-middle mt-2  items-center">
                <div>
                  <img src={export_1} alt="" className="w-[5rem] h-[5rem]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 mt-12 mb-12">
            <button className="bg-[#7214FF] px-6 py-2 rounded-2xl text-[12px]">
              Get Started
            </button>
            <button className="border border-[#1F1F1F] px-6 py-2 rounded-2xl text-[12px]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="home-container">
        <Footer />
      </div>
    </div>
  );
};

export default MoreFeatures;
