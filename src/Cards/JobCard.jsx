import React, { useState } from "react";
import img from "../assets/career-img.png";
import circle from "../assets/Ellipse.png";
import people from "../assets/people.png";
import axios from "axios";
import toast from "react-hot-toast";
import { MdClose } from "react-icons/md";

const JobCard = ({ job }) => {
  const [file, setFile] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [imageName, setImageName] = useState();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    number: "",
  });

  console.log("JOB", job);

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
  const handleUpload = async (event) => {
    event.preventDefault();

    // Creating FormData to append both text and file data
    const formDataToSend = new FormData();
    formDataToSend.append("email", formData.email);
    formDataToSend.append("name", formData.name);
    formDataToSend.append("number", formData.number);

    if (file) {
      formDataToSend.append("file", file); // Attach the selected file
    }

    try {
      const response = await axios.post(
        "https://getform.io/f/axoodnyb",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for file upload
          },
        }
      );
      if (response.status === 200) {
        toast.success("Application Sent");
        setOpenModal(!openModal);
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert("Error submitting form.");
    }
  };

  return (
    <div className="bg-[#150C46] flex p-4 relative overflow-hidden shadow-lg">
      <img
        src={img}
        alt="Job Icon"
        className="absolute bottom-0 right-[4rem]"
      />
      <img
        src={circle}
        alt="Circle Background"
        className="absolute bottom-0 right-[8rem] -z-1"
      />
      <div className="w-full gap-10 flex flex-col justify-between p-2">
        <div className="flex justify-between flex-wrap gap-2">
          <span className="border-white border pt-2 pb-2 px-4 rounded-md">
            {job.type}
          </span>
          <span className="border-white border pt-2 pb-2 px-4 rounded-md">
            {job.location}
          </span>
          <span className="border-white border pt-2 pb-2 px-4 rounded-md">
            {job.salary}
          </span>
        </div>
        <div>
          <h2 className="text-[22px] font-bold text-white">{job.title}</h2>
          <p className="text-[#AAB2D5] text-[16px]">{job.company}</p>
        </div>
        <div className="flex justify-between items-center">
          <button
            className="px-6 py-2 text-white font-semibold rounded-md shadow-lg bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] hover:opacity-90 transition"
            onClick={() => {
              setOpenModal(!openModal);
            }}
          >
            Apply
          </button>
          <div className="flex items-center gap-2">
            <img src={people} alt="Applicants" className="w-6" />
            <p className="text-white">{job.applicants} applied</p>
          </div>
        </div>
      </div>
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 shadow-lg backdrop-blur-lg">
          <div className="border-[violet] border-[1px] bg-[#150c46] p-4 rounded-[10px] w-[90%] max-w-md shadow-lg">
            <h3 className="text-white mb-[15px] font-beVietnam text-center">
              You are applying for {job.title}
            </h3>
            <p className="text-white mb-[15px] font-beVietnam text-center">
              {job.company}
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
                className="cursor-pointer text-center p-2 border rounded-md text-white"
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
export default JobCard;
