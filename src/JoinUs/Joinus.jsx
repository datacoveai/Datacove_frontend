import React from "react";
import mask from "../assets/Mask.png";
import shape from "../assets/shape.png";
import cloud from "../assets/cloud.png";

const Joinus = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="mt-12 md:mt-24 flex flex-col justify-center items-center w-full md:w-[80%]">
        <div
          style={{
            backgroundImage: `url(${shape})`,
          }}
          className="bg-cover bg-center h-40 sm:h-56 md:h-64 w-[80%] lg:w-full rounded-md relative"
        >
          <div
            style={{
              backgroundImage: `url(${cloud})`,
              backgroundRepeat: "no-repeat",
            }}
            className="bg-center flex items-center justify-center h-full absolute lg:top-1.5 top-0 left-0 w-full"
          >
            <div className="flex justify-center items-center flex-col text-center px-4 md:px-0">
              <h2 className="text-white text-[20px] sm:text-2xl md:text-[30px] font-bold">
                Join Us
              </h2>
              <p className="text-[10px] sm:text-sm md:text-base mt-2 text-[#8F9BB7]">
                Join our 400,000+ person community and contribute to a more
                <br />
                private and decentralized internet. Start for free.
              </p>
              <button className="bg-[#5865F2] px-4 py-2 sm:px-6 sm:py-3 md:pl-6 md:pr-6 md:pt-3 md:pb-3 rounded-2xl text-[10px] sm:text-[12px] md:text-sm mt-4 md:mt-5">
                Book A Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const Joinus = () => {
//   return (
//     <div className="mt-24 flex justify-center items-center w-full ">
//       <div
//         style={{
//           backgroundImage: `url(${shape})`,
//         }}
//         className="bg-cover bg-center h-64 w-[80%] relative rounded-md"
//       >
//         <div
//           style={{
//             backgroundImage: `url(${cloud})`,
//             backgroundRepeat: "no-repeat",
//           }}
//           className="bg-contain bg-center flex items-center justify-center h-full  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%]"
//         >
//           <div className="flex justify-center align-middle items-center flex-col">
//             {" "}
//             <h2 className="text-white text-[30px] font-bold">Join Us </h2>
//             <p className="text-sm mt-2 text-[#8F9BB7] text-center">
//               Join our 400,000+ person community and contribute to a more <br />
//               private and decentralized internet. Start for free.
//             </p>
//             <button className="bg-[#5865F2] pl-4 pr-4 pt-2 pb-2  rounded-2xl text-[12px] mt-5">
//               Book A Demo
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Joinus;
