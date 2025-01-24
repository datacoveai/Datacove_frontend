import React from "react";
import footerbg from "../assets/footerbg.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkdin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <div className="mb-24">
      <div
        style={{
          backgroundImage: `url(${footerbg})`,
        }}
        className="bg-cover bg-center  md:bg-auto flex flex-col justify-between items-stretch  relative h-auto rounded-md pt-14 mt-8 md:justify-center md:m-auto"
      >
        <div className="flex flex-col md:flex-row md:justify-center md:items-start items-center  md:gap-12">
          <div className="flex flex-col md:justify-between gap-4 w-80 md:mr-6    ">
            <h2 className="text-[20px] font-bold text-center md:text-start">
              LOGO
            </h2>
            <div className="bg-[#262d52] flex flex-col bg-opacity-40 p-4 gap-4 border border-[#4e4e4e] border-opacity-20 rounded-md ">
              <h3 className="text-[18px] text-[700] font-bold font-beVietnam">
                Subscribe to our newsletter
              </h3>
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-[#262d52] bg-opacity-40 rounded-3xl p-2 h-9 text-sm placeholder:text-xs"
              />
              <button className="bg-[#7214FF] pl-6 pr-6 pt-3 pb-3 rounded-2xl text-[12px]">
                Subscribe
              </button>
            </div>
          </div>

          {/* Pages Section */}
          <div className="flex flex-col justify-between text-[#8F9BB7] flex-grow mt-8 md:mt-0 md:ml-18 items-center md:items-start gap-4">
            <h4 className="text-[15px] font-bold font-beVietnam">Pages</h4>
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
            <div>Blog</div>
            <div>Blog Post</div>
            <div>Pricing Single</div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col justify-between text-[#8F9BB7] flex-grow mt-8 md:mt-0 md:ml-18 items-center md:items-start gap-4">
            <h4 className="text-[15px] font-bold font-beVietnam">Links</h4>
            <div>Features</div>
            <div>Careers</div>
            <div>Careers Single</div>
            <div>Request a demo</div>
            <div>Login</div>
            <div>Sign up</div>
          </div>

          {/* Utility Pages Section */}
          <div className="flex flex-col justify-between text-[#8F9BB7] flex-grow mt-8 md:mt-0 md:ml-18 items-center md:items-start gap-4">
            <div>
              <h4 className="text-[15px] font-bold font-beVietnam">
                Utility Pages
              </h4>
            </div>

            <div>Style guide</div>
            <div>Password Protected</div>
            <div>404 not found</div>
            <div>Licenses</div>
            <div>Changelog</div>
          </div>
        </div>

        {/* Horizontal line */}
        <hr className="border-t h-[.5px] mt-12 border-[#282D45]" />

        {/* Footer Section */}
        <div className="flex justify-between mt-4 mb-8 flex-col md:flex-row items-center md:items-center">
          <p className="text-[#8F9BB7] text-[12px]">Copyright @ product</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={twitter} alt="Twitter" />
            <img src={linkdin} alt="LinkedIn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <div>Style guide</div>
<div>Password Protected</div>
<div>404 not found</div>
<div>Licenses</div>
<div>Changelog</div> */
}