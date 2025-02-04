import React, { useState } from "react";
import hero from "../assets/hero-bg.png";
import feature from "../assets/career-hero.png";
import Footer from "../Footer/Footer";
import img from "../assets/career-img.png";
import circle from "../assets/Ellipse.png";
import people from "../assets/people.png";
import axios from "axios";
import { MdClose } from "react-icons/md";
import CareerApplyCard from "../Cards/CareerApplyCard";

const Career = () => {
  const jobListings = [
    { id: 1, title: "UX Designer", company: "Advoit Digital Agency" },
    { id: 2, title: "UI Designer", company: "Creative Agency" },
    { id: 3, title: "Frontend Developer", company: "Tech Solutions" },
    { id: 4, title: "Frontend Developer", company: "Tech Innovations" },
    { id: 5, title: "Backend Developer", company: "CodeCraft Inc." },
    { id: 6, title: "Product Manager", company: "Visionary Solutions" },
  ];

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
        <div className="home-container mt-[2rem] grid grid-rows-2 gap-4 pl-[14rem] pr-[14rem] h-[64%] mb-[4rem]">
          {/* 1st row */}
          <div className="grid grid-cols-3 gap-4">
            {jobListings.slice(0, 3).map((job) => (
              <CareerApplyCard
                key={job.id}
                number={job.id}
                title={job.title}
                company={job.company}
              />
            ))}
          </div>
          {/* 2nd row */}
          <div className="grid grid-cols-3 gap-4">
            {jobListings.slice(3, 6).map((job) => (
              <CareerApplyCard
                key={job.id}
                number={job.id}
                title={job.title}
                company={job.company}
              />
            ))}
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
