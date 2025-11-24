import { StopwatchIcon } from "@radix-ui/react-icons";
import { CalendarIcon } from "lucide-react";
import { useState, useEffect } from "react";
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
  // داده‌های واقعی نظرسنجی‌ها
  const [historyPolls, setHistoryPolls] = useState([
    {
      id: 1,
      title: "بررسی محبوبیت فریمورک‌های فرانت‌اند در سال ۱۴۰۳",
      views: 1250,
      score: 4.2,
      sort: "فرانت‌اند",
      date: "1403/12/22",
      category: "فرانت‌اند",
      year: "1403",
    },
    {
      id: 2,
      title: "مقایسه زبان‌های برنامه‌نویسی بک‌اند",
      views: 980,
      score: 3.8,
      sort: "بک‌اند",
      date: "1403/11/15",
      category: "بک‌اند",
      year: "1403",
    },
    {
      id: 3,
      title: "ابزارهای توسعه موبایل در سال ۱۴۰۳",
      views: 750,
      score: 4.0,
      sort: "موبایل",
      date: "1403/10/08",
      category: "موبایل",
      year: "1403",
    },
    {
      id: 4,
      title: "روندهای هوش مصنوعی در توسعه نرم‌افزار",
      views: 2100,
      score: 4.5,
      sort: "هوش مصنوعی",
      date: "1402/09/20",
      category: "هوش مصنوعی",
      year: "1402",
    },
    {
      id: 5,
      title: "مقایسه پایگاه‌داده‌های NoSQL",
      views: 890,
      score: 3.9,
      sort: "دیتابیس",
      date: "1402/08/12",
      category: "دیتابیس",
      year: "1402",
    },
    {
      id: 6,
      title: "ابزارهای DevOps محبوب",
      views: 1100,
      score: 4.1,
      sort: "دواپس",
      date: "1402/07/05",
      category: "دواپس",
      year: "1402",
    },
    {
      id: 7,
      title: "فریمورک‌های CSS در سال ۱۴۰۱",
      views: 680,
      score: 3.7,
      sort: "فرانت‌اند",
      date: "1401/12/18",
      category: "فرانت‌اند",
      year: "1401",
    },
    {
      id: 8,
      title: "بررسی محبوبیت Python در حوزه داده‌کاوی",
      views: 1450,
      score: 4.3,
      sort: "داده‌کاوی",
      date: "1401/11/10",
      category: "داده‌کاوی",
      year: "1401",
    },
  ]);

  const [activePolls, setActivePolls] = useState([
    {
      id: 1,
      title: "فریم‌ورک‌های فرانت‌اند در سال 2024",
      date: "1403/12/01",
      desc: "کدام فریمورک فرانت‌اند را برای پروژه‌های جدید ترجیح می‌دهید؟",
      time: "10 دقیقه",
      questionsLen: "8 سوال",
      category: "فرانت‌اند",
      year: "1403",
      participants: 450,
      status: "فعال",
      daysLeft: 5,
    },
    {
      id: 2,
      title: "زبان‌های برنامه‌نویسی بک‌اند",
      date: "1403/11/25",
      desc: "بهترین زبان برای توسعه API های مدرن چیست؟",
      time: "15 دقیقه",
      questionsLen: "12 سوال",
      category: "بک‌اند",
      year: "1403",
      participants: 320,
      status: "فعال",
      daysLeft: 3,
    },
    {
      id: 3,
      title: "پلتفرم‌های توسعه اپلیکیشن موبایل",
      date: "1403/11/20",
      desc: "کدام پلتفرم را برای توسعه اپلیکیشن موبایل انتخاب می‌کنید؟",
      time: "8 دقیقه",
      questionsLen: "6 سوال",
      category: "موبایل",
      year: "1403",
      participants: 280,
      status: "فعال",
      daysLeft: 7,
    },
    {
      id: 4,
      title: "ابزارهای هوش مصنوعی در توسعه",
      date: "1403/11/15",
      desc: "از کدام ابزارهای هوش مصنوعی در فرآیند توسعه استفاده می‌کنید؟",
      time: "12 دقیقه",
      questionsLen: "10 سوال",
      category: "هوش مصنوعی",
      year: "1403",
      participants: 510,
      status: "فعال",
      daysLeft: 2,
    },
    {
      id: 5,
      title: "مقایسه پایگاه‌داده‌های رابطه‌ای",
      date: "1403/11/10",
      desc: "کدام سیستم مدیریت پایگاه داده رابطه‌ای را ترجیح می‌دهید؟",
      time: "7 دقیقه",
      questionsLen: "5 سوال",
      category: "دیتابیس",
      year: "1403",
      participants: 190,
      status: "فعال",
      daysLeft: 10,
    },
    {
      id: 6,
      title: "ابزارهای CI/CD",
      date: "1403/11/05",
      desc: "کدام ابزار CI/CD را در پروژه‌های خود استفاده می‌کنید؟",
      time: "9 دقیقه",
      questionsLen: "7 سوال",
      category: "دواپس",
      year: "1403",
      participants: 230,
      status: "فعال",
      daysLeft: 4,
    },
    {
      id: 7,
      title: "مقایسه فریمورک‌های تست نرم‌افزار",
      date: "1403/10/28",
      desc: "کدام فریمورک تست را برای پروژه‌های خود انتخاب می‌کنید؟",
      time: "11 دقیقه",
      questionsLen: "9 سوال",
      category: "تست",
      year: "1403",
      participants: 170,
      status: "فعال",
      daysLeft: 1,
    },
    {
      id: 8,
      title: "ابزارهای مانیتورینگ و آنالیتیکس",
      date: "1403/10/20",
      desc: "از کدام ابزار برای مانیتورینگ اپلیکیشن‌های خود استفاده می‌کنید؟",
      time: "6 دقیقه",
      questionsLen: "4 سوال",
      category: "مانیتورینگ",
      year: "1403",
      participants: 140,
      status: "فعال",
      daysLeft: 6,
    },
  ]);

  const [activePollMultiAnsQuestions, setActivePollMultiAnsQuestions] =
    useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const [menuSortsIndex, setMenuSortsIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [checkActivePollIndex, setCheckActivePollIndex] = useState(1);

  // فیلترهای تب تاریخچه
  const [historyYearFilter, setHistoryYearFilter] = useState("");
  const [historyCategoryFilter, setHistoryCategoryFilter] = useState("");

  // فیلترهای تب فعال
  const [activeSortFilter, setActiveSortFilter] = useState("");
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("");
  const [activeYearFilter, setActiveYearFilter] = useState("");

  const itemsPerPage = 6;

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
      setActivePollMultiAnsQuestions([...activePollMultiAnsQuestions, option]);
    }
  };

  // فیلتر و مرتب‌سازی نظرسنجی‌های تاریخچه
  const filteredHistoryPolls = historyPolls
    .filter((poll) => {
      const matchesSearch =
        poll.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        poll.desc?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesYear = !historyYearFilter || poll.year === historyYearFilter;
      const matchesCategory =
        !historyCategoryFilter || poll.category === historyCategoryFilter;

      return matchesSearch && matchesYear && matchesCategory;
    })
    .sort((a, b) => {
      if (menuSortsIndex === 3) {
        // مرتب‌سازی بر اساس تاریخ (جدیدترین اول)
        return (
          new Date(b.date.split("/").reverse().join("-")) -
          new Date(a.date.split("/").reverse().join("-"))
        );
      }
      return 0;
    });

  // فیلتر و مرتب‌سازی نظرسنجی‌های فعال
  const filteredActivePolls = activePolls
    .filter((poll) => {
      const matchesSearch =
        poll.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        poll.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        !activeCategoryFilter || poll.category === activeCategoryFilter;
      const matchesYear = !activeYearFilter || poll.year === activeYearFilter;

      return matchesSearch && matchesCategory && matchesYear;
    })
    .sort((a, b) => {
      switch (activeSortFilter) {
        case "جدیدترین":
          return (
            new Date(b.date.split("/").reverse().join("-")) -
            new Date(a.date.split("/").reverse().join("-"))
          );
        case "قدیمی‌ترین":
          return (
            new Date(a.date.split("/").reverse().join("-")) -
            new Date(b.date.split("/").reverse().join("-"))
          );
        case "محبوب‌ترین":
          return b.participants - a.participants;
        default:
          return 0;
      }
    });

  // محاسبه صفحات برای هر تب
  const getCurrentItems = () => {
    const items =
      activeTabIndex === 0 ? filteredHistoryPolls : filteredActivePolls;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(
    (activeTabIndex === 0
      ? filteredHistoryPolls.length
      : filteredActivePolls.length) / itemsPerPage
  );

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const ChangeTab = (index) => {
    setActiveTabIndex(index);
    setCurrentPage(1);
    setSearchQuery("");
    setMenuSortsIndex(0);
    setHistoryYearFilter("");
    setHistoryCategoryFilter("");
    setActiveSortFilter("");
    setActiveCategoryFilter("");
    setActiveYearFilter("");
  };

  // دسته‌بندی‌های منحصربه‌فرد
  const allCategories = [
    ...new Set([
      ...historyPolls.map((p) => p.category),
      ...activePolls.map((p) => p.category),
    ]),
  ];
  const allYears = [
    ...new Set([
      ...historyPolls.map((p) => p.year),
      ...activePolls.map((p) => p.year),
    ]),
  ].sort((a, b) => b - a);

  const resetFilters = () => {
    setSearchQuery("");
    if (activeTabIndex === 0) {
      setHistoryYearFilter("");
      setHistoryCategoryFilter("");
    } else {
      setActiveSortFilter("");
      setActiveCategoryFilter("");
      setActiveYearFilter("");
    }
    setMenuSortsIndex(0);
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
            {/* فیلتر سال انتشار */}
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
              
                {allYears.map((year, index) => (
                  <div key={year} className="my-1 w-full flex flex-col gap-y-2">
                    <h1
                      className={`hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200 ${
                        historyYearFilter === year ? "text-[#18B2FA]" : ""
                      }`}
                      onClick={() => {
                        setHistoryYearFilter(year);
                        setMenuSortsIndex(0);
                      }}
                    >
                      {convertToFarsiNumbers(year)}
                    </h1>
                    {index < allYears.length - 1 && (
                      <hr
                        className={`w-[100%] border-[0.2px] ${
                          isDarkTheme ? "border-[#2e3c51]" : "border-gray-300"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* فیلتر دسته‌بندی */}
            <div className="relative w-full md:w-auto">
              <div
                onClick={() => {
                  setMenuSortsIndex(menuSortsIndex === 4 ? 0 : 4);
                }}
                className={`sec-1 w-full md:w-[13.5rem] h-[3.5rem] flex items-center justify-center shrink-0 gap-2 cursor-pointer rounded-lg border-[1.5px] ${
                  isDarkTheme
                    ? "bg-slate-900 border-[#2e3c51] text-[#D1D5DB]"
                    : "bg-white border-gray-300 text-gray-700"
                }`}
              >
                <CiFilter
                  color={isDarkTheme ? "#D1D5DB" : "#4B5563"}
                  size={20}
                />
                <h1>دسته‌بندی</h1>
              </div>
              <div
                style={{
                  boxShadow: isDarkTheme
                    ? "0px 5px 15px 1px black"
                    : "0px 5px 15px 1px rgba(0,0,0,0.1)",
                }}
                className={`${menuSortsIndex === 4 ? "visible" : "hidden"} ${
                  menuSortsIndex === 4 ? "cursor-pointer" : ""
                } flex flex-col sec-2 right-0 absolute w-full md:w-[13.5rem] mt-[10px] justify-center py-2 items-center gap-y-2 text-md rounded-lg transition-all duration-200 ${
                  isDarkTheme
                    ? "bg-slate-900 border-[#2e3c51] text-[#D1D5DB]"
                    : "bg-white border-gray-300 text-gray-700"
                }`}
              >
                {allCategories.map((category, index) => (
                  <div key={category} className="mt-1 w-full flex flex-col gap-y-2">
                    <h1
                      className={`hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200 ${
                        historyCategoryFilter === category
                          ? "text-[#18B2FA]"
                          : ""
                      }`}
                      onClick={() => {
                        setHistoryCategoryFilter(category);
                        setMenuSortsIndex(0);
                      }}
                    >
                      {category}
                    </h1>
                    {index < allCategories.length - 1 && (
                      <hr
                        className={`w-[100%] border-[0.2px] ${
                          isDarkTheme ? "border-[#2e3c51]" : "border-gray-300"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* فیلد جستجو */}
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

            {/* دکمه حذف فیلترها */}
            {(searchQuery || historyYearFilter || historyCategoryFilter) && (
              <button
                onClick={resetFilters}
                className={`lg:w-[30%] w-auto h-[3.5rem] rounded-md ${
                  isDarkTheme
                    ? "text-white bg-red-600 hover:bg-red-700"
                    : "text-white bg-red-500 hover:bg-red-600"
                } transition-colors duration-300`}
              >
                حذف فیلترها
              </button>
            )}
          </div>

          {/* نمایش تعداد نتایج */}
          <div
            className={`text-sm ${
              isDarkTheme ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {filteredHistoryPolls.length} نظرسنجی یافت شد
          </div>

          <div className="cards flex flex-col gap-y-5 mt-3">
            {getCurrentItems().map((historyPollData, historyPollDataIndex) => (
              <div
                key={historyPollData.id}
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
                      شرکت کنندگان:{" "}
                      {convertToFarsiNumbers(historyPollData.views.toString())}
                    </h1>
                    <span className="hidden md:block">|</span>
                    <h1 className="flex items-center gap-x-2">
                      <MdOutlineDateRange size={20} />
                      تاریخ: {historyPollData.date}
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
            <div className="gap-x-[20px] mt-[30px] gap-y-5 relative filter-show flex flex-col lg:flex-row items-start justify-start">
              <div className="relative w-full md:w-auto">
                <div className="flex flex-col md:flex-row items-center gap-y-[20px] md:gap-x-[20px]">
                  {/* فیلتر مرتب‌سازی */}
                  <div className="relative w-full md:w-auto">
                    <div
                      onClick={() => {
                        setMenuSortsIndex(menuSortsIndex === 3 ? 0 : 3);
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
                      {["جدیدترین", "قدیمی‌ترین", "محبوب‌ترین"].map(
                        (sort, index) => (
                          <div
                            key={sort}
                            className="w-full flex flex-col gap-y-2"
                          >
                            <h1
                              className={`hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200 ${
                                activeSortFilter === sort
                                  ? "text-[#18B2FA]"
                                  : ""
                              }`}
                              onClick={() => {
                                setActiveSortFilter(sort);
                                setMenuSortsIndex(0);
                              }}
                            >
                              {sort}
                            </h1>
                            {index < 2 && (
                              <hr
                                className={`w-[100%] border-[0.2px] ${
                                  isDarkTheme
                                    ? "border-[#2e3c51]"
                                    : "border-gray-300"
                                }`}
                              />
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* فیلتر دسته‌بندی */}
                  <div className="relative w-full md:w-auto">
                    <div
                      onClick={() => {
                        setMenuSortsIndex(menuSortsIndex === 5 ? 0 : 5);
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
                      } flex flex-col sec-2 right-0 absolute z-[60] w-full md:w-[9rem] mt-[10px]   justify-center py-2 items-center gap-y-2 text-md rounded-lg transition-all duration-200 ${
                        isDarkTheme
                          ? "bg-slate-900 border-[#2e3c51] text-[#D1D5DB]"
                          : "bg-white border-gray-300 text-gray-700"
                      }`}
                    >
                      {allCategories.map(
                        (category, index) =>
                          index <= 3 && (
                            <div
                              key={category}
                              className="mt-1 w-full flex flex-col gap-y-2"
                            >
                              <h1
                                className={`hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200 ${
                                  activeCategoryFilter === category
                                    ? "text-[#18B2FA]"
                                    : ""
                                }`}
                                onClick={() => {
                                  setActiveCategoryFilter(category);
                                  setMenuSortsIndex(0);
                                }}
                              >
                                {category}
                              </h1>
                              {index <= 2 && (
                                <hr
                                  className={`w-[100%] border-[0.2px] ${
                                    isDarkTheme
                                      ? "border-[#2e3c51]"
                                      : "border-gray-300"
                                  }`}
                                />
                              )}
                            </div>
                          )
                      )}
                    </div>
                  </div>

                  {/* فیلتر سال انتشار */}
                  <div className="relative w-full md:w-auto">
                    <div
                      onClick={() => {
                        setMenuSortsIndex(menuSortsIndex === 6 ? 0 : 6);
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
                      {allYears.map((year, index) => (
                        <div key={year} className="mt-1 w-full flex flex-col gap-y-2">
                          <h1
                            className={`hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200 ${
                              activeYearFilter === year ? "text-[#18B2FA]" : ""
                            }`}
                            onClick={() => {
                              setActiveYearFilter(year);
                              setMenuSortsIndex(0);
                            }}
                          >
                            {convertToFarsiNumbers(year)}
                          </h1>
                          {index < allYears.length - 1 && (
                            <hr
                              className={`w-[100%] border-[0.2px] ${
                                isDarkTheme
                                  ? "border-[#2e3c51]"
                                  : "border-gray-300"
                              }`}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* فیلد جستجو */}
              <div
                className={`transition-all duration-100 h-[3.5rem] flex items-center rounded-lg px-3 w-full md:mt-0 border-[1.5px] ${
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`outline-none h-[3.5rem] border-none bg-transparent placeholder:text-lg w-[100%] ${
                    isDarkTheme
                      ? "text-white placeholder:text-gray-400"
                      : "text-gray-800 placeholder:text-gray-500"
                  }`}
                  placeholder="جستجو در میان نظرسنجی‌های فعال"
                />
              </div>

              {/* دکمه حذف فیلترها */}
              {(searchQuery ||
                activeSortFilter ||
                activeCategoryFilter ||
                activeYearFilter) && (
                <button
                  onClick={resetFilters}
                  className={`lg:w-[30%] w-auto px-4 h-[3.5rem] rounded-lg ${
                    isDarkTheme
                      ? "text-white bg-red-600 hover:bg-red-700"
                      : "text-white bg-red-500 hover:bg-red-600"
                  } transition-colors duration-300`}
                >
                  حذف فیلترها
                </button>
              )}
            </div>

            {/* نمایش تعداد نتایج */}
            <div
              className={`text-sm ${
                isDarkTheme ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {filteredActivePolls.length} نظرسنجی فعال یافت شد
            </div>

            {/* نظرسنجی ویژه */}
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
                {[
                  "بله، به طور منظم",
                  "خیر",
                  "گاهی اوقات",
                  "فقط برای برخی کارها",
                ].map((option, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setCheckActivePollIndex(index + 1);
                    }}
                    className="flex items-center gap-x-2 cursor-pointer"
                  >
                    <div
                      className={`rounded-full w-[20px] h-[20px] flex justify-center items-center border-[2px] ${
                        isDarkTheme ? "border-white" : "border-gray-800"
                      }`}
                    >
                      {checkActivePollIndex === index + 1 && (
                        <div
                          className={`rounded-full w-[10px] h-[10px] ${
                            isDarkTheme ? "bg-white" : "bg-gray-800"
                          }`}
                        ></div>
                      )}
                    </div>
                    <p className={isDarkTheme ? "text-white" : "text-gray-800"}>
                      {option}
                    </p>
                  </div>
                ))}
              </div>

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

          {/* کارت‌های نظرسنجی‌های فعال */}
          <div className="w-[100%] grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-between gap-[30px] mt-[30px]">
            {getCurrentItems().map((activePoll, activePollIndex) => {
              return (
                <div
                  key={activePoll.id}
                  className={`rounded-lg border-[1px] w-[100%] py-5 px-4 ${
                    isDarkTheme
                      ? "text-white border-slate-600 bg-slate-800"
                      : "text-gray-800 border-gray-300 bg-white"
                  }`}
                >
                  <h1 className="font-[500] text-xl">{activePoll.title}</h1>
                  <div className="flex items-center mt-2 gap-x-2">
                    <div className="bg-green-700 text-[400] text-white rounded-md px-3 py-1 text-sm">
                      {activePoll.status}
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
                  <div className="flex items-center gap-x-2 mt-2">
                    <FaUsersViewfinder size={16} />
                    <span>
                      {convertToFarsiNumbers(
                        activePoll.participants.toString()
                      )}{" "}
                      شرکت‌کننده
                    </span>
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

      {/* صفحه‌بندی */}
      {totalPages > 1 && (
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

          {pages.map((page) => (
            <button
              key={page}
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
            disabled={currentPage === totalPages}
            className={`p-3 border w-12 h-12 rounded-lg flex items-center justify-center ${
              isDarkTheme
                ? "dark:bg-gray-800 border-slate-500 text-gray-300 hover:bg-gray-700"
                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
            } ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <IoIosArrowBack size={25} />
          </button>
        </div>
      )}
    </motion.div>
  );
}
