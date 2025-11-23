import { FiHome } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineQuiz } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdOutlineArticle } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";
import { GoBell } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../../styles/swal.css";

export default function DashboardPage({ isDarkTheme }) {
  const [userLoginData, setUserLoginData] = useState(null);
  const [users, setUsers] = useState([]);
  const localToken = localStorage.getItem("refToken");
  const [isUserLoggin, setIsUserLoggin] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  
  function showErrorAlert(title) {
    Swal.fire({
      position: "top-start",
      icon: "error",
      background: isDarkTheme ? "#0D1015" : "#ffffff",
      title: `<h5 style='color:${isDarkTheme ? "white" : "black"}; font-size: 20px;'>${title}</h5>`,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      customClass: {
        icon: "custom-icon-size",
        timerProgressBar: "custom-progress-bar",
      },
    });
  }

  const fetchUsers = async () => {
    try {
      axios
        .get("https://retoolapi.dev/tPNiZj/tecama-users")
        .then((response, v) => {
          const usersList = response.data;
          setUsers(usersList);
          if (localToken) {
            const isLoggin = usersList.find(
              (user) => user.token === localToken
            );

            if (isLoggin) {
              setIsUserLoggin(true);
              setUserLoginData({
                fname: `${isLoggin.fname}`,
                lname: ` ${isLoggin.lname}`,
                email: isLoggin.email,
                password: isLoggin.password,
              });
            } else {
              setIsUserLoggin(false);
              localStorage.removeItem("refToken");
            }
          } else {
            setIsUserLoggin(false);
            showErrorAlert("برای مشاهدۀ این بخش باید وارد حساب کاربری خود شوید");
            setTimeout(() => {
              navigate("/")
            }, 3000)
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    isUserLoggin && (
      <div className={`lg:mt-[-20px] mt-[-5px] min-h-screen ${isDarkTheme ? "bg-gray-900" : "bg-gray-50"} ${isDarkTheme ? "text-white" : "text-gray-800"} border-b ${isDarkTheme ? "border-slate-500" : "border-gray-200"}`}>
        {/* Mobile Header */}
        <div className={`lg:hidden flex items-center justify-between p-4 ${isDarkTheme ? "bg-slate-800" : "bg-white"} border-b ${isDarkTheme ? "border-gray-700" : "border-gray-200"}`}>
          <h1 className={`font-bold ${isDarkTheme ? "text-white" : "text-gray-800"} text-xl`}>آکادمی تکاما</h1>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`${isDarkTheme ? "text-white" : "text-gray-800"} p-2`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Sidebar - Hidden on mobile unless toggled */}
          <aside
            className={`${isSidebarOpen ? "block" : "hidden"} lg:block fixed lg:static inset-y-0 left-0 z-50 w-72 ${isDarkTheme ? "bg-slate-800" : "bg-white"} border-r ${isDarkTheme ? "border-slate-700" : "border-gray-200"} lg:translate-x-0 transform transition-transform duration-300 ease-in-out`}
          >
            <div className="h-full overflow-y-auto">
              <h1 className={`font-bold text-xl pb-5 border-b ${isDarkTheme ? "border-gray-700" : "border-gray-200"} w-full p-5 ${isDarkTheme ? "text-white" : "text-gray-800"} hidden lg:block`}>
                آکادمی تکاما
              </h1>
              <div className="p-5 flex flex-col gap-y-4">
                <div className={`transition-all duration-200 flex items-center gap-x-2 cursor-pointer ${isDarkTheme ? "hover:bg-gray-700" : "hover:bg-gray-100"} rounded-md p-2 ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
                  <FiHome size={20} />
                  <span>داشبورد</span>
                </div>
                <div className={`flex items-center gap-x-2 cursor-pointer ${isDarkTheme ? "hover:bg-gray-700" : "hover:bg-gray-100"} transition-all duration-200 rounded-md p-2 ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
                  <BiBook size={20} />
                  <span>آموزش‌ها</span>
                </div>
                <div className={`flex items-center gap-x-2 cursor-pointer ${isDarkTheme ? "hover:bg-gray-700" : "hover:bg-gray-100"} transition-all duration-200 rounded-md p-2 ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
                  <MdOutlineArticle size={20} />
                  <span>مقالات</span>
                </div>
                <div className={`flex items-center gap-x-2 cursor-pointer ${isDarkTheme ? "hover:bg-gray-700" : "hover:bg-gray-100"} transition-all duration-200 rounded-md p-2 ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
                  <AiOutlineQuestionCircle size={20} />
                  <span>پرسش و پاسخ</span>
                </div>
                <div className={`flex items-center gap-x-2 cursor-pointer ${isDarkTheme ? "hover:bg-gray-700" : "hover:bg-gray-100"} transition-all duration-200 rounded-md p-2 ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
                  <MdOutlineQuiz size={20} />
                  <span>آزمون‌ها</span>
                </div>
                <div className={`flex items-center gap-x-2 cursor-pointer ${isDarkTheme ? "hover:bg-gray-700" : "hover:bg-gray-100"} transition-all duration-200 rounded-md p-2 ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
                  <FaRegUser size={20} />
                  <span>پروفایل</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Overlay for mobile sidebar */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* Main Content */}
          <main className="flex-1 p-4 lg:p-6 ml-0">
            <div className="flex items-center justify-between">
              <h1 className={`font-bold ${isDarkTheme ? "text-white" : "text-gray-800"} text-2xl lg:text-3xl`}>
                سلام {userLoginData?.fname} عزیز
              </h1>
              <div className={`rounded-lg cursor-pointer ${isDarkTheme ? "text-white" : "text-gray-800"} flex items-center justify-center gap-x-3 p-2 lg:p-3 ${isDarkTheme ? "hover:bg-gray-700" : "hover:bg-gray-100"} transition-all duration-200`}>
                <GoBell size={23} />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((val, index) => (
                <div
                  key={index}
                  className={`${isDarkTheme ? "bg-gray-800" : "bg-white"} rounded-lg border ${isDarkTheme ? "border-gray-700" : "border-gray-200"} p-4`}
                >
                  <div className={`${isDarkTheme ? "text-white" : "text-gray-800"} flex items-center justify-between`}>
                    <h1 className="font-medium text-sm lg:text-base">
                      دوره‌های در حال یادگیری
                    </h1>
                    <IoBookOutline size={18} />
                  </div>
                  <h4 className={`${isDarkTheme ? "text-white" : "text-gray-800"} font-bold text-xl lg:text-2xl mt-2`}>
                    ۲۴
                  </h4>
                  <h4 className={`${isDarkTheme ? "text-gray-400" : "text-gray-500"} text-xs lg:text-sm mt-2`}>
                    از ۵۶ مقالۀ موجود
                  </h4>
                </div>
              ))}
            </div>

            <CoursesInProgress isDarkTheme={isDarkTheme} />
            <ExamsList isDarkTheme={isDarkTheme} />
            <MyProblems isDarkTheme={isDarkTheme} />
            <MyArticles isDarkTheme={isDarkTheme} />
          </main>
        </div>
      </div>
    )
  );
}

const CoursesInProgress = ({ isDarkTheme }) => {
  return (
    <section className="mt-8">
      <h1 className={`font-bold ${isDarkTheme ? "text-white" : "text-gray-800"} text-2xl lg:text-3xl`}>
        دوره‌های در حال یادگیری
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className={`rounded-lg border ${isDarkTheme ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"} p-4 text-right`}
          >
            <div className="mb-3">
              <img
                src="https://www.syntaxtechs.com/static/509bd6ead9f4556ea4e476e69146da8e/30b0b/65672f6dc3b1d77a29e4ecf4_The20Role20of20PythonE280A8in20Modern20Data20Analytics.jpg"
                alt="آموزش پایتون"
                className="w-full h-40 lg:h-48 object-cover rounded-md mb-3"
              />
              <h2 className={`font-bold text-lg lg:text-xl ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
                جاوالسكرپيت پیشرفته
              </h2>
              <p className={`text-sm lg:text-base ${isDarkTheme ? "text-gray-300" : "text-gray-600"} mt-2`}>
                ES6+ آموزش مفاهيم پیشرفته جاوالسكرپيت و
              </p>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className={`text-sm font-bold ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
                  75% پیشرفت دوره
                </span>
              </div>
              <div className={`w-full ${isDarkTheme ? "bg-gray-700" : "bg-gray-200"} rounded-full h-2`}>
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
              <p className={`text-xs ${isDarkTheme ? "text-gray-500" : "text-gray-400"}`}>
                آخرين فعاليت: ديروز 24 از 18 درس
              </p>
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-xs lg:text-sm py-1.5 px-3 rounded transition-all">
                ادامه یادگیری
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ExamsList = ({ isDarkTheme }) => {
  return (
    <section className="mt-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h1 className={`font-bold ${isDarkTheme ? "text-white" : "text-gray-800"} text-2xl lg:text-3xl`}>
          نتایج آزمون‌ها
        </h1>
        <button className={`py-1.5 px-3 border ${isDarkTheme ? "border-gray-700" : "border-gray-300"} rounded ${isDarkTheme ? "hover:bg-gray-700" : "hover:bg-gray-100"} ${isDarkTheme ? "text-white" : "text-gray-800"} text-sm transition-colors`}>
          مشاهده همۀ آزمون‌ها
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {[1, 2, 3, 4].map((val, index) => (
          <div
            key={index}
            className={`rounded-lg border ${isDarkTheme ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"} p-4 text-right`}
          >
            <div className="mb-3">
              <h2 className={`text-base lg:text-lg font-medium ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
                أزمون جاوالسكرينيت - سطح متوسط
              </h2>
              <p className={`text-xs ${isDarkTheme ? "text-gray-300" : "text-gray-500"} mt-1`}>تاريخ: 16/04/2014</p>
            </div>

            <div className="flex justify-between items-center mb-4">
              <div className="text-center">
                <p className={`text-xs ${isDarkTheme ? "text-gray-200" : "text-gray-600"}`}>نمره</p>
                <p className="text-xl lg:text-2xl font-bold text-blue-600">
                  85%
                </p>
              </div>

              <div className="w-16 h-16 lg:w-20 lg:h-20 relative">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={isDarkTheme ? "#e6e6e6" : "#d1d5db"}
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeDasharray="85, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-medium">85%</span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <p className={`text-xs ${isDarkTheme ? "text-gray-300" : "text-gray-500"}`}>17 سوال صحيح 20 از</p>
              <p className={`text-xs ${isDarkTheme ? "text-gray-300" : "text-gray-500"}`}>ماز: JavaScript</p>
            </div>

            <button className={`w-full py-1.5 px-3 border border-blue-500 ${isDarkTheme ? "text-blue-500" : "text-blue-600"} rounded ${isDarkTheme ? "hover:bg-blue-500" : "hover:bg-blue-600"} hover:text-white transition-colors text-sm`}>
              مشاهده جزئيات
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const MyProblems = ({ isDarkTheme }) => {
  return (
    <div className="mt-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h1 className={`font-bold ${isDarkTheme ? "text-white" : "text-gray-800"} text-2xl lg:text-3xl`}>
          پرسش‌های من
        </h1>
        <button className={`flex items-center gap-x-1 justify-center py-1.5 px-3 border ${isDarkTheme ? "border-gray-700" : "border-gray-300"} rounded ${isDarkTheme ? "hover:bg-gray-700" : "hover:bg-gray-100"} ${isDarkTheme ? "text-white" : "text-gray-800"} text-sm transition-colors`}>
          <IoIosAdd size={16} />
          ایجاد پرسش جدید
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        {[1, 2, 3, 4].map((val, index) => (
          <div
            key={index}
            className={`rounded-lg p-4 border ${isDarkTheme ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"}`}
          >
            <div className="flex justify-between items-start">
              <h2 className={`text-base lg:text-lg font-semibold ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
                در ری‌اکت <span className="font-bold">async/await</span> مشکل در
                استفاده از
              </h2>
              <span className="text-xs text-blue-400 border border-blue-400 px-2 py-0.5 rounded-full">
                پاسخ داده شده
              </span>
            </div>
            <p className={`text-xs ${isDarkTheme ? "text-gray-400" : "text-gray-500"} mt-1`}>
              ...در کامپوننت‌های ری‌اکت هستم اما با خطای async/await در حال
              استفاده از
            </p>
            <div className="flex flex-wrap gap-1 mt-2">
              {["React", "JavaScript", "Async"].map((tag) => (
                <span
                  key={tag}
                  className={`${isDarkTheme ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"} text-2xs px-1.5 py-0.5 rounded-full`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center ${isDarkTheme ? "text-gray-500" : "text-gray-400"} text-xs mt-3 gap-1`}>
              <span>روز پیش ۲</span>
              <div className="flex gap-2">
                <span>۳ پاسخ</span>
                <span>۴۵ بازدید</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MyArticles = ({ isDarkTheme }) => {
  return (
    <div className="mt-8">
      <h1 className={`font-bold ${isDarkTheme ? "text-white" : "text-gray-800"} text-2xl lg:text-3xl`}>
        مقالات خوانده شده
      </h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((val, index) => (
          <ArticleContainer
            key={index}
            isDarkTheme={isDarkTheme}
            cats={["شبکه", "اینترنت"]}
            likesCount="۵۰"
            commentsCount="۱۸"
            articleImage="https://static.digiato.com/digiato/2025/04/china-launches-world-first-10g-broadband-network-2-910x600.jpg.webp"
            titleText="چین اولین شبکه 10G جهان را با سرعت دانلود 10 گیگابیت‌برثانیه راه‌اندازی کرد"
            publisherImage="https://avatars.githubusercontent.com/u/122119546?v=4"
            publisherName="پارسا شعبانی"
            publishTime="22 بهمن 1403"
          />
        ))}
      </div>
    </div>
  );
};

const ArticleContainer = ({
  isDarkTheme,
  cats,
  likesCount,
  commentsCount,
  articleImage,
  titleText,
  publisherImage,
  publisherName,
  publishTime,
  className = "",
  imageClassName = "",
  tagsClassName = "",
}) => {
  return (
    <Link to={"/articles/مقاله ی تکاما"}>
      <div
        className={`${isDarkTheme ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-lg border overflow-hidden ${className}`}
      >
        <img
          src={articleImage}
          alt={titleText}
          className={`w-full h-52 object-cover rounded-t-lg ${imageClassName}`}
        />
        <div className="p-4">
          <h2 className={`text-base lg:text-lg font-bold mb-2 ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
            {titleText}
          </h2>
          <div className={`flex flex-wrap gap-1 ${tagsClassName}`}>
            {cats.map((cat, index) => (
              <span
                key={index}
                className={`text-2xs ${isDarkTheme ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"} px-1.5 py-0.5 rounded`}
              >
                {cat}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between mt-3 gap-2">
            <div className="flex items-center gap-2">
              <span className={`text-2xs ${isDarkTheme ? "text-gray-400" : "text-gray-500"}`}>{likesCount} پسند</span>
              <span className={`text-2xs ${isDarkTheme ? "text-gray-400" : "text-gray-500"}`}>
                {commentsCount} نظر
              </span>
            </div>
            <div className="flex items-center gap-1">
              <img
                src={publisherImage}
                alt={publisherName}
                className="w-6 h-6 rounded-full"
              />
              <span className={`text-2xs ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>{publisherName}</span>
            </div>
          </div>
          <div className={`text-2xs ${isDarkTheme ? "text-gray-500" : "text-gray-400"} mt-1`}>{publishTime}</div>
        </div>
      </div>
    </Link>
  );
};