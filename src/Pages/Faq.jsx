import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import faqData from "../Data/Faq.js";
import Footer from "../Footer/Footer.jsx";

const Faq = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFaq = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      <div className="text-white flex flex-col my-[8rem] gap-6">
        <h1 className="font-[700] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-center p-8 bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent">
          FAQs
        </h1>
        <div className="flex flex-col gap-6">
          <h1 className="text-[1.5rem] font-bold font-beVietnam">
            - General Issues
          </h1>
          <div className="border border-white/60 mt-[1rem] gap-2">
            <div className="flex px-8 py-4 gap-8 text-md flex-col">
              {faqData.generalIssues.map((item, index) => {
                const isOpen = openIndexes.includes(index);

                return (
                  <div
                    key={index}
                    className="flex flex-col gap-2 border-b border-gray-300/30 pb-4"
                  >
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleFaq(index)}
                    >
                      <h3 className="py-[1.5rem] text-[13px] lg:text-[1rem]">
                        {item.question}
                      </h3>

                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex items-center align-middle"
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4 md:h-6 md:w-6" />
                        ) : (
                          <Plus className="h-4 w-4 md:h-6 md:w-6" />
                        )}
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={
                        isOpen
                          ? { height: "auto", opacity: 1 }
                          : { height: 0, opacity: 0 }
                      }
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="text-white/60 text-sm py-3">
                        {item.answer}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-[1.5rem] font-bold font-beVietnam">
            - Booking FAQs
          </h1>
          <div className="border border-white/60 mt-[1rem] gap-2">
            <div className="flex px-8 py-4 gap-8 text-md flex-col">
              {faqData.bookingFaqs.map((item, index) => {
                const isOpen = openIndexes.includes(index);

                return (
                  <div
                    key={index}
                    className="flex flex-col gap-2 border-b border-gray-300/30 pb-4"
                  >
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleFaq(index)}
                    >
                      <h3 className="py-[1.5rem] text-[13px] lg:text-[1rem]">
                        {item.question}
                      </h3>

                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex items-center"
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4 md:h-6 md:w-6" />
                        ) : (
                          <Plus className="h-4 w-4 md:h-6 md:w-6" />
                        )}
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={
                        isOpen
                          ? { height: "auto", opacity: 1 }
                          : { height: 0, opacity: 0 }
                      }
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="text-white/60 text-sm py-3">
                        {item.answer}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
