import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import "../../../styles/exam-landing-section.css";

const ExamSection = ({ isDarkTheme }) => {
  return (
    <div className="relative main-exam-landing-container w-[1300px] exam-container-out-gradient h-[250px] m-auto mt-[100px] bg-gradient-to-l from-[#6f3dab] to-[#2f4fc3] rounded-xl">
      <div
        style={{
          borderTopRightRadius: "50px",
          borderBottomLeftRadius: "50px",
        }}
        className="p-2 absolute mt-[-30px] right-[50%] translate-x-[50%] w-[80%] h-[100%] bg-gradient-to-l from-[#8064D9] to-[#4770EA] flex items-center justify-center"
      >
        <div
          style={{
            borderTopRightRadius: "47px",
            borderBottomLeftRadius: "47px",
          }}
          className={`flex items-center exam-gradient-container justify-between w-[100%] h-[100%] ${isDarkTheme? "bg-[#080B21]": "bg-[#ffffff]"} sm:p-10 p-6`}
        >
          <div className="flex flex-col gap-y-[10px] w-[100%]">
            <h1 className={`${isDarkTheme? "text-white": "text-black"} font-bold text-2xl`}>
              خودت رو به چالش بکش
            </h1>
            <h2 className={`${isDarkTheme? "text-neutral-300": "text-black"} font-[400] text-xl md:pl-[50px]`}>
              اولین دوره از مسابقات کدنویسی تکاما. سطح خودت رو ببین و با بقیه
              رقابت کن
            </h2>
            <Link to="/exams">
              <button className=" text-white bg-gradient-to-l from-[#2563EB] to-[#764fd2] transition-all duration-300 eas hover:bg-transparent  ease-out text-lg px-3 mt-5 py-2 text-center items-center justify-center rounded-md flex gap-2">
                <h2 className="text-md">شرکت در مسابقات</h2>
                <MdOutlineKeyboardArrowRight
                  color="white"
                  className="rotate-[180deg]"
                  size={25}
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamSection;
