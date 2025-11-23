import { motion } from "framer-motion";
import { Code2, Timer, Users, Search, Calendar } from "lucide-react";
import { TbBlendMode } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "../../ui/dialog";
import Swal from "sweetalert2";

export default function RatedExamsListPage({ isDarkTheme }) {
  const { pathname: pathName } = useLocation();
  const navigate = useNavigate();
  const exams = [
    {
      id: 1,
      title: "الگوریتم‌های پایه‌ای",
      description:
        "در این آزمون با مفاهیم اولیه الگوریتم‌نویسی آشنا خواهید شد.",
      date: "۱۴۰۲/۱۲/۱۵",
      duration: "۱۲۰ دقیقه",
      difficulty: "ساده",
      languages: ["پایتون", "جاوااسکریپت"],
      participants: 150,
      type: "4 گزینه‌ای",
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
    },
  ];

  const difficultyColors = {
    ساده: "bg-green-500 dark:bg-green-700",
    متوسط: "bg-yellow-500 dark:bg-yellow-600",
    پیشرفته: "bg-red-500 dark:bg-red-700",
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
        <div className="relative">
          <Search
            className={`absolute right-3 top-2.5 h-5 w-5 ${
              isDarkTheme ? "text-gray-300" : "text-gray-700"
            }`}
          />
          <input
            type="text"
            placeholder="جستجوی آزمون..."
            className={`w-full pr-10 p-2 rounded-md border ${
              isDarkTheme
                ? "text-white border-gray-500 bg-slate-900"
                : "text-gray-800 border-gray-300 bg-white"
            } transition-colors duration-300`}
          />
        </div>
        <div className="flex flex-wrap gap-4">
          <select
            className={`p-2 rounded-md border ${
              isDarkTheme
                ? "text-white border-gray-500 bg-slate-900"
                : "text-gray-800 border-gray-300 bg-white"
            } transition-colors duration-300`}
          >
            <option value="">سطح دشواری</option>
            <option value="easy">ساده</option>
            <option value="medium">متوسط</option>
            <option value="hard">پیشرفته</option>
          </select>
          <select
            className={`p-2 rounded-md border ${
              isDarkTheme
                ? "text-white border-gray-500 bg-slate-900"
                : "text-gray-800 border-gray-300 bg-white"
            } transition-colors duration-300`}
          >
            <option value="">زبان برنامه‌نویسی</option>
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
            <option value="cpp">++C</option>
          </select>
          <select
            className={`p-2 rounded-md border ${
              isDarkTheme
                ? "text-white border-gray-500 bg-slate-900"
                : "text-gray-800 border-gray-300 bg-white"
            } transition-colors duration-300`}
          >
            <option value="">مباحث کلی</option>
            <option value="frontend">فرانت‌اند</option>
            <option value="backend">بک‌اند</option>
            <option value="devops">دواپس</option>
            <option value="db">دیتابیس</option>
            <option value="ai">هوش مصنوعی</option>
          </select>
          <select
            className={`p-2 rounded-md border ${
              isDarkTheme
                ? "text-white border-gray-500 bg-slate-900"
                : "text-gray-800 border-gray-300 bg-white"
            } transition-colors duration-300`}
          >
            <option value="">نوع آزمون</option>
            <option value="test">سوالات 4 گزینه‌ای</option>
            <option value="live-coding">برنامه‌نویسی زنده</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {exams.map((exam) => (
          <Dialog>
            <DialogTrigger className="m-0 p-0 text-start">
              <div
                key={exam.id}
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
                <h3 className="text-xl">زبان برنامه‌نویسی: پایتون</h3>
                <h3 className="text-xl mt-3">زمان آزمون: 30 دقیقه</h3>
                <h3 className="text-xl mt-3">نوع آزمون: 4 گزینه‌ای</h3>
                <h3 className="text-xl mt-3">زبان برنامه‌نویسی: پایتون</h3>
                <p className="text-lg mt-3">
                  لطفاً قبل از شروع آزمون، از آماده بودن خود و محیط اطرافتان
                  اطمینان حاصل کنید.
                </p>
                <button
                  onClick={() => {
                    const refToken =
                      localStorage.getItem("refToken") || "notLoggined";

                    if (refToken != "notLoggined") {
                      if (exam.type === "4 گزینه‌ای") {
                        navigate(`/exams/rated/${exam.title}`);
                      } else {
                        navigate(`/exams/rated/live-coding/${exam.title}`);
                      }
                    } else {
                      let i = 0;

                      if (i === 0) {
                        Swal.fire({
                          position: "top-start",
                          icon: "error",
                          background: isDarkTheme ? "#0D1015" : "#ffffff",
                          title:
                            "<h5 style='color:" +
                            (isDarkTheme ? "white" : "black") +
                            "; font-size: 20px;'>" +
                            "برای ورود به این بخش باید وارد حساب کاربری خود شوید" +
                            "</h5>",

                          showConfirmButton: false,
                          timer: 1500,
                          timerProgressBar: true,
                          customClass: {
                            icon: "custom-icon-size",
                            timerProgressBar: "custom-progress-bar",
                          },
                        });
                      }
                      i = 1;
                      setTimeout(() => {
                        i = 0;
                      }, 5000);
                    }
                  }}
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
        ))}
      </div>
    </motion.div>
  );
}
