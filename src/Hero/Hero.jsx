import React from "react";
import image from "../assets/hero-image.png";
import hero from "../assets/hero-bg.png";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col mt-28 sm:mt-10 lg:mt-36 px-4">
        <h1 className="font-[700] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-center p-8 bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
          AI-Driven Automated Contract Analysis
        </h1>

        <p className="text-center w-full sm:w-[80%] md:w-[60%] lg:w-[40%] text-sm sm:text-base lg:text-[14px] mt-3 sm:mt-4 lg:mt-5 text-[#8F9BB7]">
          Datacove’s Diligence leverages advanced AI to accelerate contract
          reviews for M&A, lease agreements, compliance, and repapering.
          Offering instant insights across 1,000+ legal concepts, it helps
          lawyers prioritize tasks, adapt quickly, and stay ahead of the
          competition.
        </p>

        <button className="bg-[#7214FF] px-4 py-2 sm:px-6 sm:py-3 rounded-2xl text-sm sm:text-[12px] mt-4 sm:mt-5 lg:mt-6">
          Get a Demo
        </button>
      </div>

      <div className="flex justify-center items-center mt-4 sm:mt-6 lg:mt-8 px-4">
        <img
          src={image}
          alt="AI-driven Contract Analysis"
          className="w-full sm:w-[60%] md:w-[80%] lg:w-[100%] object-contain filter hue-rotate-190 saturate-250 brightness-100"
        />
      </div>
      <img
        src={hero}
        alt=""
        className="absolute top-0 left-0 w-full h-auto -z-40"
      />
    </div>
  );
};
// const Hero = () => {
//   return (
//     <div>
//       <div className="flex justify-center items-center flex-col mt-10">
//         <h1 className="font-[700] text-[48px] bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
//           AI-Driven Automated Contract Analysis
//         </h1>

//         <p className="text-center w-[40%] text-[14px] mt-5 text-[#8F9BB7]">
//           Datacove’s Diligence leverages advanced AI to accelerate contract
//           reviews for M&A, lease agreements, compliance, and repapering.
//           Offering instant insights across 1,000+ legal concepts, it helps
//           lawyers prioritize tasks, adapt quickly, and stay ahead of the
//           competition.
//         </p>
//         <button className="bg-[#7214FF] pl-4 pr-4 pt-2 pb-2  rounded-2xl text-[12px] mt-5">
//           Get a Demo
//         </button>
//       </div>
//       {/* <hr className="border-t h-[.5px] mt-4 border-[#1F1F1F]" /> */}

//       <div className="flex justify-center items-center mt-5">
//         <img
//           src={image}
//           alt=""
//           className="filter hue-rotate-190 saturate-250 brightness-100"
//         />
//       </div>
//     </div>
//   );
// };

export default Hero;
