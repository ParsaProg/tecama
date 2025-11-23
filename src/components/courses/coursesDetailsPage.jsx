import { MdCastForEducation } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { RiApps2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AnimateHeight from "react-animate-height";
import { MdAddComment } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import "../../styles/responsive/coursesDetails_res.css";
import { useLocation, useNavigate } from "react-router-dom";
import LottieAnimation from "../../assets/lottie/Animation - 1746438530444.json";
import Lottie from "lottie-react";
import axios from "axios";
import GetDataFromLocationPathName from "../../functions/getDatafromLocationPathname";

export default function CoursesDetailsPage({
  isDarkTheme,
  coursesData,
  API_KEY,
}) {
  const [isCourseFound, setIsCourseFound] = useState();
  const [mainCourseData, setMainCourseData] = useState(null);
  const infoRef = useRef();
  const faqRef = useRef();
  const commentsRef = useRef();
  const location = useLocation();
  const navigator = useNavigate();
  const [teacherText, setTeacherText] = useState(false);
  const [courseInfo, setCourseInfo] = useState(false);
  const apiEndPoint = "https://tecama-api.vercel.app/api/courses";
  GetDataFromLocationPathName(
    coursesData,
    setIsCourseFound,
    setMainCourseData,
    apiEndPoint,
    API_KEY,
    location,
    9,
    "not-data"
  );

  // Optionally, conditionally render content based on isCourseFound
  if (!isCourseFound) {
    return (
      <div
        className={`mt-5 flex items-center justify-center text-center flex-col`}
      >
        <div style={{ width: "300px", height: "170px" }}>
          <Lottie animationData={LottieAnimation} loop={true} autoplay={true} />
        </div>
        <h1 className={`text-xl ${isDarkTheme ? "text-white" : "text-black"}`}>
          در حال بارگیری اطلاعات ...
        </h1>
      </div>
    ); // or a loading spinner, or nothing while redirecting
  }

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
      className={`w-[85%] m-auto ${
        isDarkTheme ? "text-white" : "text-black"
      } courses-details-page`}
    >
      <div
        className={`head-data w-[100%] rounded-xl mt-[40px] flex h-auto py-[15px] items-start ${
          isDarkTheme
            ? "bg-[#1C1F38]"
            : "bg-gray-100 border-[1px] border-slate-400"
        }`}
      >
        <div className="right-side w-[100%]">
          <div
            className="banner-image md:w-[40vw] mr-[20px] h-[25vw] rounded-lg relative"
            style={{
              backgroundImage: `url(${mainCourseData.titleImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className={`absolute ${
                isDarkTheme ? "bg-[#35384D]" : "bg-gray-200"
              } rounded-2xl m-3 flex justify-center items-center text-center px-3 py-2`}
            >
              <MdCastForEducation
                color={isDarkTheme ? "white" : "black"}
                size={15}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start mr-[20px] left-side">
          <h1
            className={`course-title-text font-bold ${
              isDarkTheme ? "text-white" : "text-black"
            } md:text-3xl text-2xl`}
          >
            {mainCourseData.titleText}
          </h1>
          <div
            className={`text-start w-auto ${
              isDarkTheme ? "bg-[#35384D]" : "bg-gray-200"
            } mt-[15px] ${
              isDarkTheme ? "text-white" : "text-black"
            } px-3 py-2 rounded-lg`}
          >
            بک اند
          </div>
          <p
            className={`pl-4 md:pl-10 mt-[15px] text-xl text-justify ${
              isDarkTheme ? "text-gray-400" : "text-gray-600"
            }`}
          >
            نود جی اس یک محیط اجرایی یا runtime سمت سرور برای زبان جاوااسکریپت
            است. یعنی Node به ما این امکان را میدهد تا با جاوااسکریپت برنامه های
            سمت سرور و بک اند انواع وبسایت ها و اپلیکیشن ها را توسعه بدیم. یکی
            از محبوب ترین و پر استفاده ترین فریم های ورک های سمت سرور نیز
            Express JS است که همراه با Nodeدر این دوره به صورت کامل پوشش داده
            شده است
          </p>
          <button
            onClick={() => {
              navigator(
                `/courses/${location.pathname.substring(9)}/course-panel`
              );
            }}
            className={`${
              isDarkTheme ? "bg-white text-black" : "bg-black text-white"
            } mt-[20px] flex py-3 text-xl px-2 items-center justify-center gap-3 rounded-md outline-none outline-[5px] outline-transparent hover:outline-[#3866a2] transition-all duration-200`}
          >
            <h1>مشاهدۀ دوره</h1>
            <LuEye color={isDarkTheme ? "black" : "white"} size={25} />
          </button>
        </div>
      </div>
      <div dir="ltr" className="bottom-datas flex justify-between items-start">
        <div dir="rtl" className="sec-course-details-1 block">
          <div className="top-2-containers flex gap-5 justify-between w-full">
            <div
              className={`w-full mt-[30px] h-[150px] flex flex-col items-center justify-center gap-y-3 text-xl rounded-2xl ${
                isDarkTheme
                  ? "bg-[#1B1F38]"
                  : "bg-gray-100 border-[1px] border-slate-400"
              }`}
            >
              <IoTimeOutline color="#0D99FF" size={40} />
              <h1 className={isDarkTheme ? "text-white" : "text-black"}>
                110 ساعت
              </h1>
            </div>
            <div
              className={`w-full mt-[30px] h-[150px] flex flex-col items-center justify-center gap-y-3 text-xl rounded-2xl ${
                isDarkTheme
                  ? "bg-[#1B1F38]"
                  : "bg-gray-100 border-[1px] border-slate-400"
              }`}
            >
              <RiApps2Line color="#0D99FF" size={40} />
              <h1 className={isDarkTheme ? "text-white" : "text-black"}>
                600 جلسه
              </h1>
            </div>
          </div>
          <motion.div
            transition={{ delay: 0.3, duration: 0.5 }}
            className={`transition-all duration-200 w-auto ${
              isDarkTheme
                ? "bg-[#1B1F38]"
                : "bg-gray-100 border-[1px] border-slate-400"
            } px-5 pb-11 pt-5 flex flex-col items-center rounded-2xl mt-[30px] relative`}
          >
            <div
              style={{
                backgroundImage:
                  "url(https://avatars.githubusercontent.com/u/122119546?v=4)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className={`rounded-full w-[80px] h-[80px] ${
                isDarkTheme ? "border-white" : "border-gray-800"
              } border-[1.5px]`}
            ></div>
            <div className="mt-[10px] text-blue-500 flex gap-2 items-center">
              <p className={isDarkTheme ? "text-white" : "text-black"}>
                پارسا شعبانی
              </p>
              <FaRegCircleCheck size={20} />
            </div>
            <p
              className={`mt-[10px] ${
                isDarkTheme ? "text-slate-400" : "text-gray-600"
              } text-[15px]`}
            >
              مدرس این دوره
            </p>
            <AnimateHeight
              duration={200}
              height={teacherText == false ? 80 : "auto"}
            >
              <p
                className={`mt-[10px] mb-[20px] overflow-hidden z-10 ${
                  isDarkTheme ? "text-slate-300" : "text-gray-700"
                } text-[17px] text-justify w-[97%] m-auto`}
              >
                سلام! من پارسا شعبانی هستم، برنامه‌نویس وب با ۴ سال سابقه کار در
                زمینۀ طراحی و توسعۀ سایت‌های مدرن و کاربردی. به یادگیری مداوم و
                بهبود تجربۀ کاربری علاقه‌مندم و سعی می‌کنم همیشه کدی تمیز و قابل
                نگهداری بنویسم. علاوه بر برنامه‌نویسی، کوهنوردی و ورزش از
                علاقه‌مندی‌های اصلی من هستند که بهم انگیزه و تمرکز بیشتری
                می‌دهند. 🌿
              </p>
            </AnimateHeight>
            <div
              className={`absolute left-0 right-0 bottom-0 h-[125px] bg-gradient-to-t ${
                isDarkTheme
                  ? "from-[#16182a] to-[#1b1f3872]"
                  : "from-[#ffffff] to-[#ffffff10]"
              } z-20 transition-all rounded-b-2xl ${
                teacherText ? "opacity-0" : "opacity-90"
              }`}
            ></div>
            <div
              onClick={() => {
                setTeacherText(!teacherText);
              }}
              className={`absolute bottom-2 text-blue-500 font-bold text-lg z-30 ${
                isDarkTheme ? "hover:text-white" : "hover:text-black"
              } transition-all duration-200 cursor-pointer`}
            >
              {teacherText ? "بستن متن" : "ادامۀ متن"}
            </div>
          </motion.div>
        </div>
        <div dir="rtl" className="sec-course-details-2 block ml-[40px]">
          <div
            className={`sticky top-20 z-30 scroller-sort-container w-[100%] flex justify-center 2xl:text-xl md:text-lg text-[3.8vw] items-center py-5 2xl:gap-x-[8vw] gap-x-[6vw] gap h-[80px] ${
              isDarkTheme
                ? "bg-[#1B1F38] border-[1px] border-slate-700"
                : "bg-gray-100 border-[1px] border-slate-300"
            } rounded-xl mt-[30px]`}
          >
            <h1
              onClick={() => {
                infoRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                });
              }}
              className={`font-bold ${
                isDarkTheme
                  ? "text-slate-300 hover:text-blue-500"
                  : "text-gray-600 hover:text-blue-600"
              } cursor-pointer transition-all duration-200`}
            >
              توضیحات
            </h1>
            <h1
              onClick={() => {
                faqRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
              className={`font-bold ${
                isDarkTheme
                  ? "text-slate-300 hover:text-blue-500"
                  : "text-gray-600 hover:text-blue-600"
              } cursor-pointer transition-all duration-200`}
            >
              سوالات متداول
            </h1>
            <h1
              onClick={() => {
                commentsRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
              className={`font-bold ${
                isDarkTheme
                  ? "text-slate-300 hover:text-blue-500"
                  : "text-gray-600 hover:text-blue-600"
              } cursor-pointer transition-all duration-200`}
            >
              دیدگاه و پرسش‌ها
            </h1>
          </div>
          <div
            ref={infoRef}
            className={`relative w-[100%] py-3 ${
              isDarkTheme
                ? "bg-[#1C1F38]"
                : "bg-gray-100 border-[1px] border-slate-300"
            } rounded-xl mt-[30px]`}
          >
            <h1 className={`text-blue-500 font-bold text-3xl m-5`}>توضیحات</h1>
            <div className="m-5 mt-[20px] mb-[50px] text-justify">
              <AnimateHeight duration={400} height={courseInfo ? "auto" : 170}>
                <h2
                  className={`text-4xl font-bold ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  <strong>چرا Node JS؟</strong>
                </h2>
                <p
                  className={`text-lg mt-[20px] ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  <strong>
                    Node JS این امکان را به ما داده که از طریق جاوااسکریپت به
                    فایل ها دسترسی(i/o) داشته باشیم همچنین با دیتابیس در تعامل
                    باشیم و چون Node JS دارای امکان برنامه نویسی متقارن و
                    نامتقارن (Async/Sync) و همچنین event emitter می باشد باعث
                    میشود که سرعت اجرای برنامه های Node JS به شدت بالا برود.
                    Node JS مقیاس پذیری و پرفورمنس بالا میباشد. جامعه برنامه
                    نویسان Node JS بسیار بزرگ است و گروه ها و فروم های متعددی
                    برای پرسسش و پاسخ دارد. در Node JS ما به تعداد بسیار زیادی
                    از پکیج ها دسترسی داریم که کار ما را بسیار راحتتر و سریعتر
                    میکند
                  </strong>
                </p>
                <h2
                  className={`mt-[50px] text-4xl font-bold ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  <strong>بازار کار؟</strong>
                </h2>
                <p
                  className={`text-lg mt-[20px] ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  <strong>
                    Node JS از بازار کار خیلی خوبی برخوردار است و خیلی از
                    استارتاپ ها و کمپانی های بزرگ ایران از Node JS استفاده
                    میکنند. حقوق برنامه نویسان این تکنولوژی از سطح جونیور گرفته
                    تا سینیور عدد قابل توجهی است
                  </strong>
                </p>
                <h2
                  className={`mt-[50px] text-4xl font-bold ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  <strong>پیشنیاز دوره چیست؟</strong>
                </h2>
                <p
                  className={`text-lg mt-[20px] ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  <strong>
                    این دوره به هیچ پیشنیاز و دانش برنامه نویسی نیاز ندارد و
                    تمام مباحث از صفر پوشش داده شده است
                  </strong>
                </p>
                <h2
                  className={`mt-[50px] text-4xl font-bold ${
                    isDarkTheme ? "text-white" : "text-black"
                  }`}
                >
                  <strong>پروژه ها:</strong>
                </h2>
                <ul>
                  <li
                    style={{
                      marginTop: "20px",
                      fontSize: "17px",
                      fontWeight: "300",
                    }}
                  >
                    <p
                      style={{ textAlign: "justify" }}
                      className={isDarkTheme ? "text-white" : "text-black"}
                    >
                      <strong>
                        سیستم Restful api همراه با آپلود فایل در pure Node JS
                      </strong>
                    </p>
                  </li>
                  <li
                    style={{
                      marginTop: "20px",
                      fontSize: "17px",
                      fontWeight: "300",
                    }}
                  >
                    <p
                      style={{ textAlign: "justify" }}
                      className={isDarkTheme ? "text-white" : "text-black"}
                    >
                      <strong>
                        پروژه مشابه دیوار با جزئی تریت امکانات و به همراه قالب و
                        تمپلیت آن با ExpressJS و MongoDB
                      </strong>
                    </p>
                  </li>
                  <li
                    style={{
                      marginTop: "20px",
                      fontSize: "17px",
                      fontWeight: "300",
                    }}
                  >
                    <p
                      style={{ textAlign: "justify" }}
                      className={isDarkTheme ? "text-white" : "text-black"}
                    >
                      <strong>آموزش کامل MySQL و Sequelize</strong>
                    </p>
                  </li>
                  <li
                    style={{
                      marginTop: "20px",
                      fontSize: "17px",
                      fontWeight: "300",
                    }}
                  >
                    <p
                      style={{ textAlign: "justify" }}
                      className={isDarkTheme ? "text-white" : "text-black"}
                    >
                      <strong>
                        وبسایت فروشگاهی، کار با درگاه پرداخت و رمز یکبار
                        مصرف(SMS)
                      </strong>
                    </p>
                  </li>
                  <li
                    style={{
                      marginTop: "20px",
                      fontSize: "17px",
                      fontWeight: "300",
                    }}
                  >
                    <p
                      style={{ textAlign: "justify" }}
                      className={isDarkTheme ? "text-white" : "text-black"}
                    >
                      <strong>
                        اضافه کردن Elastic Search به پروژه فروشگاهی
                      </strong>
                    </p>
                  </li>
                  <li
                    style={{
                      marginTop: "20px",
                      fontSize: "17px",
                      fontWeight: "300",
                    }}
                  >
                    <p
                      style={{ textAlign: "justify" }}
                      className={isDarkTheme ? "text-white" : "text-black"}
                    >
                      <strong>وبلاگ و سیستم مدیریت محتوا(CMS)</strong>
                    </p>
                  </li>
                  <li
                    style={{
                      marginTop: "20px",
                      fontSize: "17px",
                      fontWeight: "300",
                    }}
                  >
                    <p
                      style={{ textAlign: "justify" }}
                      className={isDarkTheme ? "text-white" : "text-black"}
                    >
                      <strong>سیستم پیامرسان با Redis و </strong>
                      <a href="http://Socket.io">
                        <strong>Socket.io</strong>
                      </a>
                    </p>
                  </li>
                  <li
                    style={{
                      marginTop: "20px",
                      fontSize: "17px",
                      fontWeight: "300",
                    }}
                  >
                    <p
                      style={{ textAlign: "justify" }}
                      className={isDarkTheme ? "text-white" : "text-black"}
                    >
                      <strong>
                        اضافه کردن پروژه کار با GraphQL درسیستم فروشگاهی
                      </strong>
                    </p>
                  </li>
                  <li
                    style={{
                      marginTop: "20px",
                      fontSize: "17px",
                      fontWeight: "300",
                    }}
                  >
                    <p
                      style={{ textAlign: "justify" }}
                      className={isDarkTheme ? "text-white" : "text-black"}
                    >
                      <strong>
                        Design Pattern ها در Node js و جاوااسکریپت
                      </strong>
                    </p>
                  </li>
                  <li
                    style={{
                      marginTop: "20px",
                      fontSize: "17px",
                      fontWeight: "300",
                    }}
                  >
                    <p
                      style={{ textAlign: "justify" }}
                      className={isDarkTheme ? "text-white" : "text-black"}
                    >
                      <strong>پیاده سازی ساختار یک پروژه با MySQL</strong>
                    </p>
                  </li>
                  <li
                    style={{
                      marginTop: "20px",
                      fontSize: "17px",
                      fontWeight: "300",
                    }}
                  >
                    <p
                      style={{ textAlign: "justify" }}
                      className={isDarkTheme ? "text-white" : "text-black"}
                    >
                      <strong>
                        پیاده سازی پروژه مشاور املاک با Fastify با امکاناتی
                        مانند پیدا کردن ملک در محدوده، افزودن آگهی و …
                      </strong>
                    </p>
                  </li>
                </ul>
              </AnimateHeight>
              <div
                className={`absolute left-0 right-0 bottom-0 h-[180px] bg-gradient-to-t ${
                  isDarkTheme
                    ? "from-[#16182a] to-[#1b1f3872]"
                    : "from-[#ffffff] to-[#ffffff6a]"
                } z-20 transition-all rounded-b-2xl ${
                  courseInfo ? "opacity-0" : "opacity-80"
                }`}
              ></div>
              <div
                onClick={() => {
                  setCourseInfo(!courseInfo);
                }}
                className={`absolute right-[50%] translate-x-[50%] bottom-2 text-blue-500 font-bold text-lg z-30 ${
                  isDarkTheme ? "hover:text-white" : "hover:text-black"
                } transition-all duration-200 cursor-pointer`}
              >
                {courseInfo ? "بستن متن" : "ادامۀ متن"}
              </div>
            </div>
          </div>
          <div
            ref={faqRef}
            className={`w-[100%] py-3 ${
              isDarkTheme
                ? "bg-[#1C1F38]"
                : "bg-gray-100 border-[1px] border-slate-400"
            } rounded-xl mt-[30px]`}
          >
            <h1 className="text-blue-500 font-bold text-3xl m-5">
              سوالات متداول
            </h1>
            <p
              className={`m-5 ${
                isDarkTheme ? "text-slate-400" : "text-gray-600"
              } text-xl`}
            >
              هنوز هیچ سوالی اضافه نشده...
            </p>
          </div>
          <div
            ref={commentsRef}
            className={`w-[100%] py-3 ${
              isDarkTheme
                ? "bg-[#1C1F38]"
                : "bg-gray-100 border-[1px] border-slate-400"
            } rounded-xl mt-[30px]`}
          >
            <div className="flex sm:flex-row flex-col gap-y-5 justify-between items-center m-5">
              <h1 className="text-blue-500 font-bold text-3xl">
                دیدگاه و پرسش‌ها
              </h1>
              <button className="bg-gradient-to-l from-[#4CCAFE] to-[#18B2FA] flex py-3 text-lg px-2 items-center justify-center gap-3 rounded-md text-black outline-none outline-[5px] outline-transparent hover:outline-[#3866a2] transition-all duration-200">
                <h1>افزودن دیدگاه</h1>
                <MdAddComment color="black" size={20} />
              </button>
            </div>
            <div
              className={`transition-all duration-200 border-[1px] ${
                isDarkTheme ? "border-slate-400" : "border-gray-300"
              } rounded-lg m-5`}
            >
              <div className="flex items-center justify-between">
                <div className="flex m-5 items-center gap-3">
                  <div
                    style={{
                      backgroundImage:
                        "url(https://avatars.githubusercontent.com/u/122119546?v=4)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    className={`rounded-full w-[50px] h-[50px] ${
                      isDarkTheme ? "border-white" : "border-gray-800"
                    } border-[1.5px]`}
                  ></div>
                  <div>
                    <h1 className={isDarkTheme ? "text-white" : "text-black"}>
                      پارسا شعبانی
                    </h1>
                    <p
                      className={`text-md ${
                        isDarkTheme ? "text-slate-400" : "text-gray-600"
                      }`}
                    >
                      20 روز پیش
                    </p>
                  </div>
                </div>
                <div
                  className={`m-5 cursor-pointer hover:scale-[1.1] transition-all duration-200 flex items-center justify-center p-2 rounded-full ${
                    isDarkTheme ? "bg-[#35384D]" : "bg-gray-200"
                  } ${isDarkTheme ? "text-white" : "text-black"}`}
                >
                  <FaRegHeart size={20} />
                </div>
              </div>
              <p
                className={`mx-5 mb-5 ${
                  isDarkTheme ? "text-slate-200" : "text-gray-800"
                } text-lg`}
              >
                این دوره خیلی خوبه واقعا کیف کردم. همه چیز بدون پیشنیاز یادگرفتم
              </p>
            </div>
            <div
              className={`rounded-lg p-1 ml-5 mr-[100px] ${
                isDarkTheme ? "bg-[#35384D]" : "bg-gray-200"
              }`}
            >
              <div className="flex m-5 items-center gap-3">
                <div
                  style={{
                    backgroundImage:
                      "url(https://codenight.ir/_next/image?url=https%3A%2F%2Fstorageapi.codenight.ir%2Fcodenight-storage%2Fimages%2F1692188135740.png&w=384&q=75)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className={`rounded-full w-[50px] h-[50px] ${
                    isDarkTheme ? "border-white" : "border-gray-800"
                  } border-[1.5px]`}
                ></div>
                <div>
                  <h1 className={isDarkTheme ? "text-white" : "text-black"}>
                    مهدی زارعی
                  </h1>
                  <p
                    className={`text-md ${
                      isDarkTheme ? "text-slate-400" : "text-gray-600"
                    }`}
                  >
                    20 روز پیش
                  </p>
                </div>
              </div>
              <p
                className={`mx-5 mb-5 ${
                  isDarkTheme ? "text-slate-200" : "text-gray-800"
                } text-lg`}
              >
                بسیار ممنون از نظرتون
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
