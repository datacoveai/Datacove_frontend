import React from "react";
import email from "../assets/email.png";
import location from "../assets/location.png";
import insta from "../assets/insta.png";
import x from "../assets/x.png";
import box from "../assets/contact-box.png";
import link from "../assets/link.png";
import hero from "../assets/hero-bg.png";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <>
      <div className="home-container">
        <img
          src={hero}
          alt=""
          className="absolute top-0 left-0 w-full h-auto -z-40"
        />
        <div className="flex justify-center items-center flex-col mt-36">
          <h1 className="font-[700] text-[48px] bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
            Contact Us
          </h1>
        </div>
        <div className="w-full md:h-[60vh] mt-14 p-4 mb-14 md:flex justify-between gap-4  gradient-border  bg-[#FFFFFF1A] bg-opacity-10">
          <div className="md:w-[50%] bg-[#FFFFFF1A] bg-opacity-10 rounded-xl p-4 flex flex-col justify-between  mt-[5rem]">
            <div>
              <h3 className="text-[36px] text-[700] font-beVietnam font-bold">
                Contact Information
              </h3>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex gap-4 font-beVietnam font-bold">
                <img src={email} alt="" />
                <p className="text-[18px]">info@datacove.com</p>
              </div>

              <div className="flex gap-3 font-beVietnam font-bold h-14">
                <img src={location} alt="" className="h-8 w-8" />
                <p className="text-[14px]">
                  08 Triveni Tower 3rd Floor, Central Avenue, GandhiPutla,
                  Itwari, Nagpur 440002, India.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center align-middle gap-3">
              <img src={insta} alt="" />
              <img src={x} alt="" />
              <img src={link} alt="" className="h-10 w-10" />
            </div>
          </div>
          <div className="md:w-[70%] mt-[5rem] flex flex-col h-auto justify-between">
            <form className=" flex flex-col pl-4 gap-8 pr-4">
              <div className="flex flex-row gap-4 justify-between">
                <div className="flex flex-col w-[50%] gap-4">
                  <div className="flex flex-col ">
                    <label className="font-beVietnam text-[16px]">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="bg-inherit border-b border-[#FFFFFF]  h-9 text-sm placeholder:text-xs focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label className="font-beVietnam text-[16px]">Email</label>
                    <input
                      type="email"
                      className="bg-inherit border-b    h-9 text-sm placeholder:text-xs focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col  w-[50%] gap-4">
                  <div className="flex flex-col">
                    <label className="font-beVietnam text-[16px]">
                      Last Name
                    </label>
                    <input className="bg-inherit border-b    h-9 text-sm placeholder:text-xs focus:outline-none" />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-beVietnam text-[16px]">
                      Phone Number
                    </label>
                    <div className="flex">
                      {" "}
                      <span className="font-beVietnam text-[16px] border-b  border-[#FFFFFF] ">
                        +91
                      </span>
                      <input
                        type="number"
                        className="bg-inherit border-b w-full border-[#FFFFFF] ml-4 h-9 text-sm placeholder:text-xs focus:outline-none "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[16px] text-[600] font-beVietnam">
                  Select Subject?
                </h3>
                <div className="flex gap-6">
                  {" "}
                  <div className="flex gap-3 ">
                    <input
                      type="checkbox"
                      className="appearance-none border-2 border-[#7214FF] rounded-full w-5 h-5 checked:bg-[#7214FF] checked:border-[#7214FF] focus:outline-none"
                    />
                    <p className="text-[15px]">Request a demo?</p>
                  </div>
                  <div className="flex gap-3">
                    <input
                      type="checkbox"
                      className="appearance-none border-2 border-[#7214FF] rounded-full w-5 h-5 checked:bg-[#7214FF] checked:border-[#7214FF] focus:outline-none"
                    />
                    <p className="text-[15px]">Brand Identity</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-beVietnam text-[16px]">Message</h3>
                <textarea
                  name=""
                  id=""
                  placeholder="Write your message"
                  className="bg-inherit border-b w-full h-9 text-sm placeholder:text-xs placeholder:text-white flex items-center pl-2 focus:outline-none"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button className="bg-[#7214FF] pl-6 pr-6 pt-3 pb-3 rounded-2xl text-[12px]">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
