import React from "react";
import hero from "../assets/hero-bg.png";
import feature from "../assets/career-hero.png";
import Footer from "../Footer/Footer";
import img from "../assets/career-img.png";
import circle from "../assets/Ellipse.png";
import people from "../assets/people.png";

import jobs from "../Data/JobList";
import JobCard from "../Cards/JobCard"; // Import JobCard

const Career = () => {
  return (
    <div className="mt-32  ">
      <div className="home-container relative flex flex-col-reverse lg:flex-row gap-4 lg:gap-8 justify-between items-center px-4 py-8 min-h-[600px]">
        <div className="absolute top-0 left-0 w-full h-[70%] z-0">
          <img
            src={hero}
            alt=""
            className="w-full h-max-content object-cover"
          />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center lg:items-start w-full lg:w-[50%] text-center lg:text-left px-4">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] p-4 bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
            One step closer to <br /> working with us
          </h1>
          <p className="text-[#8F9BB7] text-sm sm:text-base font-normal w-full lg:w-[90%] p-2 sm:p-4">
            Join our highly skilled teams and let's embark on our venture
            together.
          </p>
          <div className="p-2 sm:p-4 w-full sm:w-[60%] md:w-[50%] lg:w-[40%] mx-auto lg:mx-0">
            <button className="bg-[#7214FF] py-3 px-4 rounded-2xl text-sm sm:text-base w-full">
              Explore Jobs
            </button>
          </div>
        </div>
        <div className="relative z-10 flex justify-center lg:justify-end items-center w-full lg:w-[50%]">
          <img
            src={feature}
            alt=""
            className="w-[16rem] h-[18rem] sm:w-[22rem] sm:h-[20rem] lg:w-[28rem] lg:h-[24rem] object-contain"
          />
        </div>
      </div>
      <div className="min-h-screen py-10 px-4 md:px-[8rem]">
        {/* Heading */}
        <div className="text-center mt-10">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
            Newest Jobs for You
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#8F9BB7] font-normal mt-2">
            Get the fastest application so that your name is above other
            applicants
          </p>
        </div>

        {/* Job Categories */}
        <div className="text-[#959595] flex justify-center mt-[3rem] gap-6 p-4">
          <div className="w-full max-w-[800px] flex flex-wrap justify-center sm:justify-between gap-4">
            <div className="relative text-[#959595] group cursor-pointer hover:text-white text-center sm:text-left">
              All Recent
              <span className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-gradient-to-r from-[#CE9FFC] via-[#A582F7] to-[#7367F0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </div>

            <div className="relative text-[#959595] group cursor-pointer hover:text-white text-center sm:text-left">
              Finance
              <span className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-gradient-to-r from-[#CE9FFC] via-[#A582F7] to-[#7367F0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </div>

            <div className="relative text-[#959595] group cursor-pointer hover:text-white text-center sm:text-left">
              Development
              <span className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-gradient-to-r from-[#CE9FFC] via-[#A582F7] to-[#7367F0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </div>

            <div className="relative text-[#959595] group cursor-pointer hover:text-white text-center sm:text-left">
              Marketing
              <span className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-gradient-to-r from-[#CE9FFC] via-[#A582F7] to-[#7367F0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </div>

            <div className="relative text-[#959595] group cursor-pointer hover:text-white text-center sm:text-left">
              Specialist
              <span className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-gradient-to-r from-[#CE9FFC] via-[#A582F7] to-[#7367F0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="mt-8  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-20">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>

      <div className="home-container mt-[14rem] md:mt-0 lg:mt-0 xl:mt-0">
        <Footer />
      </div>
    </div>
  );
};

export default Career;
