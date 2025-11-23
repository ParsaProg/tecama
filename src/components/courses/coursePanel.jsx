import { useLocation } from "react-router-dom";
import { PiExam } from "react-icons/pi";
import { TbProgressCheck } from "react-icons/tb";
import { TbProgressX } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { GoDownload } from "react-icons/go";
import VideoPlayer from "../video/videoPlayer";
import "../../styles/responsive/coursesPanelPage.css";
import { motion } from "framer-motion";

export default function CoursePanel({isDarkTheme}) {
  const [sessionContainers, setSessionContainers] = useState([
    {
      title: "فصل اول | آشنایی با مفاهیم اولیه",
      subData: [
        { title: "چرا نودجی‌اس؟" },
        { title: "ارزش این فریمورک در جهان" },
      ],
      opened: true,
    },
    {
      title: "فصل دوم | آموزش جاوااسکریپت",
      subData: [
        { title: "آموزش Get" },
        { title: "آموزش POST" },
        {
          title: "آموزش Any",
        },
        { title: "آموزش Delete" },
      ],
      opened: false,
    },
    {
      title: "فصل سوم | آموزش پایتون",
      subData: [{ title: "آموزش مبانی" }, { title: "آموزش فانکشن‌ها" }],
      opened: false,
    },
  ]);

  const location = useLocation();
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
      className="course-panel-page flex gap-x-[50px] gap-y-[50px] items-start justify-between mt-[-13px]"
    >
      <div className={`right-side-controller rounded-b-md w-[500px] h-full ${isDarkTheme? "bg-[#1C1F38]": "bg-white border-[1px] border-slate-300"} p-5`}>
        <div className="flex flex-col gap-y-[20px]">
          <button className={`select-none flex items-center justify-center gap-x-3 outline-none transition-all duration-200 hover:bg-slate-200 hover:text-blue-600 ${isDarkTheme? "bg-slate-700 text-blue-300 border-none": "bg-white border-[1px] text-blue-500 border-slate-300"} rounded-lg p-3`}>
            <h1> شرکت در آزمون دوره</h1>
            <PiExam size={25} />
          </button>
          <div className={`select-none flex items-center justify-center gap-x-3 outline-none bg-orange-500 border-none text-white rounded-lg p-3`}>
            محتوای این دوره تکمیل نشده
            <TbProgressX size={25} />
          </div>
          <div className={`flex items-center justify-between ${isDarkTheme? "text-white": "text-black"}`}>
            <h1>درصد پیشرفت</h1>
            <h1>
              <strong className="text-blue-500">57</strong> / 267 جلسه
            </h1>
          </div>
          <div className={`progress relative ${isDarkTheme? "bg-slate-500": "bg-slate-300"} rounded-full w-[100%] h-[13px] mt-[-10px]`}>
            <div className="absolute right-0 top-0 h-full w-[21%] rounded-full bg-blue-700"></div>
          </div>
        </div>
        <div className="w-[100%] h-[1px] bg-slate-300 my-[20px] p-0"></div>
        <div className="course-sessions flex flex-col items-start">
          <h1 className="text-blue-600 font-bold text-2xl ">فصل‌های دوره</h1>
          <div className="session-containers flex flex-col items-start w-[100%] gap-y-[20px] my-[20px]">
            {sessionContainers.map((value, index) => {
              return (
                <div key={index} className="flex flex-col items-end w-[100%]">
                  <div
                    onClick={() => {
                      setSessionContainers((prevContainers) =>
                        prevContainers.map((container, i) =>
                          i === index
                            ? { ...container, opened: !container.opened }
                            : container
                        )
                      );
                    }}
                    key={index}
                    className={`cursor-pointer  px-5 flex items-center justify-between ${isDarkTheme? "bg-[#35384D] text-white": "text-black bg-slate-100 border-[1px] border-slate-300"} rounded-md w-[100%] h-[60px]`}
                  >
                    <h1 className=" text-lg">{value.title}</h1>
                    <IoIosArrowBack
                      className={`${value.opened && "rotate-[-90deg]"}`}
                      size={25}
                    />
                  </div>
                  {value.subData.map((subDataValue, subDataIndex) => {
                    return (
                      value.opened == true && (
                        <div
                          key={subDataIndex}
                          className={`cursor-pointer mt-[20px] px-5 flex items-center justify-between rounded-md w-[90%] h-[60px] ${isDarkTheme? "bg-[#292B43] text-white": "text-black border-[1px] border-slate-300 bg-slate-100"}`}
                        >
                          <h1 className=" text-lg">
                            {subDataValue.title}
                          </h1>
                          <div className="rounded-md text-white bg-gradient-to-l from-blue-500 to-blue-900 px-3 py-2">
                            <GoDownload size={20} />
                          </div>
                        </div>
                      )
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        dir="ltr"
        className="main-side-video-and-desc ml-[20px] mt-[50px] w-[60%] h-[300px]"
      >
        <VideoPlayer
          src={
            "https://botostart.org/courses/other/node/videos/00-js-what-is-programming.mp4"
          }
          poster="https://dl.codeyad.com/assets/images/Courses/b25b62cf-9087-4b5a-8c83-7acf88387d3f.jpeg"
        />
      </div>
    </motion.div>
  );
}
