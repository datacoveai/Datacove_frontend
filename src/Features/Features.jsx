import React from "react";
import icon from "../assets/Vector.png";
import icon2 from "../assets/Mask group.png";
import icon3 from "../assets/image.png";
import icon4 from "../assets/Image wrapper.png";
import int_bg_2 from "../assets/integratedBg_2.png";
import int_bg from "../assets/integratedBg.png";
import int_bg3 from "../assets/bg-three.png";
import int_bg4 from "../assets/bg-four.png";

const Features = () => {
  return (
    <div className="mt-10 p-4">
      {/* Heading Section */}
      <div className="flex justify-center flex-col items-center gap-2">
        <h2 className="text-[24px] md:text-[36px] lg:text-[42px] bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent font-bold text-center">
          Explore the features of our
        </h2>
        <div className="flex flex-wrap gap-2 items-center justify-center">
          <img src={icon} alt="Icon" className="h-8 w-12 md:h-10 md:w-14" />
          <h2 className="text-[18px] md:text-[30px] lg:text-[36px] bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent font-bold">
            AI For Document Review
          </h2>
        </div>
      </div>

      {/* Feature Section 1 */}
      <div className="mt-10">
        <div className="flex flex-col lg:flex-row justify-between bg-[#282D45] bg-opacity-40 border border-gray-600 border-opacity-20 rounded-[4px]">
          <div className="relative w-full h-auto lg:w-[60%] px-6 py-8 md:px-12">
            <h3 className="text-[18px] md:text-[24px] font-bold font-beVietnam">
              Unleashing AIs Potential <br /> in your Documents
            </h3>
            <p className="text-[12px] md:text-[14px] text-[#8F9BB7] mt-3 text-justify">
              Datacove integrates advanced AI capabilities directly into
              Microsoft Word. With a single click, lawyers can open relevant
              documents in Word, while continuously accessing Datacoves AI
              analysis through a sidebar.
            </p>
            <p className="text-[12px] md:text-[14px] text-[#8F9BB7] mt-3 text-justify">
              Additionally, Datacove seamlessly connects with various Virtual
              Data Rooms (VDRs) such as Box, Dropbox, HighQ, Intralinks,
              Ansarada, and Sterling, facilitating the swift and effortless
              transfer of documents.
            </p>
          </div>
          <img
            src={icon2}
            alt="Feature Illustration"
            className="h-auto w-full lg:w-[40%] object-contain p-6"
          />
        </div>
      </div>

      <button className="border border-[#1F1F1F] rounded-3xl px-4 py-2 mt-5 text-sm">
        Learn more
      </button>

      {/* Feature Section 2 */}
      <div className="mt-6 flex flex-col lg:flex-row gap-6">
        {/* Card 1 */}
        <div className="w-full lg:w-[40%] bg-[#282D45] bg-opacity-40 border border-gray-600 border-opacity-20 rounded-[4px]">
          <div className=" relative w-full h-auto p-4 md:p-6">
            <img
              src={icon3}
              alt="Integrated Tools"
              className="w-full h-auto relative z-40"
            />
            <img
              src={int_bg}
              alt=""
              className="absolute top-0 left-0 w-full h-auto z-40"
            />
          </div>
          <div className="relative w-full h-auto p-4 md:p-8">
            <img
              src={int_bg_2}
              alt=""
              className="absolute top-0 left-0 w-full h-auto z-40"
            />
            <h4 className="text-[18px] md:text-[24px] font-bold font-beVietnam mb-3">
              Integrated Tools
            </h4>
            <p className="text-[12px] md:text-[14px] text-[#8F9BB7] text-justify">
              Datacove’s advanced workflow tools eliminate redundant efforts
              through features like automated task distribution, note-taking,
              and batch document allocation. <br /> Project managers can
              efficiently monitor review progress with real-time updates on
              assigned tasks, task sizes, and completion status.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full lg:w-[60%] bg-[#282D45] bg-opacity-40 border border-gray-600 border-opacity-20 rounded-[4px]">
          <div className="relative w-full h-auto p-4 md:p-8">
            <img
              src={int_bg3}
              alt=""
              className="absolute top-0 left-0 w-full h-auto z-50"
            />
            <h4 className="text-[18px] md:text-[24px] font-[700]">
              AI-Driven Insights for Data Rooms
            </h4>
            <p className="text-[12px] md:text-[14px] font-[400] text-[#8F9BB7] text-justify mt-4">
              Datacove operates seamlessly out-of-the-box, automatically
              extracting key details from contracts and delivering immediate
              insights across more than 1,000 legal concepts, including contract
              terms, clauses, and governing law. <br /> Its AI-powered search
              capabilities, including conceptual search, and interactive widgets
              enable lawyers to focus their review on the most critical aspects
              efficiently.
            </p>
            <div className="flex justify-center bg-[#282D45] bg-opacity-40 border border-gray-600 border-opacity-20 rounded-[4px] mt-4">
              <img
                src={icon4}
                alt="Icon"
                className="w-[92%] h-auto m-4 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
        <button className="bg-[#7214FF] px-6 py-2 rounded-2xl text-[12px]">
          Get Started
        </button>
        <button className="border border-[#1F1F1F] px-6 py-2 rounded-2xl text-[12px]">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Features;
