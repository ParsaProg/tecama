import { motion } from "framer-motion";
import {
  Blend,
  BookOpenCheck,
  CalendarDays,
  Clock,
  ShieldX,
  SquareTerminal,
  Timer,
  Trophy,
} from "lucide-react";
import { CiCircleInfo } from "react-icons/ci";
import { TfiCup } from "react-icons/tfi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Dialog, DialogContent, DialogTrigger } from "../../ui/dialog";
import Swal from "sweetalert2";

import QuestionsImage from "../../../assets/images/weekly-default-553ede7bcc8e1b4a44c28a9e4a32068c.png";
import LiveCodingImage from "../../../assets/images/biweekly-default-f5a8fc3be85b6c9175207fd8fd855d47.png";
import "../../../styles/animateGradient.css";
import { TbBoxModel } from "react-icons/tb";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function RatedExamPage({ isDarkTheme }) {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);
  const examList = [
    {
      name: "آزمون فهم عمیق پایتون",
      time: "۱۶ بهمن ۱۴۰۳ ساعت ۱۴:۵۰ بعد از ظهر",
      type: "test",
    },
    {
      name: "آزمون فهم عمیق جاوا",
      time: "۱۶ بهمن ۱۴۰۳ ساعت ۱۴:۵۰ بعد از ظهر",
      type: "test",
    },
    {
      name: "آزمون فهم فرانت‌اند",
      time: "۱۶ بهمن ۱۴۰۳ ساعت ۱۴:۵۰ بعد از ظهر",
      type: "liveCode",
    },
    {
      name: "آزمون فهم عمیق پایتون",
      time: "۱۶ بهمن ۱۴۰۳ ساعت ۱۴:۵۰ بعد از ظهر",
      type: "liveCode",
    },
    {
      name: "آزمون فهم عمیق پایتون",
      time: "۱۶ بهمن ۱۴۰۳ ساعت ۱۴:۵۰ بعد از ظهر",
      type: "test",
    },
  ];
  const globalRankingUsers = [
    {
      id: "1",
      name: "پارسا شعبانی",
      rating: 500,
      examsJoinLen: 2250,
      profileImage: "https://avatars.githubusercontent.com/u/122119546?v=4",
    },
    {
      id: "2",
      name: "مهدی زارعی",
      rating: 300,
      examsJoinLen: 2230,
      profileImage:
        "https://github.com/ParsaProg/tecama_images/blob/main/photo_2025-02-19_00-49-04.jpg?raw=true",
    },
    {
      id: "3",
      name: "امیررضا شاه حسینی",
      rating: 100,
      examsJoinLen: 1999,
      profileImage: "https://avatars.githubusercontent.com/u/6297460?v=4",
    },
    {
      id: "4",
      name: "علی حسینی",
      rating: 90,
      examsJoinLen: 1850,
      profileImage:
        "https://picodl.com/download/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg",
    },
    {
      id: "5",
      name: "علی محمودی",
      rating: 80,
      examsJoinLen: 1850,
      profileImage:
        "https://picodl.com/download/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg",
    },
  ];
  const endedExams = [
    {
      titleImage:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/363315069/original/2cdd3171970497ed6775fd8520b293e477a6cc04/write-your-python-script.png",
      examTitle: "آزمون فهم عمیق پایتون",
      endTime: "12 بهمن 1403",
      examType: "4 گزینه‌ای",
    },
    {
      titleImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkNMK9zEIfSxI6ZXzeNhm9ZNNL8fsYigWunA&s",
      examTitle: "آزمون زبان برنامه‌نویسی جاوااسکریپت",
      endTime: "12 بهمن 1403",
      examType: "4 گزینه‌ای",
    },
    {
      titleImage:
        "https://appmaster.io/api/_files/hRaLG2N4DVjRZJQzCpN2zJ/download/",
      examTitle: "آزمون زبان برنامه‌نویسی جاوا",
      endTime: "12 بهمن 1403",
      examType: "4 گزینه‌ای",
    },
  ];
  const myExams = [
    {
      name: "آزمون فهم عمیق پایتون",
      time: "23 بهمن 1403 ساعت 5 بعد از ظهر",
      givedRatingNumber: 100,
      rankingChanges: "200/ 1900",
      finishTime: "25:46",
      correctsQuestions: 70,
      innoCorrectQuestions: 25,
      type: "4 گزینه ای",
    },
  ];

  const { pathname } = useLocation();
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{
          opacity: 0,
          y: 50,
          transition: { duration: 0.3, mease: "easeInOut" },
        }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className={`sm:mt-[-15px] mt-[-5px] rated-exam-page ${
          isDarkTheme
            ? "bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-pink-900/10"
            : "bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
        } animate-gradient`}
      >
        <div
          className={`relative min-h-[400px] w-full flex flex-col items-center justify-center px-4 overflow-hidden ${
            isDarkTheme ? "bg-gray-900" : "bg-gray-50"
          }`}
        >
          {/* Animated background glow effect */}
          <div className="absolute inset-0">
            <div className="absolute inset-0" />
          </div>

          {/* Greeting pill */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${
              isDarkTheme
                ? "bg-gray-800/50 border-gray-700/50"
                : "bg-gray-200/50 border-gray-300/50"
            } backdrop-blur-sm px-6 py-2 rounded-full mb-12 border`}
          >
            <span className={isDarkTheme ? "text-gray-100" : "text-gray-800"}>
              از کد‌نویسی لذت ببر ✨
            </span>
          </motion.div>

          {/* Trophy Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
            className="mb-8"
          >
            <div className="w-32 h-32 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg shadow-yellow-500/20">
              <Trophy className="w-16 h-16 text-white" />
            </div>
          </motion.div>

          {/* Title and Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className={isDarkTheme ? "text-gray-300" : "text-gray-600"}>
                آزمون رقابت در
              </span>{" "}
              <span className={isDarkTheme ? "text-white" : "text-black"}>
                تکاما
              </span>
            </h1>
            <p
              className={`text-xl ${
                isDarkTheme ? "text-gray-400" : "text-gray-500"
              }`}
            >
              با توجه به سطح و فعالیتت آزمون بده و نتایج رو ببین. سطحت رو هم در
              میان رقبات میتونی ببینی
            </p>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute inset-0 pointer-events-none"
          >
            <div
              className={`absolute top-20 left-1/4 w-2 h-2 rounded-full animate-pulse ${
                isDarkTheme ? "bg-blue-200" : "bg-blue-500"
              }`}
            />
            <div
              className={`absolute top-40 right-1/3 w-3 h-3 rounded-full animate-pulse delay-75 ${
                isDarkTheme ? "bg-purple-200" : "bg-purple-500"
              }`}
            />
            <div
              className={`absolute bottom-32 left-1/3 w-2 h-2 rounded-full animate-pulse delay-150 ${
                isDarkTheme ? "bg-pink-200" : "bg-pink-500"
              }`}
            />
          </motion.div>
        </div>
        <hr className={isDarkTheme ? "border-gray-700" : "border-gray-200"} />
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-[30px] px-4">
          <div
            onClick={() => {
              navigate("/exams/rated/exams-list?type=testQ");
            }}
            className={`exam-mode-containers cursor-pointer transition duration-200 relative rounded-xl w-full md:w-[400px] h-[330px] ${
              isDarkTheme ? "bg-[#0D1015]" : "bg-white border border-gray-200"
            }`}
          >
            <div
              style={{
                boxShadow: isDarkTheme
                  ? "1px 1px 20px 2px black"
                  : "1px 1px 20px 2px rgba(0,0,0,0.1)",
              }}
              className={`rounded-full w-[40px] flex items-center justify-center h-[40px] z-40 absolute top-3 right-3 ${
                isDarkTheme
                  ? "bg-[#00000053] text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              <BookOpenCheck size={25} />
            </div>
            <img
              src={QuestionsImage}
              className="w-[100%] h-[200px] rounded-t-xl"
              alt="Questions"
            />
            <h1
              className={`text-2xl mt-[20px] mr-[10px] font-[500] transition-all duration-200 ${
                isDarkTheme ? "text-white" : "text-gray-800"
              }`}
            >
              سوالات آماده و ۴ جوابی
            </h1>
            <h2
              className={`flex items-center gap-x-1 text-md mt-[8px] mr-[10px] font-[400] ${
                isDarkTheme ? "text-slate-400" : "text-gray-500"
              }`}
            >
              <CalendarDays size={20} />
              تاریخ آخرین آزمون این بخش: <strong>یکشنبه ۱۷ اسفند</strong>
            </h2>
            <h2
              className={`flex items-center gap-x-1 text-md mt-[8px] mr-[10px] font-[400] ${
                isDarkTheme ? "text-slate-400" : "text-gray-500"
              }`}
            >
              <Clock size={20} />
              ساعت آخرین آزمون این بخش:<strong> ۱۳:۲۵ بعد از ظهر</strong>
            </h2>
          </div>
          <div
            onClick={() => {
              navigate("/exams/rated/exams-list?type=live-codingQ");
            }}
            className={`transition cursor-pointer duration-200 exam-mode-containers relative rounded-xl w-full md:w-[400px] h-[330px] ${
              isDarkTheme ? "bg-[#0D1015]" : "bg-white border border-gray-200"
            }`}
          >
            <div
              style={{
                boxShadow: isDarkTheme
                  ? "1px 1px 20px 2px black"
                  : "1px 1px 20px 2px rgba(0,0,0,0.1)",
              }}
              className={`rounded-full w-[40px] flex items-center justify-center h-[40px] z-40 absolute top-3 right-3 ${
                isDarkTheme
                  ? "bg-[#00000053] text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              <SquareTerminal size={25} />
            </div>
            <img
              src={LiveCodingImage}
              className="w-[100%] h-[200px] rounded-t-xl"
              alt="Live Coding"
            />
            <h1
              className={`text-2xl mt-[20px] mr-[10px] font-[500] transition-all duration-200 ${
                isDarkTheme ? "text-white" : "text-gray-800"
              }`}
            >
              برنامه‌نویسی به صورت زنده
            </h1>
            <h2
              className={`flex items-center gap-x-1 text-md mt-[8px] mr-[10px] font-[400] ${
                isDarkTheme ? "text-slate-400" : "text-gray-500"
              }`}
            >
              <CalendarDays size={20} />
              تاریخ آخرین آزمون این بخش: <strong>یکشنبه ۱۷ اسفند</strong>
            </h2>
            <h2
              className={`flex items-center gap-x-1 text-md mt-[8px] mr-[10px] font-[400] ${
                isDarkTheme ? "text-slate-400" : "text-gray-500"
              }`}
            >
              <Clock size={20} />
              ساعت آخرین آزمون این بخش:<strong> ۱۳:۲۵ بعد از ظهر</strong>
            </h2>
          </div>
        </div>
        <div
          className={`mt-[100px] m-auto w-full max-w-[1100px] px-4 ${
            isDarkTheme ? "text-white" : "text-gray-800"
          }`}
        >
          <h1 className="font-[500] text-2xl">آزمون‌های به اتمام رسیده</h1>
          <div className="flex flex-col md:flex-row items-center mt-[20px] justify-start gap-10">
            {endedExams.map((endedExam, index) => {
              return (
                <Dialog key={index}>
                  <DialogTrigger className="m-0 p-0 text-start">
                    <div className="cursor-pointer h-[300px] ended-exams-containers flex flex-col w-full md:w-[350px]">
                      <img
                        src={endedExam.titleImage}
                        className="w-[100%] rounded-xl h-[300px]"
                        alt={endedExam.examTitle}
                      />
                      <h1
                        className={`text-xl mt-[20px] font-[500] transition-all duration-200 ${
                          isDarkTheme ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {endedExam.examTitle}
                      </h1>
                      <div
                        className={`mt-1 flex items-center justify-start gap-x-1 ${
                          isDarkTheme ? "text-slate-400" : "text-gray-500"
                        }`}
                      >
                        <ShieldX size={18} />
                        <p className="font-[400] text-md">تمام شده</p>
                        <p className="mr-1 text-gray-500">
                          {endedExam.endTime}
                        </p>
                      </div>
                      <div
                        className={`font-[400] flex items-center gap-x-1 ${
                          isDarkTheme ? "text-slate-400" : "text-gray-500"
                        }`}
                      >
                        <TbBoxModel />
                        نوع آزمون: {endedExam.examType}
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent
                    className={isDarkTheme ? "bg-gray-800" : "bg-white"}
                  >
                    <div
                      className={`content text-start ${
                        isDarkTheme ? "text-white" : "text-gray-800"
                      }`}
                    >
                      <h1 className="text-2xl mb-5">اطلاعات و جزییات آزمون</h1>
                      <h3 className="text-xl">زبان برنامه‌نویسی: پایتون</h3>
                      <h3 className="text-xl mt-3">زمان آزمون: 30 دقیقه</h3>
                      <h3 className="text-xl mt-3">نوع آزمون: 4 گزینه‌ای</h3>
                      <h3 className="text-xl mt-3">
                        زبان برنامه‌نویسی: پایتون
                      </h3>
                      <p className="text-lg mt-3">
                        لطفاً قبل از شروع آزمون، از آماده بودن خود و محیط
                        اطرافتان اطمینان حاصل کنید.
                      </p>
                      <button
                        onClick={() => {
                          const refToken =
                            localStorage.getItem("refToken") || "notLoggined";

                          if (refToken != "notLoggined") {
                            navigate(`${pathname}/${endedExam.examTitle}`);
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
              );
            })}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between mt-[100px] m-auto gap-[20px] max-w-[1100px] w-full">
            <div
              className={`w-full md:w-[30%] h-[720px] rounded-lg ${
                isDarkTheme ? "bg-[#0D1015]" : "bg-white border border-gray-200"
              }`}
            >
              <div className="content m-5">
                <div
                  className={`head-global-ranking flex items-center gap-x-[5px] ${
                    isDarkTheme ? "text-white" : "text-gray-800"
                  }`}
                >
                  <TfiCup size={20} />
                  رتبه‌بندی جهانی
                </div>

                {globalRankingUsers.map((users, index) => {
                  return (
                    <div
                      key={`grank${index}`}
                      className="flex items-center gap-x-3 mt-[30px]"
                    >
                      <h1
                        className={`${
                          users.id <= 3
                            ? "text-yellow-400"
                            : isDarkTheme
                            ? "text-slate-300"
                            : "text-gray-600"
                        } text-lg`}
                      >
                        {users.id}
                      </h1>
                      <div
                        className="rounded-full flex justify-center w-[50px] h-[50px] border-[1.5px] border-yellow-400"
                        style={{
                          backgroundImage: `url(${users.profileImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <div className="w-[20px] mt-[-10px] h-[20px]">
                          {users.id == 1 ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11.3099 1.00606L17.6067 4.41715C18.4941 4.89785 19.0469 5.82596 19.0469 6.83516V13.361C19.0469 14.3702 18.4941 15.2983 17.6067 15.779L11.3099 19.1901C10.4927 19.6328 9.50728 19.6328 8.69014 19.1901L2.39326 15.779C1.5059 15.2983 0.953125 14.3702 0.953125 13.361V6.83516C0.953125 5.82596 1.5059 4.89785 2.39326 4.41715L8.69014 1.00606C9.50728 0.563408 10.4927 0.563408 11.3099 1.00606Z"
                                fill="url(#paint0_linear_2597_13891)"
                              />
                              <path
                                opacity="0.65"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.3807 7.94861L14.5857 13.3071C14.5457 13.5767 14.3143 13.7764 14.0417 13.7764H7.6822C7.37845 13.7764 7.1322 13.5301 7.1322 13.2264C7.1322 13.0531 7.21383 12.89 7.35249 12.7861L14.5069 7.42769C14.75 7.24559 15.0947 7.29507 15.2768 7.53819C15.3648 7.65567 15.4022 7.80343 15.3807 7.94861Z"
                                fill="white"
                              />
                              <path
                                opacity="0.65"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.49306 7.42766L12.6475 12.7861C12.8906 12.9682 12.9401 13.3129 12.758 13.556C12.6541 13.6947 12.491 13.7763 12.3178 13.7763H5.95829C5.6857 13.7763 5.45424 13.5767 5.41424 13.307L4.61931 7.94858C4.57473 7.64812 4.78218 7.3684 5.08265 7.32383C5.22783 7.30229 5.37559 7.33967 5.49306 7.42766Z"
                                fill="white"
                              />
                              <path
                                opacity="0.9"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.4459 5.61399L14.3578 13.0727C14.4989 13.3417 14.3952 13.6741 14.1262 13.8152C14.0474 13.8566 13.9598 13.8782 13.8708 13.8782H6.04695C5.74319 13.8782 5.49695 13.6319 5.49695 13.3282C5.49695 13.2392 5.51854 13.1515 5.55987 13.0727L9.47179 5.61399C9.61287 5.34499 9.94531 5.24129 10.2143 5.38237C10.3133 5.43426 10.394 5.51505 10.4459 5.61399Z"
                                fill="white"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_2597_13891"
                                  x1="10"
                                  y1="0.674072"
                                  x2="10"
                                  y2="19.5221"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#EFCB7B" />
                                  <stop offset="0.31026" stopColor="#EFCB7B" />
                                  <stop offset="1" stopColor="#A18250" />
                                </linearGradient>
                              </defs>
                            </svg>
                          ) : users.id == 2 ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11.3099 1.00606L17.6067 4.41715C18.4941 4.89785 19.0469 5.82596 19.0469 6.83516V13.361C19.0469 14.3702 18.4941 15.2983 17.6067 15.779L11.3099 19.1901C10.4927 19.6328 9.50728 19.6328 8.69014 19.1901L2.39326 15.779C1.5059 15.2983 0.953125 14.3702 0.953125 13.361V6.83516C0.953125 5.82596 1.5059 4.89785 2.39326 4.41715L8.69014 1.00606C9.50728 0.563408 10.4927 0.563408 11.3099 1.00606Z"
                                fill="url(#paint0_linear_2597_13891)"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11.3099 1.00606L17.6067 4.41715C18.4941 4.89785 19.0469 5.82596 19.0469 6.83516V13.361C19.0469 14.3702 18.4941 15.2983 17.6067 15.779L11.3099 19.1901C10.4927 19.6328 9.50728 19.6328 8.69014 19.1901L2.39326 15.779C1.5059 15.2983 0.953125 14.3702 0.953125 13.361V6.83516C0.953125 5.82596 1.5059 4.89785 2.39326 4.41715L8.69014 1.00606C9.50728 0.563408 10.4927 0.563408 11.3099 1.00606Z"
                                fill="url(#paint1_linear_2597_13891)"
                              />
                              <path
                                opacity="0.65"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.3807 7.94861L14.5857 13.3071C14.5457 13.5767 14.3143 13.7764 14.0417 13.7764H7.6822C7.37845 13.7764 7.1322 13.5301 7.1322 13.2264C7.1322 13.0531 7.21383 12.89 7.35249 12.7861L14.5069 7.42769C14.75 7.24559 15.0947 7.29507 15.2768 7.53819C15.3648 7.65567 15.4022 7.80343 15.3807 7.94861Z"
                                fill="white"
                              />
                              <path
                                opacity="0.65"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.49306 7.42766L12.6475 12.7861C12.8906 12.9682 12.9401 13.3129 12.758 13.556C12.6541 13.6947 12.491 13.7763 12.3178 13.7763H5.95829C5.6857 13.7763 5.45424 13.5767 5.41424 13.307L4.61931 7.94858C4.57473 7.64812 4.78218 7.3684 5.08265 7.32383C5.22783 7.30229 5.37559 7.33967 5.49306 7.42766Z"
                                fill="white"
                              />
                              <path
                                opacity="0.9"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.4459 5.61399L14.3578 13.0727C14.4989 13.3417 14.3952 13.6741 14.1262 13.8152C14.0474 13.8566 13.9598 13.8782 13.8708 13.8782H6.04695C5.74319 13.8782 5.49695 13.6319 5.49695 13.3282C5.49695 13.2392 5.51854 13.1515 5.55987 13.0727L9.47179 5.61399C9.61287 5.34499 9.94531 5.24129 10.2143 5.38237C10.3133 5.43426 10.394 5.51505 10.4459 5.61399Z"
                                fill="white"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_2597_13891"
                                  x1="10"
                                  y1="0.674072"
                                  x2="10"
                                  y2="19.5221"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#EFCB7B" />
                                  <stop offset="0.31026" stopColor="#EFCB7B" />
                                  <stop offset="1" stopColor="#A18250" />
                                </linearGradient>
                                <linearGradient
                                  id="paint1_linear_2597_13891"
                                  x1="10"
                                  y1="0.674072"
                                  x2="10"
                                  y2="19.5221"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#B9C1C6" />
                                  <stop offset="1" stopColor="#777B7D" />
                                </linearGradient>
                              </defs>
                            </svg>
                          ) : users.id == 3 ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11.3099 1.00606L17.6067 4.41715C18.4941 4.89785 19.0469 5.82596 19.0469 6.83516V13.361C19.0469 14.3702 18.4941 15.2983 17.6067 15.779L11.3099 19.1901C10.4927 19.6328 9.50728 19.6328 8.69014 19.1901L2.39326 15.779C1.5059 15.2983 0.953125 14.3702 0.953125 13.361V6.83516C0.953125 5.82596 1.5059 4.89785 2.39326 4.41715L8.69014 1.00606C9.50728 0.563408 10.4927 0.563408 11.3099 1.00606Z"
                                fill="url(#paint2_linear_2597_13926)"
                              />
                              <path
                                opacity="0.65"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.3807 7.94861L14.5857 13.3071C14.5457 13.5767 14.3143 13.7764 14.0417 13.7764H7.6822C7.37845 13.7764 7.1322 13.5301 7.1322 13.2264C7.1322 13.0531 7.21383 12.89 7.35249 12.7861L14.5069 7.42769C14.75 7.24559 15.0947 7.29507 15.2768 7.53819C15.3648 7.65567 15.4022 7.80343 15.3807 7.94861Z"
                                fill="white"
                              />
                              <path
                                opacity="0.65"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.49306 7.42766L12.6475 12.7861C12.8906 12.9682 12.9401 13.3129 12.758 13.556C12.6541 13.6947 12.491 13.7763 12.3178 13.7763H5.95829C5.6857 13.7763 5.45424 13.5767 5.41424 13.307L4.61931 7.94858C4.57473 7.64812 4.78218 7.3684 5.08265 7.32383C5.22783 7.30229 5.37559 7.33967 5.49306 7.42766Z"
                                fill="white"
                              />
                              <path
                                opacity="0.9"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.4459 5.61399L14.3578 13.0727C14.4989 13.3417 14.3952 13.6741 14.1262 13.8152C14.0474 13.8566 13.9598 13.8782 13.8708 13.8782H6.04695C5.74319 13.8782 5.49695 13.6319 5.49695 13.3282C5.49695 13.2392 5.51854 13.1515 5.55987 13.0727L9.47179 5.61399C9.61287 5.34499 9.94531 5.24129 10.2143 5.38237C10.3133 5.43426 10.394 5.51505 10.4459 5.61399Z"
                                fill="white"
                              />
                              <defs>
                                <linearGradient
                                  id="paint2_linear_2597_13926"
                                  x1="10"
                                  y1="0.674072"
                                  x2="10"
                                  y2="19.5221"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#EAB98A" />
                                  <stop offset="1" stopColor="#B07648" />
                                </linearGradient>
                              </defs>
                            </svg>
                          ) : null}
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <h1
                          className={`font-bold text-lg ${
                            users.id <= 3
                              ? "text-yellow-400"
                              : isDarkTheme
                              ? "text-slate-300"
                              : "text-gray-600"
                          }`}
                        >
                          {users.name}
                        </h1>
                        <span className="flex items-center gap-x-2">
                          <h1
                            className={`font-[300] text-sm ${
                              isDarkTheme ? "text-slate-400" : "text-gray-500"
                            }`}
                          >
                            ریتینگ : {users.rating}
                          </h1>
                          <h1
                            className={`font-[300] text-sm ${
                              isDarkTheme ? "text-slate-400" : "text-gray-500"
                            }`}
                          >
                            تعداد آزمون: {users.examsJoinLen}
                          </h1>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className={`w-full md:w-[70%] h-[720px] rounded-lg ${
                isDarkTheme ? "bg-[#0D1015]" : "bg-white border border-gray-200"
              }`}
            >
              <div className="contest-content m-5">
                <div className="head flex items-center gap-x-[20px]">
                  <h1
                    onClick={() => setTabIndex(0)}
                    className={`rounded-md cursor-pointer ${
                      tabIndex == 0 &&
                      (isDarkTheme ? "bg-slate-800" : "bg-gray-100")
                    } ${
                      isDarkTheme
                        ? "border-slate-700 text-white"
                        : "border-gray-300 text-gray-800"
                    } border-[1px] transition-all duration-200 text-md p-2`}
                  >
                    آزمون‌های تمام شده
                  </h1>
                  <h1
                    onClick={() => setTabIndex(1)}
                    className={`rounded-md cursor-pointer ${
                      tabIndex == 1 &&
                      (isDarkTheme ? "bg-slate-800" : "bg-gray-100")
                    } ${
                      isDarkTheme
                        ? "border-slate-700 text-white"
                        : "border-gray-300 text-gray-800"
                    } border-[1px] transition-all duration-200 text-md p-2`}
                  >
                    آزمون‌های من
                  </h1>
                </div>
                {tabIndex == 0 ? (
                  <div className="mt-[20px] exams-ended-list flex flex-col items-start justify-start gap-y-[20px]">
                    {examList.map((examData, index) => {
                      return (
                        <div
                          key={`div1${index}`}
                          className="ended-courses-list-container flex items-center justify-between w-[100%] cursor-pointer"
                        >
                          <div
                            key={`div2${index}`}
                            className="right-side flex items-center gap-x-[15px]"
                          >
                            <div
                              className="rounded-md w-[200px] h-[100px]"
                              style={{
                                backgroundImage: `url(${
                                  examData.type == "test"
                                    ? QuestionsImage
                                    : LiveCodingImage
                                })`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                              }}
                            ></div>
                            <div className="flex flex-col gap-y-[5px]">
                              <h1
                                className={`font-[400] text-lg ${
                                  isDarkTheme ? "text-white" : "text-gray-800"
                                }`}
                              >
                                {examData.name}
                              </h1>
                              <h2
                                className={`font-[300] text-sm flex items-center gap-x-1 ${
                                  isDarkTheme
                                    ? "text-slate-400"
                                    : "text-gray-500"
                                }`}
                              >
                                <Timer size={20} />
                                {examData.time}
                              </h2>
                              <h2
                                className={`font-[300] text-sm flex items-center gap-x-1 ${
                                  isDarkTheme
                                    ? "text-slate-400"
                                    : "text-gray-500"
                                }`}
                              >
                                <Blend size={20} />
                                {examData.type == "test"
                                  ? "آزمون چهار گزینه‌ای"
                                  : "کد نویسی زنده"}
                              </h2>
                            </div>
                          </div>
                          <div key={`div3${index}`} className="left-side">
                            <button
                              className={`outline-none hover:bg-[#754FD2] hover:text-white hover:border-transparent transition-all duration-200 border-[1px] ${
                                isDarkTheme
                                  ? "border-slate-600"
                                  : "border-gray-300"
                              } text-md rounded-lg px-3 py-2 text-[#754FD2]`}
                            >
                              شروع آزمون
                            </button>
                          </div>
                        </div>
                      );
                    })}
                    <div className="flex items-center justify-start gap-x-[5px]">
                      <div
                        className={`rounded-md flex items-center justify-center border-[1px] text-sm transition-all duration-200 w-[30px] h-[30px] ${
                          isDarkTheme
                            ? "text-slate-600 border-slate-600"
                            : "text-gray-500 border-gray-300"
                        }`}
                      >
                        <MdOutlineKeyboardArrowRight size={20} />
                      </div>
                      <div
                        className={`rounded-md flex items-center justify-center border-[1px] text-sm hover:bg-slate-600 transition-all duration-200 w-[30px] h-[30px] ${
                          isDarkTheme
                            ? "text-white bg-slate-600 border-slate-600"
                            : "text-gray-800 bg-gray-100 border-gray-300"
                        }`}
                      >
                        ۱
                      </div>
                      <div
                        className={`rounded-md flex items-center justify-center border-[1px] cursor-pointer text-sm hover:bg-slate-600 transition-all duration-200 w-[30px] h-[30px] ${
                          isDarkTheme
                            ? "text-white border-slate-600 hover:bg-slate-600"
                            : "text-gray-800 border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        ۲
                      </div>
                      <div
                        className={`rounded-md flex items-center justify-center border-[1px] cursor-pointer text-sm hover:bg-slate-600 transition-all duration-200 w-[30px] h-[30px] ${
                          isDarkTheme
                            ? "text-white border-slate-600 hover:bg-slate-600"
                            : "text-gray-800 border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        ۳
                      </div>
                      <div
                        className={`rounded-md flex items-center justify-center border-[1px] cursor-pointer text-sm hover:bg-slate-600 transition-all duration-200 w-[30px] h-[30px] ${
                          isDarkTheme
                            ? "text-white border-slate-600 hover:bg-slate-600"
                            : "text-gray-800 border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        ۴
                      </div>
                      <div
                        className={`rounded-md flex items-center justify-center border-[1px] cursor-pointer text-sm hover:bg-slate-600 transition-all duration-200 w-[30px] h-[30px] ${
                          isDarkTheme
                            ? "text-white border-slate-600 hover:bg-slate-600"
                            : "text-gray-800 border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        ۵
                      </div>
                      <div
                        className={`rounded-md flex items-center justify-center border-[1px] text-sm w-[30px] h-[30px] ${
                          isDarkTheme
                            ? "text-slate-600 border-slate-800"
                            : "text-gray-500 border-gray-200"
                        }`}
                      >
                        ...
                      </div>
                      <div
                        className={`rounded-md flex items-center justify-center border-[1px] cursor-pointer text-sm hover:bg-slate-600 transition-all duration-200 w-[30px] h-[30px] ${
                          isDarkTheme
                            ? "text-white border-slate-600 hover:bg-slate-600"
                            : "text-gray-800 border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        ۲۰
                      </div>
                      <div
                        className={`rounded-md flex items-center justify-center border-[1px] cursor-pointer text-sm hover:bg-slate-600 transition-all duration-200 w-[30px] h-[30px] ${
                          isDarkTheme
                            ? "text-white border-slate-600 hover:bg-slate-600"
                            : "text-gray-800 border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        <MdOutlineKeyboardArrowRight
                          size={20}
                          className="rotate-[180deg]"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="my-exams-endeds overflow-hidden">
                    <div className="my-5 mt-[20px]">
                      {myExams.map((myExam, myExamIndex) => {
                        return (
                          <div
                            key={`div1${myExamIndex}`}
                            className="ended-courses-list-container flex items-center justify-between w-[100%] cursor-pointer"
                          >
                            <div
                              key={`div2${myExamIndex}`}
                              className="right-side flex items-center gap-x-[15px]"
                            >
                              <div
                                className="rounded-md w-[200px] h-[100px]"
                                style={{
                                  backgroundImage: `url(${
                                    myExam.type == "test"
                                      ? QuestionsImage
                                      : LiveCodingImage
                                  })`,
                                  backgroundPosition: "center",
                                  backgroundSize: "cover",
                                }}
                              ></div>
                              <div className="flex flex-col gap-y-[5px]">
                                <h1
                                  className={`font-[400] text-lg ${
                                    isDarkTheme ? "text-white" : "text-gray-800"
                                  }`}
                                >
                                  {myExam.name}
                                </h1>
                                <h2
                                  className={`font-[300] text-sm flex items-center gap-x-1 ${
                                    isDarkTheme
                                      ? "text-slate-400"
                                      : "text-gray-500"
                                  }`}
                                >
                                  <Timer size={20} />
                                  {myExam.finishTime}
                                </h2>
                                <h2
                                  className={`font-[300] text-sm flex items-center gap-x-1 ${
                                    isDarkTheme
                                      ? "text-slate-400"
                                      : "text-gray-500"
                                  }`}
                                >
                                  <Blend size={20} />
                                  {myExam.type == "test"
                                    ? "آزمون چهار گزینه‌ای"
                                    : "کد نویسی زنده"}
                                </h2>
                              </div>
                            </div>
                            <div
                              key={`div3${myExamIndex}`}
                              className="left-side"
                            >
                              <button
                                className={`outline-none hover:bg-[#754FD2] hover:text-white hover:border-transparent transition-all duration-200 border-[1px] ${
                                  isDarkTheme
                                    ? "border-slate-600"
                                    : "border-gray-300"
                                } text-md rounded-lg px-3 py-2 text-[#754FD2]`}
                              >
                                مشاهده نتیجۀ آزمون
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="h-[50px]"></div>
      </motion.div>
    </>
  );
}
