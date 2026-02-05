import React, { useState } from "react";
import image from "../assets/images/robot.png";
const questions = [
  {
    question: "What can I help you with?",
    options: ["Admissions", "Fees", "Placements", "Campus Life"],
  },
  {
    question: "What is your preferred service?",
    options: ["MBA", "Counselling", "Brochure Download"],
  },
  {
    question: "How satisfied are you with our website?",
    options: ["Very Satisfied", "Satisfied", "Needs Improvement"],
  },
];
function ChatNowButton() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [robotVisible, setRobotVisible] = useState(true);

  const handleToggle = () => {
    if (showPopup) resetState();
    setShowPopup(!showPopup);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((p) => p + 1);
        setSelectedOption(null);
      } else {
        setCompleted(true);
      }
    }, 600);
  };

  const resetState = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setCompleted(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      
      {/* Robot */}
      {robotVisible && (
        <div className="relative">
          <img
            src={image}
            alt="Chat Bot"
            onClick={handleToggle}
            className="w-16 h-16 cursor-pointer rounded-full shadow-xl hover:scale-105 transition"
          />
          <span
            onClick={() => setRobotVisible(false)}
            className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm cursor-pointer"
          >
            ×
          </span>
        </div>
      )}

      {/* Chat Popup */}
      {showPopup && (
        <div className="absolute bottom-20 right-0 w-80 rounded-2xl overflow-hidden
                        bg-white/90 backdrop-blur-xl shadow-2xl border border-gray-200
                        animate-fadeIn">

          {/* Header */}
          <div className="bg-[#10404A] text-white px-4 py-3 flex justify-between items-center">
            <p className="font-semibold text-sm">IGSB Assistant</p>
            <button onClick={handleToggle} className="text-xl">×</button>
          </div>

          {/* Body */}
          <div className="p-4">
            {!completed ? (
              <>
                <p className="font-medium mb-4 text-gray-800">
                  {questions[currentQuestionIndex].question}
                </p>

                <div className="space-y-2">
                  {questions[currentQuestionIndex].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleOptionSelect(opt)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition
                        ${
                          selectedOption === opt
                            ? "bg-[#3AAFA9] text-white"
                            : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                        }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="text-green-500 text-4xl mb-2">✔</div>
                <p className="font-semibold text-lg">Thank you!</p>
                <p className="text-sm text-gray-600 mt-1">
                  Our team will assist you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Animation */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
export default ChatNowButton;