import { AnimatePresence, motion } from "framer-motion";
import { FaCode } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import ArticleContainer from "../articlesContaier";
import "../../styles/responsive/coursesPage.css";
import { Search } from "lucide-react";
import convertToFarsiNumbers from "../../functions/convertNumbersToFarsi";

export default function ArticlePage({ isDarkTheme, articlesData }) {
  const sortRef = useRef();
  const sortingRef = useRef();
  const programmingLangRef = useRef();
  const [menuSortsIndex, setMenuSortsIndex] = useState(false);
  const [sortedOne, setSortedOne] = useState("پیش فرض");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [selectedLanguage, setSelectedLanguage] = useState("همه");
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // تابع تبدیل تاریخ شمسی به میلادی برای مرتب سازی
  const persianDateToDate = (persianDate) => {
    if (!persianDate) return new Date(0);
    
    try {
      // تبدیل اعداد فارسی به انگلیسی
      const englishDate = persianDate.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
      
      // استخراج بخش‌های تاریخ (فرض بر این است که فرمت "day month year" است)
      const parts = englishDate.split(' ');
      if (parts.length < 3) return new Date(0);
      
      const day = parseInt(parts[0]);
      const monthName = parts[1];
      const year = parseInt(parts[2]);
      
      // تبدیل نام ماه به عدد
      const persianMonths = {
        'فروردین': 1, 'اردیبهشت': 2, 'خرداد': 3,
        'تیر': 4, 'مرداد': 5, 'شهریور': 6,
        'مهر': 7, 'آبان': 8, 'آذر': 9,
        'دی': 10, 'بهمن': 11, 'اسفند': 12
      };
      
      const month = persianMonths[monthName] || 1;
      
      // تبدیل تاریخ شمسی به میلادی (تقریبی)
      const gregorianYear = year + 621;
      const gregorianDate = new Date(gregorianYear, month - 1, day);
      
      return gregorianDate;
    } catch (error) {
      console.error('Error parsing date:', persianDate, error);
      return new Date(0);
    }
  };

  // فیلتر کردن و مرتب سازی مقالات
  useEffect(() => {
    if (articlesData.length === 0) return;

    let filtered = [...articlesData];

    // فیلتر بر اساس جستجو در عنوان
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter(article =>
        article.titleText.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // فیلتر بر اساس دسته‌بندی (className)
    if (selectedCategory !== "همه") {
      filtered = filtered.filter(article =>
        article.className === selectedCategory
      );
    }

    // فیلتر بر اساس زبان برنامه‌نویسی
    if (selectedLanguage !== "همه") {
      filtered = filtered.filter(article =>
        article.cats?.includes(selectedLanguage)
      );
    }

    // مرتب سازی بر اساس زمان انتشار
    if (sortedOne !== "پیش فرض") {
      filtered.sort((a, b) => {
        const dateA = persianDateToDate(a.publishTime);
        const dateB = persianDateToDate(b.publishTime);
        
        switch (sortedOne) {
          case "جدید ترین":
            return dateB - dateA; // نزولی - جدیدترین اول
          case "قدیمی ترین":
            return dateA - dateB; // صعودی - قدیمی‌ترین اول
          case "محبوب ترین":
            // برای محبوب ترین از likesCount استفاده می‌کنیم
            return (b.likesCount || 0) - (a.likesCount || 0);
          default:
            return 0;
        }
      });
    }

    setFilteredArticles(filtered);
  }, [articlesData, searchQuery, selectedCategory, selectedLanguage, sortedOne]);

  const handleSortSelect = (sortType) => {
    setSortedOne(sortType);
    setMenuSortsIndex(0);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setMenuSortsIndex(0);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setMenuSortsIndex(0);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // لیست دسته‌بندی‌های منحصربه‌فرد از تمام مقالات (بر اساس className)
  const allCategories = ["همه", "مقاله-هنری", "مقاله-اقتصادی", "مقاله-فرهنگی", "مقاله-آموزشی", "مقاله-علمی"];


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: 50,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
      className="courese-page w-[90%] mx-auto mt-5"
    >
      <div className="filter-sort-search flex items-center gap-5">
        <div className="flex items-center gap-5 max-[970px]:mb-5">
          {/* فیلتر مرتب سازی */}
          <div className="relative sort-container">
            <div
              onClick={() => {
                if (menuSortsIndex === 1) {
                  setMenuSortsIndex(0);
                } else {
                  setMenuSortsIndex(1);
                }
              }}
              className={`${
                isDarkTheme
                  ? "bg-slate-900 text-[#D1D5DB]  border-[#2e3c514e]"
                  : "bg-white text-black border-[#adb4be]"
              } border-[1.5px] sec-1 w-[9rem]  shrink-0 h-[3.5rem] flex items-center justify-center gap-2 cursor-pointer rounded-xl`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={isDarkTheme ? "white" : "black"}
                  viewBox="0 0 24 24"
                  stroke={isDarkTheme ? "white" : "black"}
                  strokeWidth={1.5}
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  ></path>
                </svg>
              </span>
              <h1 className="text-lg">مرتب سازی</h1>
            </div>

            <AnimatePresence mode="wait">
              {menuSortsIndex === 1 && (
                <motion.div
                  key={"sorted-1"}
                  initial={{ opacity: 0, scale: 0.8, y: -30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    y: -30,
                    transition: { delay: 0.01 },
                  }}
                  transition={{ delay: 0.01 }}
                  tabIndex={0}
                  ref={sortRef}
                  style={{ boxShadow: "0px 5px 15px 1px black" }}
                  className={`${
                    menuSortsIndex === 1 ? "cursor-pointer" : ""
                  } flex flex-col sec-2 absolute w-[9rem] mt-[10px] justify-center ${
                    isDarkTheme
                      ? "text-[#D1D5DB] bg-slate-900 border-[#2e3c514e]"
                      : "text-black border-[#adb4be] bg-white"
                  } py-2 items-center gap-y-2 text-md ] border-[1.5px] rounded-xl z-40
              `}
                >
                  <h1 
                    onClick={() => handleSortSelect("پیش فرض")}
                    className={`hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200 ${
                      sortedOne === "پیش فرض" ? "text-[#18B2FA]" : ""
                    }`}
                  >
                    پیش فرض
                  </h1>
                  <hr className="w-[100%] border-[0.2px] border-[#2e3c514e]"></hr>
                  <h1 
                    onClick={() => handleSortSelect("قدیمی ترین")}
                    className={`hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200 ${
                      sortedOne === "قدیمی ترین" ? "text-[#18B2FA]" : ""
                    }`}
                  >
                    قدیمی ترین
                  </h1>
                  <hr className="w-[100%] border-[0.2px] border-[#2e3c514e]"></hr>
                  <h1 
                    onClick={() => handleSortSelect("جدید ترین")}
                    className={`hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200 ${
                      sortedOne === "جدید ترین" ? "text-[#18B2FA]" : ""
                    }`}
                  >
                    جدید ترین
                  </h1>
                  <hr className="w-[100%] border-[0.2px] border-[#2e3c514e]"></hr>
                  <h1 
                    onClick={() => handleSortSelect("محبوب ترین")}
                    className={`hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200 ${
                      sortedOne === "محبوب ترین" ? "text-[#18B2FA]" : ""
                    }`}
                  >
                    محبوب ترین
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* فیلتر دسته‌بندی */}
          <div className="relative sorting-container">
            <div
              onClick={() => {
                if (menuSortsIndex === 2) {
                  setMenuSortsIndex(0);
                } else {
                  setMenuSortsIndex(2);
                }
              }}
              className={`${
                isDarkTheme
                  ? "bg-slate-900 text-[#D1D5DB]  border-[#2e3c514e]"
                  : "bg-white text-black border-[#adb4be]"
              } border-[1.5px] sec-1 w-[9rem]  shrink-0 h-[3.5rem] flex items-center justify-center gap-2 cursor-pointer rounded-xl`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={isDarkTheme ? "white" : "black"}
                  strokeWidth={1.5}
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                  ></path>
                </svg>
              </span>
              <h1 className="text-lg">دسته‌بندی‌ها</h1>
            </div>
            <AnimatePresence>
              {menuSortsIndex === 2 && (
                <motion.div
                  key={"sorted-2"}
                  initial={{ opacity: 0, scale: 0.8, y: -30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    y: -30,
                    transition: { delay: 0.01 },
                  }}
                  transition={{ delay: 0.01 }}
                  ref={sortingRef}
                  style={{ boxShadow: "0px 5px 15px 1px black" }}
                  className={`${
                    menuSortsIndex === 2 ? "cursor-pointer" : ""
                  } flex flex-col sec-2 absolute w-[9rem] mt-[10px] gap-y-3 justify-center ${
                    isDarkTheme
                      ? "text-[#D1D5DB] bg-slate-900 border-[#2e3c514e]"
                      : "text-black border-[#adb4be] bg-white"
                  } py-2 items-center gap-y-2 text-md ] border-[1.5px] rounded-xl z-40
              `}
                >
                  {allCategories.map((category, index) => (
                    <div key={category} className="w-full">
                      <h1 
                        onClick={() => handleCategorySelect(category)}
                        className={`hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-100 mb-2 ${
                          selectedCategory === category ? "text-[#18B2FA]" : ""
                        }`}
                      >
                        {category}
                      </h1>
                      {index < allCategories.length - 1 && (
                        <hr className="w-[100%] border-[0.2px] border-[#2e3c514e]"></hr>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* فیلد جستجو */}
        <div
          className={`transition-all duration-100 h-[3.5rem] ${
            menuSortsIndex === 3 ? "z-20" : "z-60"
          } flex ${
            isDarkTheme
              ? "bg-slate-900 border-[#2e3c514e]"
              : " bg-white  border-[#2e3c514e]"
          } border-[1.5px] items-center rounded-xl px-3 w-full`}
        >
          <Search size={20} className={`${isDarkTheme? "text-slate-300": "text-slate-800"}`}/>
          <div
            className={`w-[1px] mx-[0.5rem] h-[25px] ${
              isDarkTheme ? " bg-[#2e3c51] text-white" : "bg-[#8f9eb4]"
            }`}
          ></div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className={`${
              isDarkTheme ? "text-white" : "text-black"
            } outline-none h-[3.5rem] border-none bg-transparent placeholder:text-lg w-[100%] `}
            placeholder="جستجو در میان مقالات"
          />
        </div>
      </div>
      
      <hr className="mt-[30px] border-[1px] border-[#2e3c514e]" />
      
      {/* نمایش تعداد نتایج */}
      <div className={`text-center mt-4 ${isDarkTheme ? "text-white" : "text-black"}`}>
        {convertToFarsiNumbers(filteredArticles.length.toString())} مقاله یافت شد
        {(searchQuery || selectedCategory !== "همه" || selectedLanguage !== "همه" || sortedOne !== "پیش فرض") && (
          <span 
            className="text-[#18B2FA] cursor-pointer mr-2"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("همه");
              setSelectedLanguage("همه");
              setSortedOne("پیش فرض");
            }}
          >
            (حذف فیلترها)
          </span>
        )}
      </div>

      <div className="grid grid-cols-4 gap-x-5 courses-containers mt-[20px] ">
        {filteredArticles.length !== 0 ? (
          filteredArticles.map((articleData) => {
            return (
              <ArticleContainer
                key={articleData.id}
                theme={isDarkTheme}
                cats={articleData.cats}
                likesCount={articleData.likesCount}
                commentsCount={articleData.commentsCount}
                articleImage={articleData.articleImage}
                titleText={articleData.titleText}
                publisherImage={articleData.publisherImage}
                publisherName={articleData.publisherName}
                publishTime={articleData.publishTime}
              />
            );
          })
        ) : articlesData.length === 0 ? (
          <h1
            className={`${
              isDarkTheme ? "text-white" : "text-black"
            } flex items-center mt-5 justify-center text-center col-span-4`}
          >
            در حال بارگیری اطلاعات ...
          </h1>
        ) : (
          <h1
            className={`${
              isDarkTheme ? "text-white" : "text-black"
            } flex items-center mt-5 justify-center text-center col-span-4`}
          >
            مقاله‌ای با این مشخصات یافت نشد
          </h1>
        )}
      </div>
    </motion.div>
  );
}