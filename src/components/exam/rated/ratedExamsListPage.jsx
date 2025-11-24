import { motion } from "framer-motion";
import { Code2, Timer, Users, Search, Calendar } from "lucide-react";
import { TbBlendMode } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "../../ui/dialog";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

export default function RatedExamsListPage({ isDarkTheme }) {
  const { pathname: pathName } = useLocation();
  const navigate = useNavigate();
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [filteredExams, setFilteredExams] = useState([]);

  const exams = [
    {
      id: 1,
      title: "الگوریتم‌های پایه‌ای",
      description: "در این آزمون با مفاهیم اولیه الگوریتم‌نویسی آشنا خواهید شد.",
      date: "۱۴۰۲/۱۲/۱۵",
      duration: "۱۲۰ دقیقه",
      difficulty: "ساده",
      languages: ["پایتون", "جاوااسکریپت"],
      participants: 150,
      type: "4 گزینه‌ای",
      topic: "الگوریتم"
    },
    {
      id: 2,
      title: "ساختمان داده‌های پیشرفته",
      description: "چالش‌های پیشرفته در زمینه ساختمان داده‌ها و الگوریتم‌ها",
      date: "۱۴۰۲/۱۲/۲۰",
      duration: "۱۸۰ دقیقه",
      difficulty: "پیشرفته",
      languages: ["جاوا", "سی پلاس پلاس"],
      participants: 75,
      type: "کد‌نویسی زنده",
      topic: "ساختمان داده"
    },
    {
      id: 3,
      title: "برنامه‌نویسی شیءگرا",
      description: "آزمون جامع مفاهیم شیءگرایی و طراحی کلاس",
      date: "۱۴۰۲/۱۲/۲۵",
      duration: "۱۵۰ دقیقه",
      difficulty: "متوسط",
      languages: ["جاوا", "پایتون"],
      participants: 120,
      type: "4 گزینه‌ای",
      topic: "برنامه‌نویسی"
    },
    {
      id: 4,
      title: "فرانت‌اند مدرن",
      description: "آزمون تخصصی فریمورک‌های مدرن فرانت‌اند",
      date: "۱۴۰۳/۰۱/۱۰",
      duration: "۱۳۵ دقیقه",
      difficulty: "متوسط",
      languages: ["جاوااسکریپت"],
      participants: 200,
      type: "4 گزینه‌ای",
      topic: "فرانت‌اند"
    },
    {
      id: 5,
      title: "بک‌اند و دیتابیس",
      description: "آزمون جامع مفاهیم سرور و پایگاه داده",
      date: "۱۴۰۳/۰۱/۱۵",
      duration: "۱۶۰ دقیقه",
      difficulty: "پیشرفته",
      languages: ["پایتون", "جاوا"],
      participants: 90,
      type: "کد‌نویسی زنده",
      topic: "بک‌اند"
    },
    {
      id: 6,
      title: "هوش مصنوعی و ماشین لرنینگ",
      description: "آزمون تخصصی الگوریتم‌های هوش مصنوعی",
      date: "۱۴۰۳/۰۱/۲۰",
      duration: "۲۰۰ دقیقه",
      difficulty: "پیشرفته",
      languages: ["پایتون"],
      participants: 60,
      type: "4 گزینه‌ای",
      topic: "هوش مصنوعی"
    }
  ];

  // فیلتر کردن آزمون‌ها
  useEffect(() => {
    let filtered = [...exams];

    // فیلتر بر اساس جستجو در عنوان و توضیحات
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter(exam =>
        exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exam.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // فیلتر بر اساس سطح دشواری
    if (selectedDifficulty) {
      filtered = filtered.filter(exam => exam.difficulty === selectedDifficulty);
    }

    // فیلتر بر اساس زبان برنامه‌نویسی
    if (selectedLanguage) {
      filtered = filtered.filter(exam => 
        exam.languages.includes(selectedLanguage)
      );
    }

    // فیلتر بر اساس مبحث کلی
    if (selectedTopic) {
      filtered = filtered.filter(exam => exam.topic === selectedTopic);
    }

    // فیلتر بر اساس نوع آزمون
    if (selectedType) {
      filtered = filtered.filter(exam => exam.type === selectedType);
    }

    setFilteredExams(filtered);
  }, [searchQuery, selectedDifficulty, selectedLanguage, selectedTopic, selectedType]);

  const difficultyColors = {
    ساده: "bg-green-500 dark:bg-green-700",
    متوسط: "bg-yellow-500 dark:bg-yellow-600",
    پیشرفته: "bg-red-500 dark:bg-red-700",
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDifficultyChange = (e) => {
    setSelectedDifficulty(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleTopicChange = (e) => {
    setSelectedTopic(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedDifficulty("");
    setSelectedLanguage("");
    setSelectedTopic("");
    setSelectedType("");
  };

  const handleExamStart = (exam) => {
    const refToken = localStorage.getItem("refToken") || "notLoggined";

    if (refToken !== "notLoggined") {
      if (exam.type === "4 گزینه‌ای") {
        navigate(`/exams/rated/${exam.title}`);
      } else {
        navigate(`/exams/rated/live-coding/${exam.title}`);
      }
    } else {
      Swal.fire({
        position: "top-start",
        icon: "error",
        background: isDarkTheme ? "#0D1015" : "#ffffff",
        title: `<h5 style='color:${isDarkTheme ? "white" : "black"}; font-size: 20px;'>برای ورود به این بخش باید وارد حساب کاربری خود شوید</h5>`,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        customClass: {
          icon: "custom-icon-size",
          timerProgressBar: "custom-progress-bar",
        },
      });
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
      className={`w-[95%] m-auto pt-[10px] pb-[50px]`}
    >
      <div className="mb-8 space-y-4">
        {/* فیلد جستجو */}
        <div className="relative">
          <Search
            className={`absolute right-3 top-2.5 h-5 w-5 ${
              isDarkTheme ? "text-gray-300" : "text-gray-700"
            }`}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="جستجوی آزمون..."
            className={`w-full pr-10 p-2 rounded-md border ${
              isDarkTheme
                ? "text-white border-gray-500 bg-slate-900"
                : "text-gray-800 border-gray-300 bg-white"
            } transition-colors duration-300`}
          />
        </div>

        {/* فیلترها */}
        <div className="flex flex-wrap gap-4">
          {/* فیلتر سطح دشواری */}
          <select
            value={selectedDifficulty}
            onChange={handleDifficultyChange}
            className={`p-2 rounded-md border ${
              isDarkTheme
                ? "text-white border-gray-500 bg-slate-900"
                : "text-gray-800 border-gray-300 bg-white"
            } transition-colors duration-300`}
          >
            <option value="">سطح دشواری</option>
            <option value="ساده">ساده</option>
            <option value="متوسط">متوسط</option>
            <option value="پیشرفته">پیشرفته</option>
          </select>

          {/* فیلتر زبان برنامه‌نویسی */}
          <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className={`p-2 rounded-md border ${
              isDarkTheme
                ? "text-white border-gray-500 bg-slate-900"
                : "text-gray-800 border-gray-300 bg-white"
            } transition-colors duration-300`}
          >
            <option value="">زبان برنامه‌نویسی</option>
            <option value="پایتون">پایتون</option>
            <option value="جاوااسکریپت">جاوااسکریپت</option>
            <option value="جاوا">جاوا</option>
            <option value="سی پلاس پلاس">++C</option>
          </select>

          {/* فیلتر مباحث کلی */}
          <select
            value={selectedTopic}
            onChange={handleTopicChange}
            className={`p-2 rounded-md border ${
              isDarkTheme
                ? "text-white border-gray-500 bg-slate-900"
                : "text-gray-800 border-gray-300 bg-white"
            } transition-colors duration-300`}
          >
            <option value="">مباحث کلی</option>
            <option value="فرانت‌اند">فرانت‌اند</option>
            <option value="بک‌اند">بک‌اند</option>
            <option value="دواپس">دواپس</option>
            <option value="دیتابیس">دیتابیس</option>
            <option value="هوش مصنوعی">هوش مصنوعی</option>
            <option value="الگوریتم">الگوریتم</option>
            <option value="ساختمان داده">ساختمان داده</option>
            <option value="برنامه‌نویسی">برنامه‌نویسی</option>
          </select>

          {/* فیلتر نوع آزمون */}
          <select
            value={selectedType}
            onChange={handleTypeChange}
            className={`p-2 rounded-md border ${
              isDarkTheme
                ? "text-white border-gray-500 bg-slate-900"
                : "text-gray-800 border-gray-300 bg-white"
            } transition-colors duration-300`}
          >
            <option value="">نوع آزمون</option>
            <option value="4 گزینه‌ای">سوالات 4 گزینه‌ای</option>
            <option value="کد‌نویسی زنده">برنامه‌نویسی زنده</option>
          </select>

          {/* دکمه حذف فیلترها */}
          {(searchQuery || selectedDifficulty || selectedLanguage || selectedTopic || selectedType) && (
            <button
              onClick={resetFilters}
              className={`px-4 py-2 rounded-md border ${
                isDarkTheme
                  ? "text-white border-red-500 bg-red-600 hover:bg-red-700"
                  : "text-white border-red-600 bg-red-500 hover:bg-red-600"
              } transition-colors duration-300`}
            >
              حذف فیلترها
            </button>
          )}
        </div>

        {/* نمایش تعداد نتایج */}
        <div className={`text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
          {filteredExams.length} آزمون یافت شد
        </div>
      </div>

      {/* لیست آزمون‌ها */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredExams.length > 0 ? (
          filteredExams.map((exam) => (
            <Dialog key={exam.id}>
              <DialogTrigger className="m-0 p-0 text-start">
                <div
                  className={`${
                    isDarkTheme
                      ? "bg-slate-900"
                      : "bg-white border border-gray-200"
                  } cursor-pointer rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1`}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2
                        className={`text-xl font-semibold ${
                          isDarkTheme ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {exam.title}
                      </h2>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          isDarkTheme ? "text-white" : "text-gray-800"
                        } ${difficultyColors[exam.difficulty]}`}
                      >
                        {exam.difficulty}
                      </span>
                    </div>
                    <p
                      className={`text-sm mb-4 ${
                        isDarkTheme ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {exam.description}
                    </p>
                    <div
                      className={`space-y-2 ${
                        isDarkTheme ? "text-white" : "text-gray-800"
                      }`}
                    >
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{exam.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Timer className="h-4 w-4" />
                        <span>{exam.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <TbBlendMode className="h-4 w-4" />
                        <span>{exam.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Code2 className="h-4 w-4" />
                        <div className="flex gap-2">
                          {exam.languages.map((lang) => (
                            <span
                              key={lang}
                              className={`px-2 py-1 rounded-full text-xs border-[1px] ${
                                isDarkTheme
                                  ? "border-gray-500 bg-gray-700"
                                  : "border-gray-300 bg-gray-100"
                              }`}
                            >
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      isDarkTheme ? "bg-gray-700" : "bg-gray-50"
                    } px-6 py-4`}
                  >
                    <div
                      className={`flex items-center gap-2 text-sm ${
                        isDarkTheme ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      <Users className="h-4 w-4" />
                      <span>{exam.participants} شرکت‌کننده</span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className={isDarkTheme ? "bg-gray-800" : "bg-white"}>
                <div
                  className={`content text-start ${
                    isDarkTheme ? "text-white" : "text-gray-800"
                  }`}
                >
                  <h1 className="text-2xl mb-5">اطلاعات و جزییات آزمون</h1>
                  <h3 className="text-xl">عنوان: {exam.title}</h3>
                  <h3 className="text-xl mt-3">سطح دشواری: {exam.difficulty}</h3>
                  <h3 className="text-xl mt-3">زمان آزمون: {exam.duration}</h3>
                  <h3 className="text-xl mt-3">نوع آزمون: {exam.type}</h3>
                  <h3 className="text-xl mt-3">زبان‌های برنامه‌نویسی: {exam.languages.join("، ")}</h3>
                  <h3 className="text-xl mt-3">مبحث: {exam.topic}</h3>
                  <p className="text-lg mt-3">
                    {exam.description}
                  </p>
                  <p className="text-lg mt-3">
                    لطفاً قبل از شروع آزمون، از آماده بودن خود و محیط اطرافتان
                    اطمینان حاصل کنید.
                  </p>
                  <button
                    onClick={() => handleExamStart(exam)}
                    className={`p-2 mt-[20px] rounded-md border-[1px] ${
                      isDarkTheme
                        ? "border-white text-black bg-white hover:bg-transparent hover:text-white"
                        : "border-gray-800 text-white bg-gray-800 hover:bg-transparent hover:text-gray-800"
                    } text-lg transition-all duration-200`}
                  >
                    شروع آزمون
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          ))
        ) : (
          <div className={`col-span-3 text-center py-8 ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
            هیچ آزمونی با مشخصات انتخاب شده یافت نشد.
          </div>
        )}
      </div>
    </motion.div>
  );
}