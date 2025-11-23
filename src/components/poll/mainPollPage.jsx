import { StopwatchIcon } from "@radix-ui/react-icons";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { FaCode } from "react-icons/fa6";
import convertToFarsiNumbers from "../../functions/convertNumbersToFarsi";
import { CiFilter } from "react-icons/ci";
import { FaUsersViewfinder } from "react-icons/fa6";
import { MdCleaningServices, MdOutlineDateRange } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlinePoll } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function PollPage({ isDarkTheme }) {
  const [historyPolls, setHistoryPolls] = useState([
    {
      id: 1,
      title: "تحلیل بازار سهام ۲۰۲۵",
      views: 500,
      score: 3.0,
      sort: "هوش مصنوعی",
      date: "1403/12/22",
    },
    {
      id: 2,
      title: "پیش‌بینی وضعیت اقتصادی ایران در سال ۲۰۲۵",
      views: 800,
      score: 2.5,
      sort: "هوش مصنوعی",
      date: "1403/12/22",
    },
    {
      id: 3,
      title: "گزارش تورم سالانه",
      views: 1200,
      score: 1.5,
      sort: "هوش مصنوعی",
      date: "1403/12/22",
    },
  ]);
  const [activePollMultiAnsQuestions, setActivePollMultiAnsQuestions] =
    useState([]);
  const activePollMultiAnsQuestionsFunction = (option) => {
    if (
      activePollMultiAnsQuestions &&
      Array.isArray(activePollMultiAnsQuestions) &&
      activePollMultiAnsQuestions.find((value) => value === option)
    ) {
      let newArr = activePollMultiAnsQuestions.filter(
        (item) => item !== option
      );
      setActivePollMultiAnsQuestions(newArr);
    } else {
      let newArr1 = option;
      setActivePollMultiAnsQuestions([...activePollMultiAnsQuestions, newArr1]);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const [menuSortsIndex, setMenuSortsIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [checkActivePollIndex, setCheckActivePollIndex] = useState(1);

  const pages = [1, 2, 3];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const ChangeTab = (index) => {
    setActiveTabIndex(index);
  };

  // Filter and sort polls based on search query and sort selection
  const filteredPolls = historyPolls
    .filter((poll) =>
      poll.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (menuSortsIndex === 3) {
        // Sort by date
        return new Date(b.date) - new Date(a.date);
      }
      return 0;
    });

  const [activePolls, setActivePolls] = useState([
    {
      title: "فریم‌ورک‌های فرانت‌اند در سال 2024",
      date: "1402/12/01",
      desc: "نظر شما دربارۀ محبوب ترین هوش مصنوعی چیست؟",
      time: "10 دقیقه",
      questionsLen: "15 سوال",
    },
    {
      title: "فریم‌ورک‌های فرانت‌اند در سال 2024",
      date: "1402/12/01",
      desc: "نظر شما دربارۀ محبوب ترین هوش مصنوعی چیست؟",
      time: "10 دقیقه",
      questionsLen: "15 سوال",
    },
    {
      title: "فریم‌ورک‌های فرانت‌اند در سال 2024",
      date: "1402/12/01",
      desc: "نظر شما دربارۀ محبوب ترین هوش مصنوعی چیست؟",
      time: "10 دقیقه",
      questionsLen: "15 سوال",
    },
    {
      title: "فریم‌ورک‌های فرانت‌اند در سال 2024",
      date: "1402/12/01",
      desc: "نظر شما دربارۀ محبوب ترین هوش مصنوعی چیست؟",
      time: "10 دقیقه",
      questionsLen: "15 سوال",
    },
    {
      title: "فریم‌ورک‌های فرانت‌اند در سال 2024",
      date: "1402/12/01",
      desc: "نظر شما دربارۀ محبوب ترین هوش مصنوعی چیست؟",
      time: "10 دقیقه",
      questionsLen: "15 سوال",
    },
    {
      title: "فریم‌ورک‌های فرانت‌اند در سال 2024",
      date: "1402/12/01",
      desc: "نظر شما دربارۀ محبوب ترین هوش مصنوعی چیست؟",
      time: "10 دقیقه",
      questionsLen: "15 سوال",
    },
    {
      title: "فریم‌ورک‌های فرانت‌اند در سال 2024",
      date: "1402/12/01",
      desc: "نظر شما دربارۀ محبوب ترین هوش مصنوعی چیست؟",
      time: "10 دقیقه",
      questionsLen: "15 سوال",
    },
    {
      title: "فریم‌ورک‌های فرانت‌اند در سال 2024",
      date: "1402/12/01",
      desc: "نظر شما دربارۀ محبوب ترین هوش مصنوعی چیست؟",
      time: "10 دقیقه",
      questionsLen: "15 سوال",
    },
    {
      title: "فریم‌ورک‌های فرانت‌اند در سال 2024",
      date: "1402/12/01",
      desc: "نظر شما دربارۀ محبوب ترین هوش مصنوعی چیست؟",
      time: "10 دقیقه",
      questionsLen: "15 سوال",
    },
  ]);

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
      className={`poll-page mx-4 md:mx-8 my-3 `}
    >
      <h1
        className={`font-bold text-2xl md:text-3xl text-center md:text-right ${
          isDarkTheme ? "text-white" : "text-gray-800"
        }`}
      >
        نظرسنجی‌های برنامه‌نویسی و تکنولوژی تکاما
      </h1>

      <div
        className={`flex flex-col md:flex-row items-center justify-between m-auto rounded-lg w-full md:w-[100%] h-[100px] md:h-[50px] mt-[30px] md:mt-[50px] px-1 py-1 ${
          isDarkTheme ? "bg-slate-900" : "bg-gray-300"
        }`}
      >
        <h2
          onClick={() => ChangeTab(0)}
          className={`font-[500] text-lg md:text-xl w-full md:w-[50%] flex justify-center items-center h-[60px] md:h-[40px] rounded-md cursor-pointer transition-all duration-200 ${
            isDarkTheme ? "text-white" : "text-gray-800"
          } ${
            activeTabIndex === 0 &&
            (isDarkTheme
              ? "bg-slate-700 border-slate-500"
              : "bg-gray-200 border-gray-300")
          }`}
        >
          تاریخچۀ نظرسنجی‌ها
        </h2>
        <h2
          onClick={() => ChangeTab(1)}
          className={`font-[500] text-lg md:text-xl w-full md:w-[50%] flex justify-center items-center h-[60px] md:h-[40px] rounded-md cursor-pointer transition-all duration-200 ${
            isDarkTheme ? "text-white" : "text-gray-800"
          } ${
            activeTabIndex === 1 &&
            (isDarkTheme
              ? "bg-slate-700 border-slate-500"
              : "bg-gray-200 border-gray-300")
          }`}
        >
          نظرسنجی‌های فعال
        </h2>
      </div>

      {activeTabIndex === 0 ? (
        <div className="flex flex-col mt-[30px] gap-y-[30px]">
          <div className="flex flex-col md:flex-row gap-y-[20px] md:gap-x-[20px] relative filter-show items-start justify-start">
            <div className="relative w-full md:w-auto">
              <div
                onClick={() => {
                  setMenuSortsIndex(menuSortsIndex === 3 ? 0 : 3);
                }}
                className={`sec-1 w-full md:w-[13.5rem] h-[3.5rem] flex items-center justify-center shrink-0 gap-2 cursor-pointer rounded-lg border-[1.5px] ${
                  isDarkTheme
                    ? "bg-slate-900 border-[#2e3c51] text-[#D1D5DB]"
                    : "bg-white border-gray-300 text-gray-700"
                }`}
              >
                <Calendar
                  color={isDarkTheme ? "#D1D5DB" : "#4B5563"}
                  size={20}
                />
                <h1>سال انتشار نظرسنجی‌</h1>
              </div>
              <div
                style={{
                  boxShadow: isDarkTheme
                    ? "0px 5px 15px 1px black"
                    : "0px 5px 15px 1px rgba(0,0,0,0.1)",
                }}
                className={`${menuSortsIndex === 3 ? "visible" : "hidden"} ${
                  menuSortsIndex === 3 ? "cursor-pointer" : ""
                } flex flex-col sec-2 right-0 absolute w-full md:w-[13.5rem] mt-[10px] justify-center py-2 items-center gap-y-2 text-md rounded-lg transition-all duration-200 ${
                  isDarkTheme
                    ? "bg-slate-900 border-[#2e3c51] text-[#D1D5DB]"
                    : "bg-white border-gray-300 text-gray-700"
                }`}
              >
                {["1399", "1401", "1402", "1403", "1404"].map((year, index) => (
                  <>
                    <h1
                      className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200"
                      onClick={() => {
                        setHistoryPolls(
                          historyPolls.filter((poll) =>
                            poll.date.includes(year)
                          )
                        );
                        setMenuSortsIndex(0);
                      }}
                    >
                      {convertToFarsiNumbers(year)}
                    </h1>
                    <hr
                      style={
                        index < 4 ? { display: "block" } : { display: "none" }
                      }
                      className={`w-[100%] border-[0.2px] ${
                        isDarkTheme ? "border-[#2e3c51]" : "border-gray-300"
                      }`}
                    />
                  </>
                ))}
              </div>
            </div>
            <div
              className={`transition-all duration-100 h-[3.5rem] flex items-center rounded-lg px-3 w-full ${
                isDarkTheme
                  ? "bg-slate-900 border-[#2e3c51]"
                  : "bg-white border-gray-300"
              } border-[1.5px]`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke={isDarkTheme ? "white" : "#4B5563"}
                className="transition-all w-5 h-5 md:w-6 md:h-6"
              >
                <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
              </svg>
              <div
                className={`w-[1px] mx-[0.5rem] h-[25px] ${
                  isDarkTheme ? "bg-[#2e3c51]" : "bg-gray-300"
                }`}
              ></div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`outline-none h-[3.5rem] border-none bg-transparent placeholder:text-lg w-[100%] ${
                  isDarkTheme
                    ? "text-white placeholder:text-gray-400"
                    : "text-gray-800 placeholder:text-gray-500"
                }`}
                placeholder="جستجو در میان تاریخچۀ نظرسنجی‌ها"
              />
            </div>
          </div>

          <div className="cards flex flex-col gap-y-5 mt-3">
            {filteredPolls.map((historyPollData, historyPollDataIndex) => (
              <div
                key={historyPollDataIndex}
                className={`rounded-lg w-[100%] h-auto md:h-[100px] flex flex-col md:flex-row justify-between items-center p-4 border-[1px] ${
                  isDarkTheme
                    ? "bg-slate-900 border-slate-600"
                    : "bg-white border-gray-200"
                }`}
              >
                <div
                  className={`mx-5 flex flex-col gap-y-2 ${
                    isDarkTheme ? "text-white" : "text-gray-800"
                  }`}
                >
                  <h1 className="font-bold text-xl">{historyPollData.title}</h1>
                  <div className="flex flex-col md:flex-row items-center gap-x-2">
                    <h1 className="flex items-center">
                      <CiFilter size={20} />
                      دسته بندی: {historyPollData.sort}
                    </h1>
                    <span className="hidden md:block">|</span>
                    <h1 className="flex items-center gap-x-2">
                      <FaUsersViewfinder size={20} />
                      شرکت کنندگان: {historyPollData.views}
                    </h1>
                    <span className="hidden md:block">|</span>
                    <h1 className="flex items-center gap-x-2">
                      <MdOutlineDateRange size={20} />
                      تاریخ:{historyPollData.date}
                    </h1>
                  </div>
                </div>
                <div className="mx-5 flex items-center gap-x-3 mt-4 md:mt-0">
                  <button
                    className={`rounded-md border-[1px] p-2 outline-none flex items-center gap-x-1 ${
                      isDarkTheme
                        ? "border-slate-700 bg-slate-800 text-white"
                        : "border-gray-300 bg-gray-100 text-gray-800"
                    }`}
                  >
                    اشتراک گذاری
                    <IoShareSocialOutline size={20} />
                  </button>
                  <button
                    className={`rounded-md border-[1px] p-2 outline-none flex items-center gap-x-1 ${
                      isDarkTheme
                        ? "border-slate-700 text-white"
                        : "border-gray-300 text-gray-800"
                    }`}
                  >
                    مشاهدۀ نتایج
                    <MdOutlinePoll size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="left-size flex flex-col gap-y-[30px]">
            <div className="gap-x-[20px] mt-[30px] relative filter-show flex flex-col md:flex-row items-start justify-start">
              <div className="relative w-full md:w-auto">
                <div className="flex flex-col md:flex-row items-center gap-y-[20px] md:gap-x-[20px]">
                  <div className="relative w-full md:w-auto">
                    <div
                      onClick={() => {
                        if (menuSortsIndex === 3) {
                          setMenuSortsIndex(0);
                        } else {
                          setMenuSortsIndex(3);
                        }
                      }}
                      className={`sec-1 w-full md:w-[9rem] h-[3.5rem] flex items-center justify-center shrink-0 gap-2 cursor-pointer rounded-lg border-[1.5px] ${
                        isDarkTheme
                          ? "bg-slate-900 border-[#2e3c51] text-[#D1D5DB]"
                          : "bg-white border-gray-300 text-gray-700"
                      }`}
                    >
                      <MdCleaningServices
                        color={isDarkTheme ? "#D1D5DB" : "#4B5563"}
                        size={20}
                      />
                      <h1>مرتب سازی</h1>
                    </div>
                    <div
                      style={{
                        boxShadow: isDarkTheme
                          ? "0px 5px 15px 1px black"
                          : "0px 5px 15px 1px rgba(0,0,0,0.1)",
                      }}
                      className={`${
                        menuSortsIndex === 3 ? "visible" : "hidden"
                      } ${
                        menuSortsIndex == 3 ? "cursor-pointer" : ""
                      } flex flex-col sec-2 right-0 absolute w-full z-[60] md:w-[9rem] mt-[10px] justify-center py-2 items-center gap-y-2 text-md rounded-lg transition-all duration-200 ${
                        isDarkTheme
                          ? "bg-slate-900 border-[#2e3c51] text-[#D1D5DB]"
                          : "bg-white border-gray-300 text-gray-700"
                      }`}
                    >
                      <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200">
                        جدیدترین
                      </h1>
                      <hr
                        className={`w-[100%] border-[0.2px] ${
                          isDarkTheme ? "border-[#2e3c51]" : "border-gray-300"
                        }`}
                      ></hr>
                      <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200">
                        قدیمی‌ترین
                      </h1>
                      <hr
                        className={`w-[100%] border-[0.2px] ${
                          isDarkTheme ? "border-[#2e3c51]" : "border-gray-300"
                        }`}
                      ></hr>
                      <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200">
                        محبوب‌ترین
                      </h1>
                    </div>
                  </div>
                  <div className="relative w-full md:w-auto">
                    <div
                      onClick={() => {
                        if (menuSortsIndex === 5) {
                          setMenuSortsIndex(0);
                        } else {
                          setMenuSortsIndex(5);
                        }
                      }}
                      className={`sec-1 w-full md:w-[9rem] h-[3.5rem] flex items-center justify-center shrink-0 gap-2 cursor-pointer rounded-lg border-[1.5px] ${
                        isDarkTheme
                          ? "bg-slate-900 border-[#2e3c51] text-[#D1D5DB]"
                          : "bg-white border-gray-300 text-gray-700"
                      }`}
                    >
                      <CiFilter
                        color={isDarkTheme ? "#D1D5DB" : "#4B5563"}
                        size={20}
                      />
                      <h1>دسته بندی</h1>
                    </div>
                    <div
                      style={{
                        boxShadow: isDarkTheme
                          ? "0px 5px 15px 1px black"
                          : "0px 5px 15px 1px rgba(0,0,0,0.1)",
                      }}
                      className={`${
                        menuSortsIndex === 5 ? "visible" : "hidden"
                      } ${
                        menuSortsIndex == 5 ? "cursor-pointer" : ""
                      } flex flex-col sec-2 right-0 absolute z-[60] w-full md:w-[9rem] mt-[10px] justify-center py-2 items-center gap-y-2 text-md rounded-lg transition-all duration-200 ${
                        isDarkTheme
                          ? "bg-slate-900 border-[#2e3c51] text-[#D1D5DB]"
                          : "bg-white border-gray-300 text-gray-700"
                      }`}
                    >
                      <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200">
                        فرانت‌اند
                      </h1>
                      <hr
                        className={`w-[100%] border-[0.2px] ${
                          isDarkTheme ? "border-[#2e3c51]" : "border-gray-300"
                        }`}
                      ></hr>
                      <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200">
                        بک‌اند
                      </h1>
                      <hr
                        className={`w-[100%] border-[0.2px] ${
                          isDarkTheme ? "border-[#2e3c51]" : "border-gray-300"
                        }`}
                      ></hr>
                      <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200">
                        موبایل
                      </h1>
                      <hr
                        className={`w-[100%] border-[0.2px] ${
                          isDarkTheme ? "border-[#2e3c51]" : "border-gray-300"
                        }`}
                      ></hr>
                      <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200">
                        دواپس
                      </h1>
                    </div>
                  </div>
                  <div className="relative w-full md:w-auto">
                    <div
                      onClick={() => {
                        if (menuSortsIndex === 6) {
                          setMenuSortsIndex(0);
                        } else {
                          setMenuSortsIndex(6);
                        }
                      }}
                      className={`sec-1 w-full md:w-[9rem] h-[3.5rem] flex items-center justify-center shrink-0 gap-2 cursor-pointer rounded-lg border-[1.5px] ${
                        isDarkTheme
                          ? "bg-slate-900 border-[#2e3c51] text-[#D1D5DB]"
                          : "bg-white border-gray-300 text-gray-700"
                      }`}
                    >
                      <CalendarIcon
                        color={isDarkTheme ? "#D1D5DB" : "#4B5563"}
                        size={20}
                      />
                      <h1>سال انتشار</h1>
                    </div>
                    <div
                      style={{
                        boxShadow: isDarkTheme
                          ? "0px 5px 15px 1px black"
                          : "0px 5px 15px 1px rgba(0,0,0,0.1)",
                      }}
                      className={`${
                        menuSortsIndex === 6 ? "visible" : "hidden"
                      } ${
                        menuSortsIndex == 6 ? "cursor-pointer" : ""
                      } flex flex-col sec-2 right-0 absolute w-full md:w-[9rem] mt-[10px] justify-center py-2 items-center gap-y-2 text-md rounded-lg transition-all duration-200 ${
                        isDarkTheme
                          ? "bg-slate-900 border-[#2e3c51] text-[#D1D5DB]"
                          : "bg-white border-gray-300 text-gray-700"
                      }`}
                    >
                      <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200">
                        {convertToFarsiNumbers("1404")}
                      </h1>
                      <hr
                        className={`w-[100%] border-[0.2px] ${
                          isDarkTheme ? "border-[#2e3c51]" : "border-gray-300"
                        }`}
                      ></hr>
                      <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200">
                        {convertToFarsiNumbers("1403")}
                      </h1>
                      <hr
                        className={`w-[100%] border-[0.2px] ${
                          isDarkTheme ? "border-[#2e3c51]" : "border-gray-300"
                        }`}
                      ></hr>
                      <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200">
                        {convertToFarsiNumbers("1402")}
                      </h1>
                      <hr
                        className={`w-[100%] border-[0.2px] ${
                          isDarkTheme ? "border-[#2e3c51]" : "border-gray-300"
                        }`}
                      ></hr>
                      <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200">
                        {convertToFarsiNumbers("1401")}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`transition-all duration-100 h-[3.5rem] flex items-center rounded-lg px-3 w-full mt-4 md:mt-0 border-[1.5px] ${
                  isDarkTheme
                    ? "bg-slate-900 border-[#2e3c51]"
                    : "bg-white border-gray-300"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={isDarkTheme ? "white" : "#4B5563"}
                  className="transition-all w-5 h-5 md:w-6 md:h-6"
                >
                  <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                </svg>
                <div
                  className={`w-[1px] mx-[0.5rem] h-[25px] ${
                    isDarkTheme ? "bg-[#2e3c51]" : "bg-gray-300"
                  }`}
                ></div>
                <input
                  type="text"
                  className={`outline-none h-[3.5rem] border-none bg-transparent placeholder:text-lg w-[100%] ${
                    isDarkTheme
                      ? "text-white placeholder:text-gray-400"
                      : "text-gray-800 placeholder:text-gray-500"
                  }`}
                  placeholder="جستجو در میان نظرسنجی‌های فعال"
                />
              </div>
            </div>

            <div
              className={`flex flex-col w-[100%] rounded-lg py-5 px-5 border-[1px] ${
                isDarkTheme
                  ? "text-white border-slate-600 bg-slate-800"
                  : "text-gray-800 border-gray-300 bg-gray-50"
              }`}
            >
              <h1 className="font-[600] text-2xl">
                نظرسنجی ویژه: ابزارهای هوش مصنوعی در توسعه نرم‌افزار
              </h1>
              <h3
                className={`mt-1 ${
                  isDarkTheme ? "text-slate-300" : "text-gray-600"
                }`}
              >
                لطفاً به سوالات زیر در مورد استفاده از ابزارهای هوش مصنوعی در
                فرآیند توسعه نرم‌افزار پاسخ دهید.
              </h3>
              <div className="flex items-center mt-1 gap-x-3">
                <div className="bg-green-700 text-[400] text-white rounded-md px-3 py-1 text-sm">
                  فعال
                </div>
                <p
                  className={`text-sm ${
                    isDarkTheme ? "text-slate-300" : "text-gray-600"
                  }`}
                >
                  زمان باقی‌مانده : 5 روز
                </p>
                <p
                  className={`text-sm ${
                    isDarkTheme ? "text-slate-300" : "text-gray-600"
                  }`}
                >
                  1402/12/15
                </p>
              </div>

              {/* سوالات نظرسنجی */}
              <div className="flex flex-col gap-y-3 mt-3">
                <h1
                  className={`font-[500] text-lg ${
                    isDarkTheme ? "text-white" : "text-gray-800"
                  }`}
                >
                  آیا از ابزارهای هوش مصنوعی در فرآیند توسعه نرم‌افزار استفاده
                  می‌کنید؟
                </h1>
                {/* گزینه‌های پاسخ */}
                {[1, 2, 3].map((index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setCheckActivePollIndex(index);
                    }}
                    className="flex items-center gap-x-2"
                  >
                    <div
                      className={`rounded-full w-[20px] h-[20px] cursor-pointer flex justify-center items-center border-[2px] ${
                        isDarkTheme ? "border-white" : "border-gray-800"
                      }`}
                    >
                      {checkActivePollIndex == index && (
                        <div
                          className={`rounded-full w-[10px] h-[10px] ${
                            isDarkTheme ? "bg-white" : "bg-gray-800"
                          }`}
                        ></div>
                      )}
                    </div>
                    <p className={isDarkTheme ? "text-white" : "text-gray-800"}>
                      {index === 1 ? "بله" : index === 2 ? "خیر" : "گاهی اوقات"}
                    </p>
                  </div>
                ))}
              </div>

              {/* سایر بخش‌های نظرسنجی */}
              {/* ... */}

              <button
                className={`mt-5 transition-all duration-200 flex items-center justify-center gap-2 relative group/btn cursor-pointer w-[110px] text-white rounded-md h-10 font-medium text-md ${
                  isDarkTheme
                    ? "bg-[#2563EB] hover:bg-[#2f2ba1]"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
                type="submit"
              >
                ثبت پاسخ
              </button>
            </div>
          </div>

          <div className="w-[100%] grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-between gap-[30px] mt-[30px]">
            {activePolls.map((activePoll, activePollIndex) => {
              return (
                <div
                key={activePollIndex}
                  className={`rounded-lg border-[1px] w-[100%] py-5 px-4 ${
                    isDarkTheme
                      ? "text-white border-slate-600 bg-slate-800"
                      : "text-gray-800 border-gray-300 bg-white"
                  }`}
                >
                  <h1 className="font-[500] text-xl">{activePoll.title}</h1>
                  <div className="flex items-center mt-2 gap-x-2">
                    <div className="bg-green-700 text-[400] text-white rounded-md px-3 py-1 text-sm">
                      فعال
                    </div>
                    <p
                      className={
                        isDarkTheme ? "text-slate-300" : "text-gray-600"
                      }
                    >
                      {activePoll.date}
                    </p>
                  </div>
                  <p
                    className={`font-[500] text-md mt-5 ${
                      isDarkTheme ? "text-slate-300" : "text-gray-600"
                    }`}
                  >
                    {activePoll.desc}
                  </p>
                  <div className="flex items-center gap-x-5 mt-2">
                    <h3>{activePoll.questionsLen}</h3>
                    <h3>زمان : {activePoll.time}</h3>
                  </div>
                  <button
                    className={`w-full rounded-md border-[1px] p-2 mt-5 outline-none transition-all duration-200 ${
                      isDarkTheme
                        ? "border-slate-400 hover:bg-slate-900 text-white"
                        : "border-gray-400 hover:bg-gray-100 text-gray-800"
                    }`}
                  >
                    شرکت در نظرسنجی
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}

      <div className="flex items-center justify-center gap-x-3 my-6">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`p-3 border w-12 h-12 rounded-lg flex items-center justify-center ${
            isDarkTheme
              ? "dark:bg-gray-800 border-slate-500 text-gray-300 hover:bg-gray-700"
              : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
          } ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <IoIosArrowForward size={25} />
        </button>

        {pages.map((page, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => handlePageChange(page)}
            className={`p-3 text-xl border rounded-lg w-12 h-12 flex transition-all duration-200 items-center justify-center ${
              currentPage === page
                ? isDarkTheme
                  ? "bg-slate-300 text-black border-slate-500"
                  : "bg-gray-200 text-gray-800 border-gray-300"
                : isDarkTheme
                ? "border-slate-500 hover:bg-gray-700 text-white"
                : "border-gray-300 hover:bg-gray-100 text-gray-800"
            }`}
          >
            {convertToFarsiNumbers(page.toString())}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === pages.length}
          className={`p-3 border w-12 h-12 rounded-lg flex items-center justify-center ${
            isDarkTheme
              ? "dark:bg-gray-800 border-slate-500 text-gray-300 hover:bg-gray-700"
              : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
          } ${
            currentPage === pages.length ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <IoIosArrowBack size={25} />
        </button>
      </div>
    </motion.div>
  );
}
