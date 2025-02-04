import React, { useState } from "react";
import img from "../assets/career-img.png";
import circle from "../assets/Ellipse.png";
import people from "../assets/people.png";
import axios from "axios";
import { FaCheck } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import toast from "react-hot-toast";

const CareerApplyCard = ({ company, title }) => {
  const [file, setFile] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [imageName, setImageName] = useState();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    number: "",
  });

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    setImageName(selectedFile.name);
    if (selectedFile) {
      setFile(selectedFile);
      console.log("Selected file:", selectedFile);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update the correct field
    }));
  };

  const handleUpload = async () => {
    console.log("handleUpload"); // Debugging
    console.log("email", formData.email);

    if (!file || !formData.email) {
      alert("Please enter your email and select a file.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("file", file);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("name", formData.name);
    formDataToSend.append("number", formData.number);
    formDataToSend.append("Company", company);
    formDataToSend.append("title", title);

    setLoading(true);
    setOpenModal(false);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success(response.data.message);
      // setOpenModal(false);
      setLoading(false);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload. Try again.");
    }
  };

  return (
    <div className="bg-[#150C46] flex   p-4 relative overflow-hidden rounded-[8px]">
      <img src={img} alt="" className="absolute bottom-0 right-[4rem] " />
      <img
        src={circle}
        alt=""
        className="absolute bottom-0 right-[8rem] -z-1"
      />
      <div className="w-full gap-3 flex flex-col justify-between p-2">
        <div className="flex justify-between">
          <button className="border-white border-[0.9px] pt-2 pb-2 rounded-[10px] pl-6 pr-6">
            Full Time
          </button>
          <button className="border-white border-[0.9px] pt-2 pb-2 pl-6 pr-6 rounded-[10px]">
            Onsite
          </button>
          <button className="border-white border-[0.9px] pt-2 pb-2 pl-6 pr-6 rounded-[10px]">
            $200K
          </button>
        </div>
        <div>
          <h2 className="text-[22px] font-[700]">{title}</h2>
          <p>{company}</p>
        </div>

        <div className="flex justify-between z-10">
          <div>
            <button
              className="px-6 py-2 text-white font-semibold rounded-md shadow-lg bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] hover:opacity-90 transition"
              onClick={() => {
                setOpenModal(!openModal);
              }}
            >
              Apply
            </button>
          </div>
          <div className="flex w-[35%] justify-between items-center">
            <div>
              <img src={people} alt="" />
            </div>
            <div>
              <p>24 applied</p>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="border-white border-[1px] bg-white p-4 rounded-[10px] w-[90%] max-w-md shadow-lg">
            <h3 className="text-black mb-[15px] font-beVietnam">
              You are applying for {title}
            </h3>
            <p className="text-black mb-[15px] font-beVietnam">
              Company: {company}
            </p>
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf"
              style={{ display: "none" }}
              id="fileInput"
            />
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="bg-inherit focus:outline-none border-b p-2 text-black"
              />
              <input
                type="phone"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="bg-inherit focus:outline-none border-b p-2 text-black"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter your email"
                onChange={handleChange}
                className="bg-inherit focus:outline-none border-b p-2 text-black"
              />

              <input
                type="file"
                className="hidden"
                id="file-upload"
                onChange={handleFileChange}
                accept=".pdf"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer text-center p-2 border rounded-md text-black"
              >
                {imageName ? ` ${imageName}` : "Upload Resume"}
              </label>

              {file && (
                <button
                  onClick={handleUpload}
                  className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    <span>Loading...</span> // Show loading text or spinner
                  ) : (
                    "Submit"
                  )}
                </button>
              )}

              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md flex items-center justify-center"
                onClick={() => {
                  setOpenModal(false);
                  setFile(null);
                  setImageName(null);
                  setFormData({ email: "", name: "", number: "" }); // Reset all fields
                }}
              >
                <MdClose size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerApplyCard;
