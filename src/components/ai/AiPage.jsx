import React, { useEffect, useState, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoArrowUp } from "react-icons/go";
import { MdOutlineAttachFile } from "react-icons/md";
import { FiLoader } from "react-icons/fi";
import ReactMarkdown from "react-markdown"; // اضافه کردن react-markdown
import rehypeHighlight from "rehype-highlight"; // برای هایلایت کردن کد
import "./github-dark.css"; // استایل برای هایلایت کد
import rehypeSanitize from "rehype-sanitize";

function AiPage({ isDarkTheme }) {
  const [users, setUsers] = useState([]);
  const localToken = localStorage.getItem("refToken");
  const [isUserLoggin, setIsUserLoggin] = useState(null);
  const [userLoginData, setUserLoginData] = useState(null);
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://retoolapi.dev/tPNiZj/tecama-users"
      );
      const usersList = response.data;
      setUsers(usersList);
      if (localToken) {
        const isLoggin = usersList.find((user) => user.token === localToken);
        if (isLoggin) {
          setIsUserLoggin(true);
          setUserLoginData({
            fname: isLoggin.fname,
            email: isLoggin.email,
            password: isLoggin.password,
          });
        } else {
          setIsUserLoggin(false);
          localStorage.removeItem("refToken");
        }
      } else {
        setIsUserLoggin(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const [messageLen, setMessagesLen] = useState(0);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const genAI = new GoogleGenerativeAI(
    "AIzaSyBcCTy_fMyZbSKGNfNwYNaKTqV0cqrCpaU"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() || isGenerating) return;

    const newMessage = { text: inputText, senderMessage: null };
    setMessages([...messages, newMessage]);
    setInputText("");
    setIsGenerating(true);
    setMessagesLen(messageLen + 1);
    window.scroll({ top: 0, behavior: "smooth" });

    try {
      const result = await model.generateContent({
        contents: [{ parts: [{ text: inputText }] }],
      });
      const responseText =
        result.response?.text() || "Sorry, no response received.";

      setMessages((prevMessages) =>
        prevMessages.map((msg, index) =>
          index === prevMessages.length - 1
            ? { ...msg, senderMessage: responseText }
            : msg
        )
      );
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      const errorMessage =
        "Sorry, there was an error communicating with the AI.";
      setMessages((prevMessages) =>
        prevMessages.map((msg, index) =>
          index === prevMessages.length - 1
            ? { ...msg, senderMessage: errorMessage }
            : msg
        )
      );
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col min-h-screen text-white">
      <div className="flex-1 flex flex-col">
        {messageLen > 0 && (
          <div
            dir="rtl"
            className="flex flex-col gap-y-[20px] mr-[50px] mt-[20px] text-white w-[70%] text-right text-xl overflow-y-auto mb-[200px]"
          >
            {messages.map((msg, msgIndex) => (
              <section key={msgIndex} className="flex flex-col gap-y-5">
                <div className="inline w-auto border-[1.6px] border-[#fefefe42] bg-[#282b30] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl p-3">
                  {msg.text}
                </div>
                {msg.senderMessage && (
                  <ReactMarkdown
                    rehypePlugins={[rehypeHighlight, rehypeSanitize]}
                  >
                    {msg.senderMessage}
                  </ReactMarkdown>
                )}
              </section>
            ))}
            {isGenerating && <div className="message bot">...</div>}
            <div ref={messagesEndRef} />
          </div>
        )}

        <div
          className={`${
            messageLen > 0 ? "fixed bottom-0 left-0 right-0 py-4" : ""
          } flex-1 transition-all duration-200 flex flex-col justify-center items-center text-white`}
        >
          {messageLen === 0 && <section className="flex flex-col items-center">
            <h1 className="font-bold text-4xl text-white">
              سلام {userLoginData ? userLoginData.fname : ""} عصرت بخیر
            </h1>
            <h1 className="font-bold text-slate-300 text-center text-4xl mt-3">
              امروز چطور میتونم کمکت کنم؟
            </h1>
          </section>}
          <div className="mt-8 transition-all duration-200">
            <div className="relative w-[600px] h-[130px] rounded-2xl bg-[#212327] border-[1.6px] border-[#dadbde34]">
              <textarea
                style={{ resize: "none" }}
                className="overflow-hidden text-lg m-3 outline-none w-[90%] h-auto bg-transparent border-none"
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="پیام خود را بنویسید..."
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                disabled={isGenerating}
              />
              <button
                className="absolute bottom-3 left-3 bg-[#41454b] p-3 rounded-xl flex gap-x-1 hover:bg-[#303031] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleSendMessage}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <FiLoader className="animate-spin" size={20} />
                    در حال پردازش...
                  </>
                ) : (
                  <>
                    ارسال پیام
                    <GoArrowUp size={20} />
                  </>
                )}
              </button>
              <button
                className="absolute bottom-3 right-3 bg-[#41454b] p-3 rounded-xl flex gap-x-1 hover:bg-[#303031] transition-colors duration-200"
                onClick={handleSendMessage}
                disabled={isGenerating}
              >
                <MdOutlineAttachFile size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiPage;
