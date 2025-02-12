import React from "react";
import vector from "../assets/Vector.png";
import bag from "../assets/Dashboard/bag.png";
import draft from "../assets/Dashboard/draft.png";
import question from "../assets/Dashboard/question.png";
import case_img from "../assets/Dashboard/case.png";
import { ChevronRight } from "lucide-react";

const DashboardContent = () => {
  return (
    <div className="px-[3rem] flex gap-6">
      {/* Document Review */}
      <div className="space-y-3 lg:space-y-10 w-[60%]">
        <div className="flex items-center gap-3">
          <img src={vector} alt="" />
          <h2 className="bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent font-[700] text-[2rem]">
            AI For Document Review
          </h2>
        </div>
        <p className="bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent text-[1.5rem]">
          Which legal Task can AI accelerate for you today?
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-6 p-2 min-w-[80%]">
          <div className="flex items-center gap-6 border-dotted border-white  border-2 p-6 rounded-[1rem]">
            <img src={bag} alt="Bag" className=" object-cover" />
            <p className="bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
              Ask a Question ?
            </p>
          </div>
          <div className="flex items-center gap-6 border-dotted border-white  border-2 p-6 rounded-[1rem]">
            <img src={draft} alt="Draft" className=" object-cover" />{" "}
            <p className="bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
              Create a draft
            </p>
          </div>
          <div className="flex items-center gap-6 border-dotted border-white  border-2 p-6 rounded-[1rem]">
            <img src={question} alt="Question" className=" object-cover" />{" "}
            <p className="bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
              Summarize a case
            </p>
          </div>
          <div className="flex items-center gap-6 border-dotted border-white  border-2 p-6 rounded-[1rem]">
            <img src={case_img} alt="Case" className=" object-cover" />{" "}
            <p className="bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
              Ask a question?
            </p>
          </div>
        </div>
      </div>

      {/* Ask Now */}
      <div className="w-[40%] my-[4rem] flex justify-center items-center">
        <div className="max-h-auto bg-[#1A114A] w-[90%] py-[2rem] px-[4rem] rounded-[1rem]">
          <h3 className="font-beVietnam text-lg underline underline-offset-[5px] font-bold mb-[1rem]">
            Having Doubts?
          </h3>
          <div className="border border-white p-4 rounded-[10px] flex flex-col justify-between h-[20rem]">
            <p>Ask Any legal questions?</p>
            <button className="bg-white w-full rounded-md text-[#060b27] font-bold flex items-center justify-center p-3">
              Ask Now <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
