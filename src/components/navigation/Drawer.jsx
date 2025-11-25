"use client";

import { AnimatePresence, motion } from "framer-motion";
import removeBodyOverlay from "../../utils/remove-overlay.jsx";
import { IoClose } from "react-icons/io5";
import { ReactComponent as TecamaLogo } from "./../../assets/logo/tecama-logo.svg";
import { TbVideo } from "react-icons/tb";
import { MdOutlineArticle, MdOutlineDarkMode } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { CgPoll } from "react-icons/cg";
import { FaQuestionCircle } from "react-icons/fa";
import { MdOutlineReportProblem } from "react-icons/md";
import { LiaBlogSolid } from "react-icons/lia";
import { MdOutlinePodcasts } from "react-icons/md";
import { BsInfoSquare } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Drawer({
  targetRef,
  isDarkTheme,
  drawerToggle,
  setDrawerToggle,
  setIsDarkTheme,
}) {
  const navigate = useNavigate();
  const [width, setWidth] = useState(null);

  useEffect(() => {
    // Set initial width
    setWidth(window.innerWidth);
    // resize handler
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <AnimatePresence>
      {drawerToggle ? (
        width < 1300 ? (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 0,
              x: 200,
              transition: { duration: 0.3, ease: "easeIn" },
            }}
            transition={{ duration: 0.3 }}
            dir="ltr"
            className={`drawer flex flex-col gap-y-[3px] rotate-[90deg] fixed w-[240px] rounded-l-xl border-[1px] border-slate-600 h-[100vh] overflow-y-auto ${
              isDarkTheme ? "text-neutral-200" : "text-black"
            } ${isDarkTheme ? "bg-[#0F172A]" : "bg-[#EEF3F9]"} z-[1000]`}
          >
            <div className="w-[100%] flex items-center justify-between p-5">
              <div className="flex items-center gap-2">
                <div
                  className="cursor-pointer rounded-lg flex items-center justify-center w-[35px] h-[35px] border-[.8px] border-slate-700"
                  onClick={() =>
                    removeBodyOverlay({ setDrawerToggle, targetRef })
                  }
                >
                  <IoClose size={25} />
                </div>
                <div
                  onClick={() => {
                    setIsDarkTheme(!isDarkTheme);
                    isDarkTheme
                      ? localStorage.setItem("theme", "light")
                      : localStorage.setItem("theme", "dark");
                  }}
                  className="cursor-pointer rounded-lg flex items-center justify-center w-[35px] h-[35px] border-[.8px] border-slate-700"
                >
                  {isDarkTheme ? (
                    <MdOutlineLightMode size={20} />
                  ) : (
                    <MdOutlineDarkMode size={20} />
                  )}
                </div>
              </div>
              <TecamaLogo width={55} height={55} />
            </div>
            <div
              onClick={() => {
                navigate("/courses");
                removeBodyOverlay({ setDrawerToggle, targetRef });
              }}
              className="flex items-center justify-end mt-5 px-5 text-lg gap-2 cursor-pointer"
            >
              <h1>ویدیو‌های آموزشی</h1>
              <TbVideo size={23} />
            </div>
            <div
              onClick={() => {
                navigate("/articles");
                removeBodyOverlay({ setDrawerToggle, targetRef });
              }}
              className="flex items-center justify-end mt-3 px-5 text-lg gap-2 cursor-pointer"
            >
              <h1>مقالات علمی</h1>
              <MdOutlineArticle size={23} />
            </div>
            <hr className="border-slate-700 border-[1px] w-[100%] h-[1.3px] mt-3"></hr>
            <div
              onClick={() => {
                navigate("/exams");
                removeBodyOverlay({ setDrawerToggle, targetRef });
              }}
              className="flex items-center justify-end mt-3 px-5 text-lg gap-2 cursor-pointer"
            >
              <h1>آزمون</h1>
              <PiExam size={23} />
            </div>
            <div
              onClick={() => {
                navigate("/poll");
                removeBodyOverlay({ setDrawerToggle, targetRef });
              }}
              className="flex items-center justify-end mt-3 px-5 text-lg gap-2 cursor-pointer"
            >
              <h1>نظرسنجی</h1>
              <CgPoll size={23} />
            </div>
            <hr className="border-slate-700 border-[1px] w-[100%] h-[1.3px] mt-3"></hr>
            <div
              onClick={() => {
                navigate("/faq");
                removeBodyOverlay({ setDrawerToggle, targetRef });
              }}
              className="flex items-center justify-end mt-3 px-5 text-lg gap-2 cursor-pointer"
            >
              <h1>سوالات پرتکرار</h1>
              <FaQuestionCircle size={23} />
            </div>
            <div
              onClick={() => {
                navigate("/problems");
                removeBodyOverlay({ setDrawerToggle, targetRef });
              }}
              className="flex items-center justify-end mt-3 px-5 text-lg gap-2 cursor-pointer"
            >
              <h1>مشکلات کاربران</h1>
              <MdOutlineReportProblem size={23} />
            </div>
            <hr className="border-slate-700 border-[1px] w-[100%] h-[1.3px] mt-3"></hr>
            <div
              onClick={() => {
                navigate("/weblog");
                removeBodyOverlay({ setDrawerToggle, targetRef });
              }}
              className="flex items-center justify-end mt-3 px-5 text-lg gap-2 cursor-pointer"
            >
              <h1>وبلاگ</h1>
              <LiaBlogSolid size={23} />
            </div>
            <hr className="border-slate-700 border-[1px] w-[100%] h-[1.3px] mt-3"></hr>
            <div
              onClick={() => {
                navigate("/podcasts");
                removeBodyOverlay({ setDrawerToggle, targetRef });
              }}
              className="flex items-center justify-end mt-2 px-5 text-lg gap-2 cursor-pointer"
            >
              <h1>پادکست</h1>
              <MdOutlinePodcasts size={23} />
            </div>
            <div
              onClick={() => {
                navigate("/about_creator");
                removeBodyOverlay({ setDrawerToggle, targetRef });
              }}
              className="flex items-center justify-end mt-2 px-5 text-lg gap-2 cursor-pointer"
            >
              <h1>دربارۀ برنامه‌نویس </h1>
              <BsInfoSquare size={20} />
            </div>
            <hr className="border-slate-700 border-[1px] w-[100%] h-[1.3px] mt-3"></hr>{" "}
            <Link
            dir="rtl"
              to="/code-battle"
              className="flex items-center justify-start w-[95%] text-lg gap-2 cursor-pointer mt-5 mb-2"
            >
              <button
                dir="rtl"
                className="
                flex items-center gap-2 px-3 py-2 rounded-xl 
                bg-indigo-600 hover:bg-indigo-500 transition-all
                text-white font-semibold  text-lg shadow-lg hover:shadow-indigo-400/40
                relative w-full
              "
              >
                {/* Badge NEW */}
                <span
                  className="
                absolute -top-2 -right-2 text-xs bg-cyan-400 text-black 
                px-2 py-[2px] rounded-md shadow-cyan-300 font-bold shadow-xl animate-bounce
              "
                >
                  جدید
                </span>
                {/* Animated Duel SVG */}
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-300"
                >
                  {/* Left bracket */}
                  <path d="M7 4 L4 7 L4 17 L7 20">
                    <animate
                      attributeName="stroke-opacity"
                      values="0.3;1;0.3"
                      dur="1.8s"
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Lightning bolt */}
                  <path d="M12 6 L14 10 L11 10 L13 14 L10 14" stroke="yellow">
                    <animate
                      attributeName="stroke"
                      values="#22d3ee;#facc15;#22d3ee"
                      dur="1.6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="stroke-width"
                      values="2.2;3;2.2"
                      dur="0.8s"
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Right bracket */}
                  <path d="M17 4 L20 7 L20 17 L17 20">
                    <animate
                      attributeName="stroke-opacity"
                      values="0.3;1;0.3"
                      dur="1.8s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
                Code Battle
              </button> 
             <span className="underline"></span>
            </Link>
            <div className="shrink-0 flex justify-end mt-5 px-5 text-lg gap-2">
              <h1
                className={`${
                  isDarkTheme ? "text-slate-400" : "text-slate-700"
                } text-[13px]`}
              >
                تکاما، تمامی حقوق محفوظ است ©
              </h1>
            </div>
          </motion.div>
        ) : null
      ) : null}
    </AnimatePresence>
  );
}
