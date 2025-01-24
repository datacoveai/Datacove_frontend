import React from "react";
import blog_image from "../assets/Blog_image.png";
import blog_image1 from "../assets/Blog_image_1.png";
import blog_image2 from "../assets/Blog_image_2.png";
import right from "../assets/right.png";

const Productnews = () => {
  return (
    <div className="mt-24 px-4 md:px-8 lg:px-1 mb-24">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="font-[700] text-[28px] md:text-[36px] lg:text-[42px] bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent text-center md:text-left">
          Product in the news
        </h2>
        <div className="mt-4 md:mt-0">
          <button className="bg-[#7214FF] px-6 py-3 rounded-2xl text-[12px]">
            Browse all news
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-4 mt-8">
        {[blog_image, blog_image2, blog_image1].map((image, index) => (
          <div
            key={index}
            className="w-full lg:w-[50%] bg-[#262d52] bg-opacity-40 p-4 border border-[#4e4e4e] border-opacity-20 rounded-md"
          >
            <div
              style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="h-60 w-full bg-cover bg-center rounded-md mb-4"
            ></div>
            <div>
              <h2 className="text-[16px] lg:text-[18px] text-white font-bold font-beVietnam mb-4">
                {index === 0
                  ? "Product Mail is taking on Gmail by betting on privacy"
                  : index === 1
                  ? "Wants You To Sign Out Of Google Workspace Forever"
                  : "The Best Email Encryption Services for 2023"}
              </h2>
              <p className="text-[#8F9BB7] text-[12px] text-justify">
                Ramet consectetur. Est porttitor mattis pharetra sit id viverra.
                Vivamus mauris augue pharetra cras turpis faucibus elit urna.
              </p>
            </div>
            <hr className="border-t h-[.5px] mt-4 border-[#282D45]" />
            <div className="flex justify-between mt-4">
              <p className="text-[10px]">February 8, 2023</p>
              <div className="flex items-center gap-2">
                <button className="text-[12px]">Read more</button>
                <img src={right} alt="" height={14} width={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productnews;
