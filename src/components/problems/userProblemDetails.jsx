import { MdDateRange } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { RiArrowUpSFill } from "react-icons/ri";
import { RiUserFollowFill } from "react-icons/ri";
import { HiMiniShare } from "react-icons/hi2";
import { useState } from "react";
import "../../styles/user-problems-textbox.css";
import { motion } from "framer-motion";

export default function UserProblemDetails({ isDarkTheme }) {
  const [answer, setAnswer] = useState("");
  const [showRelatedQLen, setShowRelatedQLen] = useState(3);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  const relatedQuestions = [
    {
      id: 0,
      title: "دسته‌بندی محصولات در dropdown بک‌اند ووکامرس",
      description:
        "چگونه دسته‌بندی‌های فرزند و نوه‌های محصولات را با سلسله مراتب نمایش دهیم؟",
      isGreen: true,
    },
    {
      id: 1,
      title: "ویجت دسته‌بندی محصولات ووکامرس",
      description: "",
      isGreen: false,
    },
    {
      id: 2,
      title:
        "افزودن 'نمایش همه محصولات' به تمام دسته‌بندی‌هایی که دارای دسته‌بندی فرزند هستند در ووکامرس پیش‌فرض...",
      description: "",
      isGreen: true,
    },
    {
      id: 3,
      title: "نمایش زیردسته‌بندی‌های محصولات ووکامرس همراه با والد",
      description: "",
      isGreen: false,
    },
    {
      id: 4,
      title:
        "چگونه فقط دسته‌بندی والد فعلی را با زیردسته‌ها نمایش داده و بقیه را در ویجت مخفی کنیم...",
      description: "",
      isGreen: true,
    },
    {
      id: 5,
      title: "ووکامرس وردپرس - دسته‌بندی‌ها با فیلترهای مختلف ویژگی‌های محصول",
      description: "",
      isGreen: false,
    },
    {
      id: 6,
      title:
        "ووکامرس - ایجاد سلسله مراتب ul تو در تو برای دسته‌بندی‌های والد و زیردسته‌ها",
      description: "",
      isGreen: true,
    },
    {
      id: 7,
      title:
        "نمایش فرزندان برای آرشیو زیردسته‌ها در ویجت دسته‌بندی محصولات ووکامرس",
      description: "",
      isGreen: false,
    },
  ];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < relatedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: 50,
        transition: { duration: 0.3, mease: "easeInOut" },
      }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className={`flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 w-full ${
        isDarkTheme ? "text-white" : "text-black"
      }`}
    >
      {/* Question Header */}
      <section className="mt-5 w-full max-w-[1200px]">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold w-full">
          {relatedQuestions[currentQuestionIndex].title}
        </h1>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-x-6 mt-3">
          <section className="flex items-center gap-x-1 text-sm sm:text-base md:text-lg">
            <MdDateRange size={16} className="sm:size-[18px]" />
            تاریخ پرسش: امروز
          </section>
          <section className="flex items-center gap-x-1 text-sm sm:text-base md:text-lg">
            <MdDateRange size={16} className="sm:size-[18px]" />
            تاریخ پاسخ : امروز
          </section>
          <section className="flex items-center gap-x-1 text-sm sm:text-base md:text-lg">
            <LuEye size={16} className="sm:size-[18px]" />
            مشاهده: 130
          </section>
        </div>
      </section>

      <hr
        className={`w-full max-w-[1200px] mx-auto border-[1px] my-5 ${
          isDarkTheme ? "border-slate-800" : "border-slate-300"
        }`}
      />

      {/* Main Content */}
      <section className="mt-[30px] w-full max-w-[1200px]">
        <div className="flex flex-col md:flex-row items-start gap-5">
          {/* Question Content */}
          <section className="order-1 md:order-2 w-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">
                سوال {currentQuestionIndex + 1} از {relatedQuestions.length}
              </h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevQuestion}
                  disabled={currentQuestionIndex === 0}
                  className={`p-2 hover:bg-blue-600 transition-all duration-100 cursor-pointer rounded-full border-[1.6px] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed ${
                    isDarkTheme ? "border-slate-400" : "border-slate-600"
                  }`}
                >
                  <RiArrowUpSFill
                    size={24}
                    className="sm:size-[30px] rotate-180"
                  />
                </button>
                <button
                  onClick={handleNextQuestion}
                  disabled={
                    currentQuestionIndex === relatedQuestions.length - 1
                  }
                  className={`p-2 hover:bg-blue-600 transition-all duration-100 cursor-pointer rounded-full border-[1.6px] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed ${
                    isDarkTheme ? "border-slate-400" : "border-slate-600"
                  }`}
                >
                  <RiArrowUpSFill size={24} className="sm:size-[30px]" />
                </button>
              </div>
            </div>

            <div className="w-full text-base sm:text-lg font-[500] leading-relaxed sm:leading-[30px]">
              {relatedQuestions[currentQuestionIndex].description ||
                "توضیحاتی برای این سوال وجود ندارد. لطفاً جواب خود را در بخش پایین وارد کنید."}
            </div>

            {/* Tags */}
            <div className="flex items-center mt-5 flex-wrap gap-2">
              <div
                className={`flex items-center justify-center rounded-full px-3 sm:px-5 py-1 text-xs sm:text-sm border-[1px] ${
                  isDarkTheme
                    ? "bg-black border-slate-500 text-white"
                    : "bg-white border-slate-300 text-black"
                }`}
              >
                WooComponent
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-5 sm:mt-8">
              <div
                className={`flex items-center gap-x-1 p-2 border-[1px] rounded-md hover:bg-opacity-20 transition-all duration-100 cursor-pointer text-sm sm:text-base ${
                  isDarkTheme
                    ? "border-slate-300 hover:bg-slate-800"
                    : "border-slate-500 hover:bg-slate-200"
                }`}
              >
                دنبال کردن
                <RiUserFollowFill size={20} className="sm:size-[25px]" />
              </div>
              <div
                className={`flex items-center gap-x-1 p-2 border-[1px] rounded-md hover:bg-opacity-20 transition-all duration-100 cursor-pointer text-sm sm:text-base ${
                  isDarkTheme
                    ? "border-slate-300 hover:bg-slate-800"
                    : "border-slate-500 hover:bg-slate-200"
                }`}
              >
                اشتراک گذاری
                <HiMiniShare size={20} className="sm:size-[25px]" />
              </div>
            </div>

            {/* User Info */}
            <div className="flex items-center justify-start mt-5 sm:mt-8">
              <div
                className={`flex flex-col items-center justify-center p-2 sm:p-3 rounded-md w-full sm:w-auto ${
                  isDarkTheme ? "bg-blue-950" : "bg-blue-100"
                }`}
              >
                <h1
                  className={`font-[500] text-xs sm:text-sm ${
                    isDarkTheme ? "text-slate-200" : "text-slate-800"
                  }`}
                >
                  5 ساعت پیش پرسیده شده
                </h1>
                <div className="flex items-center gap-x-3 mt-2 sm:mt-3">
                  <div
                    className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-md border-[1px] border-slate-500"
                    style={{
                      backgroundImage:
                        "url(https://avatars.githubusercontent.com/u/122119546?v=4)",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <h3
                    className={`font-mono text-sm sm:text-base ${
                      isDarkTheme ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    Parsa Shaabani
                  </h3>
                </div>
                <div className="flex items-center gap-x-3 mt-1 sm:mt-2">
                  <p
                    className={`text-xs sm:text-sm font-[500] ${
                      isDarkTheme ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    77
                  </p>
                  <p
                    className={`text-xs sm:text-sm font-[400] flex items-center gap-x-1 ${
                      isDarkTheme ? "text-gray-500" : "text-gray-600"
                    }`}
                  >
                    <div
                      className={`rounded-full w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] ${
                        isDarkTheme ? "bg-neutral-700" : "bg-neutral-400"
                      }`}
                    ></div>
                    1
                  </p>
                  <div
                    className={`text-xs sm:text-sm font-[400] flex items-center gap-x-1 ${
                      isDarkTheme ? "text-gray-500" : "text-gray-600"
                    }`}
                  >
                    <div className="rounded-full w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] bg-orange-500"></div>
                    4
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Related Questions */}
        <div className="mt-8 sm:mt-10">
          <h1 className="text-xl sm:text-2xl font-bold">سوالات مرتبط</h1>
          <div
            className={`mt-3 sm:mt-5 rounded-md border-[1.6px] w-full transition-all duration-200 ${
              isDarkTheme ? "border-slate-300" : "border-slate-400"
            }`}
          >
            {relatedQuestions
              .filter((_, index) => index !== currentQuestionIndex)
              .slice(0, showRelatedQLen)
              .map((Q, qIndex) => (
                <div
                  key={qIndex}
                  className="flex flex-col gap-y-2 transition-all duration-200"
                >
                  <section className="flex items-center gap-x-3 m-3 sm:m-4 transition-all duration-200">
                    <div
                      className={`rounded-md ${
                        Q.isGreen
                          ? "bg-green-700 text-white"
                          : isDarkTheme
                          ? "bg-transparent border-[1px] border-slate-600"
                          : "bg-transparent border-[1px] border-slate-400"
                      } ${
                        isDarkTheme ? "text-white" : "text-black"
                      }px-3 sm:px-4 py-1 text-xs sm:text-sm`}
                    >
                      {Q.id}
                    </div>
                    <p className="text-sm sm:text-base">{Q.title}</p>
                  </section>
                  {qIndex < showRelatedQLen - 1 && (
                    <hr
                      className={`w-full border-[0.1px] ${
                        isDarkTheme ? "border-slate-700" : "border-slate-300"
                      }`}
                    />
                  )}
                </div>
              ))}
          </div>

          {relatedQuestions.length > 4 && (
            <div
              className={`flex justify-center w-full mt-3 cursor-pointer text-sm sm:text-md font-[400] hover:text-blue-500 hover:underline ${
                isDarkTheme ? "text-white" : "text-black"
              }`}
              onClick={() => {
                setShowRelatedQLen(
                  showRelatedQLen === 3 ? relatedQuestions.length - 1 : 3
                );
              }}
            >
              {showRelatedQLen === 3
                ? `مشاهدۀ ${relatedQuestions.length - 4} سوال مرتبط دیگر`
                : "نمایش سوالات مرتبط کمتر"}
            </div>
          )}
        </div>

        {/* Answer Textarea */}
        <div className="mt-8 sm:mt-10 w-full">
          <textarea
            value={answer}
            onChange={handleChange}
            placeholder="جواب خود را بنویسید"
            rows="8"
            className={`answer-textarea w-full p-3 sm:p-4 text-sm sm:text-base rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkTheme
                ? "border-slate-600 bg-slate-900"
                : "border-slate-400 bg-slate-100"
            }`}
          />
        </div>
      </section>
    </motion.div>
  );
}
