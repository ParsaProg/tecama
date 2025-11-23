import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { CiFilter } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CgPoll } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function UsersProblemsPage({ isDarkTheme }) {
  const navigate = useNavigate();
  const questions = [
    {
      id: 1,
      title:
        "متدهای Firebase Messaging در هنگام دریافت اعلان‌های پوش در اندروید در React Native فراخوانی نمی‌شوند",
      description:
        "در پروژه React Native من، هنگام دریافت اعلان‌های پوش در اندروید، متدهای پیام‌رسانی فایربیس مانند messaging().OnNotificationOpenedApp()، messaging().getInitialNotification() و ...",
      votes: 0,
      answers: 0,
      views: 2,
      tags: [
        "android",
        "firebase",
        "react-native",
        "firebase-cloud-messaging",
        "amazon-sns",
      ],
      user: {
        name: "YashInvinz",
        reputation: 1,
      },
      timeAgo: "۲ دقیقه پیش",
    },
    {
      id: 2,
      title:
        "چگونه واترمارک را روی تصویر در همان موقعیت نسبی مناسب بدون توجه به اندازه صفحه اندروید قرار دهیم؟",
      description:
        "من از این کد برای قرار دادن واترمارک (تاریخ و آدرس) روی تصویر گرفته شده توسط دوربین استفاده می‌کنم: public Bitmap putTimestamp(Bitmap src, String date, String address) { float START_X = 40f; float START_Y = ...",
      votes: 0,
      answers: 0,
      views: 2,
      tags: ["android", "android-bitmap"],
      user: {
        name: "anta40",
        reputation: 6763,
      },
      timeAgo: "۲ دقیقه پیش",
    },
    {
      id: 3,
      title: "پیکربندی PyPSA-de با یک خوشه کامپیوتر از راه دور",
      description:
        "من در حال تلاش برای پیکربندی PyPSA-de با یک خوشه از راه دور هستم و با مشکلاتی مواجه شده‌ام. وقتی برنامه کامل را از طریق خوشه اجرا می‌کنم، برای تمام قوانین خطایی دریافت می‌کنم که فایل‌های خروجی ...",
      votes: 0,
      answers: 0,
      views: 4,
      tags: ["cluster-computing", "pypsa"],
      user: {
        name: "user29988081",
        reputation: 1,
      },
      timeAgo: "۸ دقیقه پیش",
    },
  ];

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
      className={`w-full md:w-[95%] lg:w-[90%] xl:w-[85%] m-auto p-3 sm:p-5 ${
        isDarkTheme ? " text-white" : " text-gray-800"
      }`}
    >
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
          سوالات کاربران
        </h1>
        <button
          className={`w-full sm:w-auto outline-none transition-all duration-200 rounded-md p-2 sm:p-3 flex items-center justify-center gap-x-2 ${
            isDarkTheme
              ? "bg-blue-600 hover:bg-blue-900 text-white"
              : "bg-blue-500 hover:bg-blue-700 text-white"
          }`}
        >
          پرسیدن سوال
          <HiOutlineQuestionMarkCircle size={20} className="sm:size-[25px]" />
        </button>
      </div>

      {/* Filters and Search Section */}
      <div className="flex flex-col-reverse md:flex-row items-stretch md:items-center justify-between mt-5 gap-4">
        <section className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3">
          <div className="flex items-center gap-3">
            <button
              className={`w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] flex items-center justify-center rounded-md p-2 border-[2px] ${
                isDarkTheme
                  ? "bg-transparent border-slate-600 text-white"
                  : "bg-gray-100 border-gray-300 text-gray-800"
              }`}
            >
              <CiFilter size={18} className="sm:size-[20px]" />
            </button>

            <div
              className={`flex items-center h-[40px] sm:h-[45px] justify-start overflow-x-auto md:overflow-x-visible rounded-md p-1 sm:p-2 gap-1 sm:gap-3 ${
                isDarkTheme ? "bg-slate-700" : "bg-gray-300"
              }`}
            >
              <button
                className={`h-[30px] sm:h-[35px] flex items-center justify-center text-sm sm:text-md rounded-md px-3 sm:px-5 py-1 sm:py-2 whitespace-nowrap ${
                  isDarkTheme
                    ? "bg-slate-900 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                جدیدترین
              </button>
              <button
                className={`h-[30px] sm:h-[35px] flex items-center justify-center text-sm sm:text-md rounded-md px-3 sm:px-5 py-1 sm:py-2 whitespace-nowrap ${
                  isDarkTheme ? "text-white" : "text-gray-800"
                }`}
              >
                فعال
              </button>
              <button
                className={`h-[30px] sm:h-[35px] flex items-center gap-x-1 sm:gap-x-2 justify-center text-sm sm:text-md rounded-md px-3 sm:px-5 py-1 sm:py-2 whitespace-nowrap ${
                  isDarkTheme ? "text-white" : "text-gray-800"
                }`}
              >
                جایزه دار
                <p className="text-blue-400 text-xs sm:text-sm">+53</p>
              </button>
              <button
                className={`h-[30px] sm:h-[35px] flex items-center justify-center text-sm sm:text-md rounded-md px-3 sm:px-5 py-1 sm:py-2 whitespace-nowrap ${
                  isDarkTheme ? "text-white" : "text-gray-800"
                }`}
              >
                پاسخ داده نشده
              </button>
            </div>
          </div>

          <div className="relative rounded-lg flex items-center w-full sm:w-auto">
            <div className="absolute inset-y-0 left-2 flex items-center pr-3">
              <CiSearch
                size={18}
                className={`sm:size-[20px] ${
                  isDarkTheme ? "text-white" : "text-gray-800"
                }`}
              />
            </div>
            <input
              placeholder="جستجو کنید"
              className={`flex h-[40px] sm:h-[45px] w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 pl-10 sm:pl-10 ${
                isDarkTheme
                  ? "bg-transparent border-slate-400 text-white placeholder:text-slate-400 focus-visible:outline-white"
                  : "bg-white border-gray-300 text-gray-800 placeholder:text-gray-400 focus-visible:outline-gray-800"
              }`}
            />
          </div>
        </section>

        <p
          className={`font-[500] text-sm sm:text-lg whitespace-nowrap ${
            isDarkTheme ? "text-slate-400" : "text-gray-600"
          }`}
        >
          25560458 سوال
        </p>
      </div>

      {/* Questions List */}
      <div className="flex flex-col gap-y-3 sm:gap-y-5 w-full mt-5">
        {questions.map((Q, qIndex) => {
          return (
            <div
              onClick={() => {
                navigate(`/problems/${Q.title}`);
              }}
              key={qIndex}
              className={`flex flex-col sm:flex-row cursor-pointer hover:underline items-start gap-3 sm:gap-x-5 w-full rounded-md border-[1.7px] p-3 ${
                isDarkTheme
                  ? "bg-slate-900 border-[#4842f52a]"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              {/* Stats Section */}
              <div className="flex flex-row sm:flex-col items-center sm:items-start justify-between w-full sm:w-auto sm:min-w-[120px] gap-y-2">
                <section
                  className={`flex items-center gap-x-1 text-sm sm:text-base ${
                    isDarkTheme ? "text-slate-400" : "text-gray-600"
                  }`}
                >
                  <CgPoll size={16} className="sm:size-[20px]" />
                  رای ها: {Q.votes}
                </section>
                <section
                  className={`flex items-center gap-x-1 text-sm sm:text-base ${
                    isDarkTheme ? "text-slate-400" : "text-gray-600"
                  }`}
                >
                  <FaRegComment size={16} className="sm:size-[20px]" />
                  نظرات: {Q.answers}
                </section>
                <section
                  className={`flex items-center gap-x-1 text-sm sm:text-base ${
                    isDarkTheme ? "text-slate-400" : "text-gray-600"
                  }`}
                >
                  <LuEye size={16} className="sm:size-[20px]" />
                  دیده‌شده: {Q.views}
                </section>
              </div>

              {/* Content Section */}
              <div className="w-full sm:w-[80%]">
                <h1 className="text-[#5954f3] font-[600] text-base sm:text-lg">
                  {Q.title}
                </h1>
                <p
                  className={`text-sm sm:text-md font-[500] line-clamp-2 ${
                    isDarkTheme ? "text-slate-500" : "text-gray-600"
                  }`}
                >
                  {Q.description}
                </p>

                <div className="flex flex-col items-start w-full mt-3 font-mono justify-between gap-3">
                  {/* Tags */}
                  <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 items-start">
                    {Q.tags.map((tag, tagIndex) => {
                      return (
                        <div
                          key={tagIndex}
                          className={`flex items-center w-auto justify-center text-center rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm border-[1px] truncate ${
                            isDarkTheme
                              ? "bg-black border-slate-500 text-white"
                              : "bg-gray-200 border-gray-300 text-gray-800"
                          }`}
                          title={tag}
                        >
                          {tag}
                        </div>
                      );
                    })}
                  </section>

                  {/* User Info */}
                  <section className="flex items-center gap-x-2 self-start">
                    <div
                      className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-full border-[1px] border-slate-500"
                      style={{
                        backgroundImage:
                          "url(https://avatars.githubusercontent.com/u/122119546?v=4)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <h3 className="text-blue-400 font-[500] text-xs sm:text-sm">
                      {Q.user.name}
                    </h3>
                    <h3
                      className={`font-[500] text-xs sm:text-sm ${
                        isDarkTheme ? "text-slate-400" : "text-gray-600"
                      }`}
                    >
                      {Q.timeAgo}
                    </h3>
                  </section>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
