import React from "react";
import logo from "../../assets/Vector.png";
import dp from "../../assets/Dashboard/dp.png";
import { Send } from "lucide-react";
const ChatWithAI = () => {
  const messages = [
    {
      type: "bot",
      content: "Hello There!",
    },
    {
      type: "user",
      content: "Hi, how are you?",
    },
  ];

  return (
    <div>
      <h3 className="font-[500] text-2xl sm:text-3xl md:text-4xl lg:text-[38px] text-[#9DA1B3] mb-6">
        Chat with AI
      </h3>
      <div className="flex-1 min-h-[400px] bg-[#170C4B] rounded-2xl mb-6 p-6">
        {messages.map((message, index) =>
          message.type === "bot" ? (
            // Bot Message
            <div key={index} className="flex items-start gap-2 mb-6">
              <div className="w-8 h-8 flex-shrink-0 bg-[#0A0B1C] rounded-full flex items-center justify-center">
                {/* <Bot className="w-5 h-5 text-[#00DFA2]" /> */}
                <img src={logo} alt="" className="w-5 h-5 text-[#00DFA2]" />
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
            placeholder="Type your message here...."
            className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none px-4 py-2 text-lg"
          />
          <div className="flex items-center gap-3">
            {/* <button className="bg-[#251761] hover:bg-[#2f1d7a] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
             <span className="hidden sm:inline">
             Select jurisdiction
              </span>>
              <ArrowDown className="w-4 h-4" />
              </button> 
            */}
            <button className="bg-[#00DFA2] hover:bg-[#00c78f] text-[#0A0B1C] p-2 rounded-lg transition-colors">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWithAI;
