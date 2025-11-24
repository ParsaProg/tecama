import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { CiFilter, CiSearch } from "react-icons/ci";
import { CgPoll } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function UsersProblemsPage({ isDarkTheme }) {
  const navigate = useNavigate();
  
  // State management
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("جدیدترین");
  const [menuOpen, setMenuOpen] = useState(false);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [tagsFilter, setTagsFilter] = useState([]);

  // داده‌های کامل سوالات
  const questions = [
    {
      id: 1,
      title: "متدهای Firebase Messaging در هنگام دریافت اعلان‌های پوش در اندروید در React Native فراخوانی نمی‌شوند",
      description: "در پروژه React Native من، هنگام دریافت اعلان‌های پوش در اندروید، متدهای پیام‌رسانی فایربیس مانند messaging().OnNotificationOpenedApp()، messaging().getInitialNotification() و ...",
      votes: 12,
      answers: 3,
      views: 245,
      tags: ["android", "firebase", "react-native", "firebase-cloud-messaging", "amazon-sns"],
      user: {
        name: "YashInvinz",
        reputation: 156,
        avatar: "https://avatars.githubusercontent.com/u/122119546?v=4"
      },
      timeAgo: "۲ دقیقه پیش",
      hasAnswer: true,
      hasBounty: false,
      isActive: true
    },
    {
      id: 2,
      title: "چگونه واترمارک را روی تصویر در همان موقعیت نسبی مناسب بدون توجه به اندازه صفحه اندروید قرار دهیم؟",
      description: "من از این کد برای قرار دادن واترمارک (تاریخ و آدرس) روی تصویر گرفته شده توسط دوربین استفاده می‌کنم: public Bitmap putTimestamp(Bitmap src, String date, String address) { float START_X = 40f; float START_Y = ...",
      votes: 8,
      answers: 0,
      views: 189,
      tags: ["android", "android-bitmap", "image-processing"],
      user: {
        name: "anta40",
        reputation: 6763,
        avatar: "https://avatars.githubusercontent.com/u/29988081?v=4"
      },
      timeAgo: "۱۵ دقیقه پیش",
      hasAnswer: false,
      hasBounty: true,
      isActive: true
    },
    {
      id: 3,
      title: "پیکربندی PyPSA-de با یک خوشه کامپیوتر از راه دور",
      description: "من در حال تلاش برای پیکربندی PyPSA-de با یک خوشه از راه دور هستم و با مشکلاتی مواجه شده‌ام. وقتی برنامه کامل را از طریق خوشه اجرا می‌کنم، برای تمام قوانین خطایی دریافت می‌کنم که فایل‌های خروجی ...",
      votes: 5,
      answers: 2,
      views: 134,
      tags: ["cluster-computing", "pypsa", "python", "distributed-systems"],
      user: {
        name: "user29988081",
        reputation: 45,
        avatar: "https://avatars.githubusercontent.com/u/29988081?v=4"
      },
      timeAgo: "۱ ساعت پیش",
      hasAnswer: true,
      hasBounty: false,
      isActive: false
    },
    {
      id: 4,
      title: "خطای CORS در API Node.js با Express",
      description: "در حال توسعه یک API با Node.js و Express هستم و با خطای CORS مواجه شده‌ام. از middleware cors استفاده کرده‌ام اما همچنان خطا دریافت می‌کنم...",
      votes: 23,
      answers: 7,
      views: 456,
      tags: ["node.js", "express", "cors", "api", "javascript"],
      user: {
        name: "nodeDev",
        reputation: 1245,
        avatar: "https://avatars.githubusercontent.com/u/45678912?v=4"
      },
      timeAgo: "۲ ساعت پیش",
      hasAnswer: true,
      hasBounty: true,
      isActive: true
    },
    {
      id: 5,
      title: "مشکل در رندر کردن کامپوننت‌های React با استفاده از useEffect",
      description: "کامپوننت من به درستی رندر نمی‌شود وقتی از useEffect برای fetch داده استفاده می‌کنم. state به روز می‌شود اما UI تغییر نمی‌کند...",
      votes: 18,
      answers: 4,
      views: 321,
      tags: ["react", "javascript", "hooks", "useeffect", "frontend"],
      user: {
        name: "reactLearner",
        reputation: 89,
        avatar: "https://avatars.githubusercontent.com/u/78912345?v=4"
      },
      timeAgo: "۳ ساعت پیش",
      hasAnswer: true,
      hasBounty: false,
      isActive: true
    },
    {
      id: 6,
      title: "بهینه‌سازی query در Django ORM",
      description: "چگونه می‌توانم queryهای Django ORM را بهینه‌سازی کنم تا تعداد درخواست‌های دیتابیس کاهش یابد؟ از select_related و prefetch_related استفاده کرده‌ام اما...",
      votes: 14,
      answers: 1,
      views: 278,
      tags: ["django", "python", "orm", "database", "optimization"],
      user: {
        name: "djangoMaster",
        reputation: 567,
        avatar: "https://avatars.githubusercontent.com/u/12345678?v=4"
      },
      timeAgo: "۵ ساعت پیش",
      hasAnswer: false,
      hasBounty: false,
      isActive: true
    }
  ];

  // تمام تگ‌های منحصربه‌فرد
  const allTags = [...new Set(questions.flatMap(q => q.tags))];

  // فیلتر کردن سوالات
  useEffect(() => {
    let filtered = [...questions];

    // فیلتر بر اساس جستجو
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter(q =>
        q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // فیلتر بر اساس تگ‌ها
    if (tagsFilter.length > 0) {
      filtered = filtered.filter(q =>
        tagsFilter.some(tag => q.tags.includes(tag))
      );
    }

    // مرتب‌سازی بر اساس فیلتر انتخاب شده
    switch (selectedFilter) {
      case "جدیدترین":
        filtered.sort((a, b) => b.id - a.id);
        break;
      case "فعال":
        filtered = filtered.filter(q => q.isActive);
        filtered.sort((a, b) => b.views - a.views);
        break;
      case "جایزه دار":
        filtered = filtered.filter(q => q.hasBounty);
        filtered.sort((a, b) => b.votes - a.votes);
        break;
      case "پاسخ داده نشده":
        filtered = filtered.filter(q => !q.hasAnswer);
        filtered.sort((a, b) => b.views - a.views);
        break;
      case "محبوب‌ترین":
        filtered.sort((a, b) => b.votes - a.votes);
        break;
      case "بیشترین بازدید":
        filtered.sort((a, b) => b.views - a.views);
        break;
      default:
        break;
    }

    setFilteredQuestions(filtered);
  }, [searchQuery, selectedFilter, tagsFilter]);

  const filterOptions = [
    "جدیدترین",
    "فعال",
    "جایزه دار",
    "پاسخ داده نشده",
    "محبوب‌ترین",
    "بیشترین بازدید"
  ];

  const handleTagToggle = (tag) => {
    if (tagsFilter.includes(tag)) {
      setTagsFilter(tagsFilter.filter(t => t !== tag));
    } else {
      setTagsFilter([...tagsFilter, tag]);
    }
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedFilter("جدیدترین");
    setTagsFilter([]);
    setMenuOpen(false);
  };

  const handleAskQuestion = () => {
    // در اینجا می‌توانید کاربر را به صفحه پرسش سوال هدایت کنید
    navigate("/ask-question");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: 50,
        transition: { duration: 0.3, ease: "easeInOut" },
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
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAskQuestion}
          className={`w-full sm:w-auto outline-none transition-all duration-200 rounded-md p-2 sm:p-3 flex items-center justify-center gap-x-2 ${
            isDarkTheme
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          پرسیدن سوال
          <HiOutlineQuestionMarkCircle size={20} className="sm:size-[25px]" />
        </motion.button>
      </div>

      {/* Filters and Search Section */}
      <div className="flex flex-col-reverse md:flex-row items-stretch md:items-center justify-between mt-5 gap-4">
        <section className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3">
          {/* Filter Button with Dropdown */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className={`w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] flex items-center justify-center rounded-md p-2 border-[2px] ${
                isDarkTheme
                  ? "bg-transparent border-slate-600 text-white"
                  : "bg-gray-100 border-gray-300 text-gray-800"
              }`}
            >
              <CiFilter size={18} className="sm:size-[20px]" />
            </motion.button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute right-0 mt-2 w-64 rounded-md shadow-lg z-50 ${
                    isDarkTheme ? "bg-slate-800 border-slate-600" : "bg-white border-gray-200"
                  } border`}
                >
                  <div className="p-4">
                    <h3 className={`font-semibold mb-3 ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
                      فیلتر بر اساس تگ‌ها
                    </h3>
                    <div className="max-h-48 overflow-y-auto">
                      {allTags.map((tag) => (
                        <div key={tag} className="flex items-center mb-2">
                          <input
                            type="checkbox"
                            checked={tagsFilter.includes(tag)}
                            onChange={() => handleTagToggle(tag)}
                            className="ml-2"
                          />
                          <span className={`text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-700"}`}>
                            {tag}
                          </span>
                        </div>
                      ))}
                    </div>
                    {(tagsFilter.length > 0) && (
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={clearAllFilters}
                        className={`w-full mt-3 py-2 rounded-md text-sm ${
                          isDarkTheme
                            ? "bg-red-600 hover:bg-red-700 text-white"
                            : "bg-red-500 hover:bg-red-600 text-white"
                        }`}
                      >
                        حذف فیلترها
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Filter Tabs */}
          <div
            className={`flex items-center justify-start overflow-x-auto rounded-md px-1 py-5 sm:p-2 gap-1 sm:gap-3 ${
              isDarkTheme ? "bg-slate-700" : "bg-gray-300"
            }`}
          >
            {filterOptions.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter(filter)}
                className={`h-[30px] sm:h-[35px] flex items-center justify-center text-sm sm:text-md rounded-md px-3 sm:px-5 py-1 sm:py-2 whitespace-nowrap transition-all duration-200 ${
                  selectedFilter === filter
                    ? isDarkTheme
                      ? "bg-blue-600 text-white"
                      : "bg-blue-500 text-white"
                    : isDarkTheme
                    ? "text-white hover:bg-slate-600"
                    : "text-gray-800 hover:bg-gray-400"
                }`}
              >
                {filter}
                {filter === "جایزه دار" && (
                  <span className="bg-yellow-500 text-yellow-900 text-xs rounded-full px-2 py-1 mr-1">
                    +{questions.filter(q => q.hasBounty).length}
                  </span>
                )}
              </motion.button>
            ))}
          </div>

          {/* Search Input */}
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجو در سوالات، تگ‌ها و کاربران..."
              className={`flex h-[40px] sm:h-[45px] w-full sm:w-80 rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 pl-10 sm:pl-10 ${
                isDarkTheme
                  ? "bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus-visible:ring-blue-500"
                  : "bg-white border-gray-300 text-gray-800 placeholder:text-gray-400 focus-visible:ring-blue-500"
              }`}
            />
          </div>
        </section>

        {/* Questions Count */}
        <div className="flex items-center gap-3">
          <p
            className={`font-[500] text-sm sm:text-lg whitespace-nowrap ${
              isDarkTheme ? "text-slate-400" : "text-gray-600"
            }`}
          >
            {filteredQuestions.length} سوال از {questions.length}
          </p>
          {(searchQuery || tagsFilter.length > 0 || selectedFilter !== "جدیدترین") && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={clearAllFilters}
              className={`px-3 py-1 rounded-md text-sm ${
                isDarkTheme
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "bg-red-500 hover:bg-red-600 text-white"
              }`}
            >
              حذف فیلترها
            </motion.button>
          )}
        </div>
      </div>

      {/* Selected Tags */}
      {tagsFilter.length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-4 flex flex-wrap gap-2"
        >
          <span className={`text-sm ${isDarkTheme ? "text-gray-400" : "text-gray-600"}`}>
            تگ‌های انتخاب شده:
          </span>
          {tagsFilter.map((tag) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className={`px-3 py-1 rounded-full text-xs border flex items-center gap-2 ${
                isDarkTheme
                  ? "bg-blue-900 border-blue-700 text-white"
                  : "bg-blue-100 border-blue-300 text-blue-800"
              }`}
            >
              {tag}
              <button
                onClick={() => handleTagToggle(tag)}
                className="hover:scale-110 transition-transform"
              >
                ×
              </button>
            </motion.span>
          ))}
        </motion.div>
      )}

      {/* Questions List */}
      <motion.div 
        layout
        className="flex flex-col gap-y-3 sm:gap-y-5 w-full mt-5"
      >
        <AnimatePresence>
          {filteredQuestions.map((Q) => (
            <motion.div
              key={Q.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate(`/problems/${Q.id}`)}
              className={`flex flex-col sm:flex-row cursor-pointer hover:shadow-lg transition-all duration-300 items-start gap-3 sm:gap-x-5 w-full rounded-lg border p-4 ${
                isDarkTheme
                  ? "bg-slate-800 border-slate-600 hover:border-slate-400"
                  : "bg-white border-gray-200 hover:border-gray-400"
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
                  {Q.votes} رای
                </section>
                <section
                  className={`flex items-center gap-x-1 text-sm sm:text-base ${
                    Q.hasAnswer 
                      ? "text-green-500" 
                      : isDarkTheme 
                      ? "text-slate-400" 
                      : "text-gray-600"
                  }`}
                >
                  <FaRegComment size={16} className="sm:size-[20px]" />
                  {Q.answers} پاسخ
                </section>
                <section
                  className={`flex items-center gap-x-1 text-sm sm:text-base ${
                    isDarkTheme ? "text-slate-400" : "text-gray-600"
                  }`}
                >
                  <LuEye size={16} className="sm:size-[20px]" />
                  {Q.views} بازدید
                </section>
                {Q.hasBounty && (
                  <section className="text-yellow-500 text-sm sm:text-base">
                    💰 جایزه
                  </section>
                )}
              </div>

              {/* Content Section */}
              <div className="w-full sm:w-[80%]">
                <h1 className="text-blue-500 font-[600] text-base sm:text-lg hover:text-blue-600 transition-colors">
                  {Q.title}
                </h1>
                <p
                  className={`text-sm sm:text-md font-[500] line-clamp-2 mt-2 ${
                    isDarkTheme ? "text-slate-500" : "text-gray-600"
                  }`}
                >
                  {Q.description}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center w-full mt-3 justify-between gap-3">
                  {/* Tags */}
                  <section className="flex flex-wrap gap-2 items-start">
                    {Q.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tagIndex}
                        whileHover={{ scale: 1.05 }}
                        className={`flex items-center w-auto justify-center text-center rounded-full px-3 py-1 text-xs sm:text-sm border truncate cursor-pointer ${
                          isDarkTheme
                            ? "bg-slate-900 border-slate-500 text-white hover:bg-slate-700"
                            : "bg-gray-100 border-gray-300 text-gray-800 hover:bg-gray-200"
                        }`}
                        title={tag}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTagToggle(tag);
                        }}
                      >
                        {tag}
                      </motion.div>
                    ))}
                  </section>

                  {/* User Info */}
                  <section className="flex items-center gap-x-2 self-start sm:self-auto">
                    <div
                      className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-full border-[1px] border-slate-500 bg-cover bg-center"
                      style={{ backgroundImage: `url(${Q.user.avatar})` }}
                    ></div>
                    <div className="flex flex-col">
                      <h3 className="text-blue-400 font-[500] text-xs sm:text-sm">
                        {Q.user.name}
                      </h3>
                      <h3
                        className={`font-[500] text-xs ${
                          isDarkTheme ? "text-slate-400" : "text-gray-600"
                        }`}
                      >
                        {Q.timeAgo}
                      </h3>
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredQuestions.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-center py-12 rounded-lg ${
              isDarkTheme ? "bg-slate-800 text-slate-400" : "bg-gray-100 text-gray-600"
            }`}
          >
            <HiOutlineQuestionMarkCircle size={64} className="mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold mb-2">هیچ سوالی یافت نشد</h3>
            <p>لطفاً فیلترهای خود را تغییر دهید یا عبارت جستجوی دیگری را امتحان کنید.</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}