import { ArrowDown, Send, Upload } from "lucide-react";
import React, { useState } from "react";
import { File, X } from "lucide-react";
import logo from "../assets/Vector.png";
import dp from "../assets/Dashboard/dp.png";
const SummarizeDocument = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const messages = [
    {
      type: "bot",
      content:
        "Hello! I've received your document. What would you like to know about it?",
    },
    {
      type: "user",
      content: "Can you summarize the main points of the document?",
    },
  ];

  return (
    <div className="min-h-screen  text-white p-6">
      <h3 className="font-[500] text-2xl sm:text-3xl md:text-4xl lg:text-[38px] text-[#9DA1B3] mb-6">
        Summarize your document
      </h3>

      {!uploadedFile ? (
        // Upload Section
        <div className="flex flex-col items-center justify-center min-h-[60vh] bg-[#170C4B] rounded-2xl">
          <label className="cursor-pointer group">
            <input
              type="file"
              className="hidden"
              onChange={handleFileUpload}
              accept=".pdf,.doc,.docx,.txt"
            />
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-[#1A114A] rounded-full flex items-center justify-center group-hover:bg-[#060B27] transition-colors">
                <Upload className="w-8 h-8 text-[#00DFA2]" />
              </div>
              <p className="text-lg font-medium">Upload your document</p>
              <p className="text-sm text-gray-400">
                Supported formats: PDF, DOC, DOCX, TXT
              </p>
            </div>
          </label>
        </div>
      ) : (
        <>
          {/* Upload Success Section */}
          <div className="bg-[#1A114A]/30 rounded-2xl p-6 mb-6 w-full">
            <div className="flex items-center gap-2 text-emerald-400 mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M16.6663 5L7.49967 14.1667L3.33301 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[#00DFA2]">File uploaded successfully</span>
            </div>

            {/* File Card */}
            <div className="bg-[#0A0B1C] rounded-lg p-4 flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <File className="w-6 h-6" />
                <div>
                  <p className="font-medium">{uploadedFile.name}</p>
                  <p className="text-sm text-gray-400">
                    {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <button
                className="hover:bg-[#1A114A]/50 p-1 rounded-full transition-colors"
                onClick={() => {
                  setUploadedFile(null);
                }}
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="text-sm text-gray-400">
              Submitted on {new Date().toLocaleDateString()} (
              {new Date().toLocaleTimeString()})
            </div>
          </div>

          <>
            {/* Chat Area */}
            <div className="flex-1 min-h-[400px] bg-[#170C4B] rounded-2xl mb-6 p-6">
              {messages.map((message, index) =>
                message.type === "bot" ? (
                  // Bot Message
                  <div key={index} className="flex items-start gap-2 mb-6">
                    <div className="w-8 h-8 flex-shrink-0 bg-[#0A0B1C] rounded-full flex items-center justify-center">
                      {/* <Bot className="w-5 h-5 text-[#00DFA2]" /> */}
                      <img
                        src={logo}
                        alt=""
                        className="w-5 h-5 text-[#00DFA2]"
                      />
                    </div>
                    <div className="bg-[#1A114A]/50 rounded-2xl p-4 max-w-[80%]">
                      <p className="text-gray-200">{message.content}</p>
                    </div>
                  </div>
                ) : (
                  // User Message
                  <div
                    key={index}
                    className="flex items-start gap-4 flex-row-reverse mb-6"
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={dp}
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-[#251761] rounded-2xl p-4 max-w-[80%]">
                      <p className="text-gray-200">{message.content}</p>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Input Section */}
            <div className="">
              <div className="bg-[#170C4B] rounded-xl p-4 flex items-center gap-4 border border-[#251761] w-full">
                <input
                  type="text"
                  placeholder="Ask a question about your document..."
                  className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none px-4 py-2 text-lg"
                />
                <div className="flex items-center gap-3">
                  {/* <button className="bg-[#251761] hover:bg-[#2f1d7a] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                    <span className="hidden sm:inline">
                      Select jurisdiction
                    </span>
                    <ArrowDown className="w-4 h-4" />
                  </button> */}
                  <button className="bg-[#00DFA2] hover:bg-[#00c78f] text-[#0A0B1C] p-2 rounded-lg transition-colors">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </>
        </>
      )}
    </div>
  );
};

export default SummarizeDocument;
