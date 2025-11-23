import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import "../../../styles/swal.css";

export default function ExamInfo({ isDarkTheme }) {
  const examResult = localStorage.getItem("examResult") || "none";
  const { pathname } = useLocation();
  const location = useLocation();
  const navigate = useNavigate();
  const [difLevel, setDifLevel] = useState(0);
  const checkBoxRef = useRef();
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
      className={`w-[90%] text-center md:text-start sm:w-[500px] border-[1px] ${
        isDarkTheme
          ? "bg-[#0D1117] border-slate-600 text-white"
          : "text-black bg-white border-slate-300"
      } flex flex-col items-start justify-center mx-auto mt-[30px] rounded-xl px-4 py-5 `}
    >
      <div>
        <div className="card-header">
          <h1 className="text-2xl font-bold mb-[10px]">
            آزمون زبان برنامه‌نویسی
          </h1>
          <h3 className="mb-[20px]">اطلاعات و جزئیات آزمون</h3>
        </div>
        <div className="space-y-4">
          <p>
            <strong>زبان برنامه‌نویسی:</strong> جاوااسکریپت
          </p>
          <p>
            <strong>تعداد سوالات:</strong> ۲۰ سوال
          </p>
          <p>
            <strong>زمان آزمون:</strong> ۳۰ دقیقه
          </p>
          <p>
            <strong>نوع سوالات:</strong> چندگزینه‌ای
          </p>
          <p>
            لطفاً قبل از شروع آزمون، از آماده بودن خود و محیط اطرافتان اطمینان
            حاصل کنید.
          </p>
        </div>
        <div className="w-[100%] p-5 mt-[20px] border-[1px] border-slate-500 rounded-lg">
          <h1 className="text-xl">میزان سختی</h1>
          <div className="mt-[15px] sm:flex grid grid-cols-2 items-center justify-start sm:gap-x-[30px] gap-5">
            <div
              onClick={() => {
                setDifLevel(0);
              }}
              style={{
                border: difLevel == 0 && "1px solid #16A34A",
                background: difLevel == 0 && "#2ace6617",
              }}
              className="transition-all duration-200 p-2 rounded-lg cursor-pointer border-[0.5px] border-slate-600 flex items-center justify-center gap-3"
            >
              <div className="flex flex-col gap-y-1">
                <div className="rounded-full w-[13px] h-[2px] bg-green-600"></div>
                <div className="rounded-full w-[13px] h-[2px] bg-green-600"></div>
                <div className="rounded-full w-[13px] h-[2px] bg-green-600"></div>
              </div>
              <h1 className="text-lg ">آسان</h1>
            </div>
            <div
              onClick={() => {
                setDifLevel(1);
              }}
              style={{
                border: difLevel == 1 && "1px solid #282db4",
                background: difLevel == 1 && "#282db417",
              }}
              className="transition-all duration-200 p-2 rounded-lg cursor-pointer border-[0.5px] border-slate-600 flex items-center justify-center gap-3"
            >
              <div className="flex flex-col gap-y-1">
                <div className="rounded-full w-[13px] h-[2px] bg-green-600"></div>
                <div className="rounded-full w-[13px] h-[2px] bg-green-600"></div>
                <div className="rounded-full w-[13px] h-[2px] bg-red-600"></div>
              </div>
              <h1 className="text-lg ">متوسط</h1>
            </div>
            <div
              onClick={() => {
                setDifLevel(2);
              }}
              style={{
                border: difLevel == 2 && "1px solid #cb752d ",
                background: difLevel == 2 && "#cb742d1b",
              }}
              className="transition-all duration-200 p-2 rounded-lg cursor-pointer border-[0.5px] border-slate-600 flex items-center justify-center gap-3"
            >
              <div className="flex flex-col gap-y-1">
                <div className="rounded-full w-[13px] h-[2px] bg-green-600"></div>
                <div className="rounded-full w-[13px] h-[2px] bg-red-600"></div>
                <div className="rounded-full w-[13px] h-[2px] bg-red-600"></div>
              </div>
              <h1 className="text-lg ">سخت</h1>
            </div>
            <div
              onClick={() => {
                setDifLevel(3);
              }}
              style={{
                border: difLevel == 3 && "1px solid #cb2d2d",
                background: difLevel == 3 && "#cb2d2d14",
              }}
              className="transition-all duration-200 p-2 rounded-lg cursor-pointer border-[0.5px] border-slate-600 flex items-center justify-center gap-3"
            >
              <div className="flex flex-col gap-y-1">
                <div className="rounded-full w-[13px] h-[2px] bg-[#d83d3d]"></div>
                <div className="rounded-full w-[13px] h-[2px] bg-red-600"></div>
                <div className="rounded-full w-[13px] h-[2px] bg-red-600"></div>
              </div>
              <h1 className="text-lg ">ارشد</h1>
            </div>
          </div>
        </div>
        <footer className="flex sm:flex-row flex-col items-center justify-start gap-x-5">
          <button
            onClick={() => {
              const refToken =
                localStorage.getItem("refToken") || "notLoggined";

              if (refToken != "notLoggined") {
                navigate(`${pathname}/panel-exam-1${location.search}`);
              } else {
                let i = 0;

                if (i === 0) {
                  Swal.fire({
                    position: "top-start",
                    icon: "error",
                    background: "#0D1015",
                    title:
                      "<h5 style='color:white; font-size: 20px;'>" +
                      "برای ورود به این بخش باید وارد حساب کاربری خود شوید" +
                      "</h5>",

                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    customClass: {
                      icon: "custom-icon-size", // Add a custom class to the icon
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
            className={`p-2 mt-[20px] rounded-md border-[1px] border-slate-600 transition-all duration-200 hover:bg-slate-900 ${
              !isDarkTheme && "hover:text-white"
            }`}
          >
            {examResult !== "none" ? "آزمون دوباره" : "شروع آزمون"}
          </button>
          {examResult !== "none" && (
            <button
              onClick={() => {
                navigate(
                  `/exams/personal/${location.search.substring(
                    location.search.indexOf("=") + 1
                  )}/result?lang=${location.search.substring(
                    location.search.indexOf("=") + 1
                  )}`
                );
              }}
              className={`p-2 mt-[20px] rounded-md border-[1px] border-slate-600 transition-all duration-200 hover:bg-slate-900 ${
                !isDarkTheme && "hover:text-white"
              }`}
            >
              مشاهدۀ نتیجۀ این آزمون
            </button>
          )}
        </footer>
      </div>
    </motion.div>
  );
}
