import React, { useState } from "react";
import email from "../assets/email.png";
import location from "../assets/location.png";
import insta from "../assets/insta.png";
import x from "../assets/x.png";
import box from "../assets/contact-box.png";
import link from "../assets/link.png";
import hero from "../assets/hero-bg.png";
import Footer from "../Footer/Footer";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import axios from "axios";

// 4MFf344zFLyc

const Contact = () => {
  const [selected, setSelected] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState({
    number: "",
    countryCode: "",
    countryName: "",
  });
  console.log(phoneNumber.countryName);
  // const [valid, setValid] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    field: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        subject: {
          ...prev.subject,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handlePhoneNumber = (e, value, name) => {
    // console.log(value?.dialCode);
    const countryCode = value?.dialCode;
    const number = e;
    const countryName = value.name;
    setPhoneNumber({
      number: number,
      countryCode: countryCode,
      countryName: countryName,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const serviceId = "service_sr8tcxi";
    const templateId = "template_e38eucg";
    const publicKey = "LQzQ5Wq6NWU_oVEUC";

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      from_country: phoneNumber.countryName,
      phone_number: phoneNumber.number,
      field: formData.field,
      subject: selected,
      message: formData.message,
      to_name: "DatacoveAI",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        toast.success("Message sent successfully");
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          field: "",
          subject: {
            demo: false,
            brandIdentity: false,
          },
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email", error);
        toast.error("Failed to send the message. Please try again.");
      });
  };

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

            <div className="flex justify-center items-center align-middle gap-3 mt-10 md:mt-0">
              <img src={insta} alt="" />
              <img src={x} alt="" />
              <img src={link} alt="" className="h-10 w-10" />
            </div>
          </div>
          <div className="md:w-[70%] mt-[5rem] flex flex-col h-auto justify-between">
            <form
              className=" flex flex-col pl-4 gap-8 pr-4"
              onSubmit={onSubmit}
            >
              <div className="flex flex-row gap-4 justify-between">
                <div className="flex flex-col w-[50%] gap-4">
                  <div className="flex flex-col ">
                    <label className="font-beVietnam text-[16px]">
                      Full Name
                    </label>
                    <input
                      value={formData.fullName}
                      name="fullName"
                      type="text"
                      onChange={handleChange}
                      className="bg-inherit border-b border-[#FFFFFF]  h-9 text-sm placeholder:text-xs focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-beVietnam text-[16px]">Field</label>
                    <select
                      name="field"
                      value={formData.field}
                      onChange={handleChange}
                      className="bg-inherit border-b h-9 text-sm focus:outline-none"
                    >
                      <option value="" disabled className="text-black">
                        Select an option
                      </option>
                      <option value="Legal " className="text-black">
                        Legal
                      </option>
                      <option value="Supply Chain" className="text-black">
                        Supply Chain
                      </option>
                      <option value="Real Estate" className="text-black">
                        Real Estate
                      </option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col  w-[50%] gap-4">
                  <div className="flex flex-col ">
                    <label className="font-beVietnam text-[16px]">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      name="email"
                      onChange={handleChange}
                      className="bg-inherit border-b  h-9 text-sm placeholder:text-xs focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-beVietnam text-[16px] flex flex-col ">
                      Phone:
                    </label>

                    <div className="flex flex-col ">
                      <PhoneInput
                        country={"ca"}
                        value={phoneNumber.number}
                        onChange={handlePhoneNumber}
                        inputProps={{ required: true }}
                        name="phoneNumber"
                        buttonClass={{
                          border: "none",
                        }}
                        dropdownClass="custom-dropdown-class"
                        searchClass="custom-search-class"
                        containerStyle={{
                          backgroundColor: "inherit",

                          marginBottom: "10px",
                          marginTop: "5px",
                        }}
                        inputStyle={{
                          backgroundColor: "inherit",
                          border: "1px solid white",
                          width: "95%",
                        }}
                        buttonStyle={{
                          backgroundColor: "inherit",
                        }}
                        dropdownStyle={{
                          backgroundColor: "inherit",
                          border: "none",
                          color: "white",
                        }}
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
                  <div className="flex gap-3">
                    <input
                      type="checkbox"
                      checked={selected === "Request a Demo"}
                      onChange={() =>
                        setSelected(
                          selected === "Request a Demo"
                            ? null
                            : "Request a Demo"
                        )
                      }
                      className="appearance-none border-2 border-[#7214FF] rounded-full w-5 h-5 checked:bg-[#7214FF] checked:border-[#7214FF] focus:outline-none"
                    />
                    <p className="text-[15px]">Request a demo?</p>
                  </div>
                  <div className="flex gap-3">
                    <input
                      type="checkbox"
                      checked={selected === "Brand Identity"}
                      onChange={() =>
                        setSelected(
                          selected === "Brand Identity"
                            ? null
                            : "Brand Identity"
                        )
                      }
                      className="appearance-none border-2 border-[#7214FF] rounded-full w-5 h-5 checked:bg-[#7214FF] checked:border-[#7214FF] focus:outline-none"
                    />
                    <p className="text-[15px]">Brand Identity</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-beVietnam text-[16px]">Message</h3>
                <textarea
                  value={formData.message}
                  id=""
                  placeholder="Write your message"
                  name="message"
                  onChange={handleChange}
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

// const onSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await axios.post(
//       "http://localhost:5000/contact",
//       formData,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     toast.success(response.data.message);
//   } catch (error) {
//     console.error("Error:", error);
//     alert("An error occurred. Please try again.");
//   }
// };
