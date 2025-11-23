import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import ArticleContainer from "../articlesContaier";
import "../../styles/responsive/coursesPage.css";

export default function ArticlePage({ isDarkTheme, articlesData }) {
  const sortRef = useRef();
  const sortingRef = useRef();
  const programmingLangRef = useRef();
  const [menuSortsIndex, setMenuSortsIndex] = useState(false);
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);
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
      className="courese-page md:mx-[5rem] mt-5"
    >
      <div className="filter-sort-search flex items-center gap-5">
        <div className="flex items-center gap-5">
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

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0.3, duration: 0.5 } }}
              transition={{ duration: 0.5, delay: 0.3 }}
              tabIndex={0}
              ref={sortRef}
              style={{ boxShadow: "0px 5px 15px 1px black" }}
              className={`${menuSortsIndex === 1 ? "visible" : "hidden"} ${
                menuSortsIndex === 1 ? "cursor-pointer" : ""
              } flex flex-col sec-2 absolute w-[9rem] mt-[10px] justify-center ${
                isDarkTheme
                  ? "text-[#D1D5DB] bg-slate-900 border-[#2e3c514e]"
                  : "text-black border-[#adb4be] bg-white"
              } py-2 items-center gap-y-2 text-md ] border-[1.5px] rounded-xl z-40
              `}
            >
              <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200">
                پیش فرض
              </h1>
              <hr className="w-[100%] border-[0.2px] border-[#2e3c514e]"></hr>
              <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200">
                قدیمی ترین
              </h1>
              <hr className="w-[100%] border-[0.2px] border-[#2e3c514e]"></hr>
              <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200">
                جدید ترین
              </h1>
              <hr className="w-[100%] border-[0.2px] border-[#2e3c514e]"></hr>
              <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200">
                محبوب ترین
              </h1>
            </motion.div>
          </div>

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
            <div
              ref={sortingRef}
              style={{ boxShadow: "0px 5px 15px 1px black" }}
              className={`${menuSortsIndex === 2 ? "visible" : "hidden"} ${
                menuSortsIndex === 2 ? "cursor-pointer" : ""
              } flex flex-col sec-2 absolute w-[9rem] mt-[10px] justify-center ${
                isDarkTheme
                  ? "text-[#D1D5DB] bg-slate-900 border-[#2e3c514e]"
                  : "text-black border-[#adb4be] bg-white"
              } py-2 items-center gap-y-2 text-md ] border-[1.5px] rounded-xl z-40
              `}
            >
              <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-100">
                همه
              </h1>
              <hr className="w-[100%] border-[0.2px] border-[#2e3c514e]"></hr>
              <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-100">
                فرانت‌اند
              </h1>
              <hr className="w-[100%] border-[0.2px] border-[#2e3c514e]"></hr>
              <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-100">
                بک‌اند
              </h1>
              <hr className="w-[100%] border-[0.2px] border-[#2e3c514e]"></hr>
              <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-100">
                فول‌استک
              </h1>
              <hr className="w-[100%] border-[0.2px] border-[#2e3c514e]"></hr>
              <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-100">
                دوآپش
              </h1>
              <hr className="w-[100%] border-[0.2px] border-[#2e3c514e]"></hr>
              <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-100">
                توسعۀ موبایل
              </h1>
              <hr className="w-[100%] border-[0.2px] border-[#2e3c514e]"></hr>
              <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-100">
                دیزاین
              </h1>
            </div>
          </div>
        </div>
        <div className="relative z-30 programming-lang-container">
          <div
            onClick={() => {
              if (menuSortsIndex === 3) {
                setMenuSortsIndex(0);
              } else {
                setMenuSortsIndex(3);
              }
            }}
            className={`${
              isDarkTheme
                ? "bg-slate-900 text-[#D1D5DB]  border-[#2e3c514e]"
                : "bg-white text-black border-[#adb4be]"
            } border-[1.5px] sec-1 w-[13rem]  shrink-0 h-[3.5rem] flex items-center justify-center gap-2 cursor-pointer rounded-xl`}
          >
            <FaCode size={20} />
            <h1 className=" text-lg">زبان‌های برنامه‌نویسی</h1>
          </div>
          <div
            tabIndex={0}
            ref={programmingLangRef}
            style={{ boxShadow: "0px 5px 15px 1px black" }}
            className={`${menuSortsIndex === 3 ? "visible" : "hidden"} ${
              menuSortsIndex === 3 ? "cursor-pointer" : ""
            } flex flex-col sec-2 absolute w-[13rem] mt-[10px] justify-center ${
              isDarkTheme
                ? "text-[#D1D5DB] bg-slate-900 border-[#2e3c514e]"
                : "text-black border-[#adb4be] bg-white"
            } py-2 items-center gap-y-2 text-md ] border-[1.5px] rounded-xl z-40
            `}
          >
            <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200">
              پایتون
            </h1>
            <hr className="w-[100%] border-[0.2px] border-[#2e3c514e]"></hr>
            <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200">
              جاوا
            </h1>
            <hr className="w-[100%] border-[0.2px] border-[#2e3c514e]"></hr>
            <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200">
              جاوااسکریپت
            </h1>
            <hr className="w-[100%] border-[0.2px] border-[#2e3c514e]"></hr>
            <h1 className="hover:text-[#18B2FA] w-[100%] flex justify-center transition-all duration-200">
              سی‌شارپ
            </h1>
          </div>
        </div>
        <div
          className={`transition-all duration-100 h-[3.5rem] ${
            menuSortsIndex === 3 ? "z-20" : "z-60"
          } flex ${
            isDarkTheme
              ? "bg-slate-900 border-[#2e3c514e]"
              : " bg-white  border-[#2e3c514e]"
          } border-[1.5px] items-center rounded-xl px-3 w-full`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke={isDarkTheme ? "white" : "black"}
            className={`transition-all w-5 h-5 md:w-6 md:h-6 text-cnBlack-10 ${
              isDarkTheme ? "text-gray-300" : "text-slate-900"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            ></path>
          </svg>
          <div
            className={`w-[1px] mx-[0.5rem] h-[25px] ${
              isDarkTheme ? " bg-[#2e3c51] text-white" : "bg-[#8f9eb4]"
            }`}
          ></div>
          <input
            type="text"
            className={`${
              isDarkTheme ? "text-white" : "text-black"
            } outline-none h-[3.5rem] border-none bg-transparent placeholder:text-lg w-[100%] `}
            placeholder="جستجو در میان مقالات"
          />
        </div>
      </div>
      <hr className="mt-[30px] border-[1px] border-[#2e3c514e]" />
      <div className="grid grid-cols-4 courses-containers mt-[20px] ">
        {articlesData.length !== 0 ? (
          articlesData.map((articleData) => {
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
        ) : (
          <h1
            className={`${
              isDarkTheme ? "text-white" : "text-black"
            } flex items-center mt-5 justify-center text-center`}
          >
            در حال بارگیری اطلاعات ...
          </h1>
        )}
      </div>
    </motion.div>
  );
}
