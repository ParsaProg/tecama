import { FaUserCheck } from "react-icons/fa6";
import { MdRemoveRedEye, MdDateRange } from "react-icons/md";
import { CodeBlock } from "../../ui/code-block";
import { MdOpenInNew } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProblemContainer(props) {
  const navigate = useNavigate();
  const [questionDetailsShowColorIcon, setQuestionDetailsShowColorIcon] =
    useState("white");
  const { codetext } = props;
  return (
    <div
      className={`${
        props.isDarkTheme ? "text-white" : "text-black"
      } w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600`}
    >
      <div
        style={{
          boxShadow: "0px 0px 20px 2px black",
        }}
        className={`w-full z-[30] ${
          props.isDarkTheme ? "bg-slate-900" : "bg-slate-100"
        } border-[1px] rounded-lg ${
          window.innerWidth > 1300 ? "w-[43vw]" : "w-[80vw]"
        } border-[#2e3c51]`}
      >
        {/* <div
        className="w-[100%] h-[25rem] rounded-t-lg"
        style={{
          backgroundImage: `url(${questionImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}  
      ></div> */}
        <div className="w-[100%] px-3 py-1 text-[3.3vw] sm:text-lg md:text-xl text-end">
          <CodeBlock
            isDarkTheme={props.isDarkTheme}
            language="jsx"
            filename="MyChart.jsx"
            highlightLines={[9, 13, 14, 18]}
            code={codetext}
          />
        </div>
        <div className="mt-[-10px] p-5">
          <h1 className="font-bold sm:text-xl text-mdmd:text-3xl inline">
            کد بالا برای ساخت یک چارت توی ریکت کار نمی‌کنه، کمک کنید
          </h1>
          <div className="md:flex sm:flex-col mt-[20px] justify-between">
            <span className="flex gap-[5px] items-center">
              <MdDateRange
                color={props.isDarkTheme ? "white" : "black"}
                size={20}
              />
              <p className="sm:text-sm md:text-sm">۲ سال پیش پرسیده شد</p>
            </span>
            <div className="h-[0.8rem]"></div>
            <span className="flex gap-[5px] items-center">
              <MdRemoveRedEye
                color={props.isDarkTheme ? "white" : "black"}
                size={20}
              />
              <p className="sm:text-sm md:text-sm">۱ هزار بار دیده شد</p>
            </span>
            <div className="h-[0.8rem]"></div>
            <span className="flex gap-[5px] items-center">
              <FaUserCheck
                color={props.isDarkTheme ? "white" : "black"}
                size={20}
              />
              <p className="sm:text-sm md:text-sm">۵۰۰ بار اصلاح شد</p>
            </span>
          </div>
        </div>
        <div className="w-[100%] h-[1px] bg-slate-700" />
        <p className="font-[400] p-5 sm:text-md text-md md:text-lg text-justify ">
          سلام بچه‌ها، من می‌خواهم بدانم چگونه درصدی مانند تصویر زیر را اضافه
          کنم. من می‌خواهم متنی اضافه کنم که حاوی درصد هر داده باشد. بین نمودار
          دایره‌ای و افسانه خواهد بود. نحوۀ اضافه کردن متن یا شاید تغییر سبک
          افسانه با افزودن متن روی افسانه‌های بالا.
        </p>
        <button
          onClick={() => {
            navigate(
              "/problems/کد بالا برای ساخت یک چارت توی ریکت کار نمیکنه، کمک کنید"
            );
          }}
          onMouseOver={() => {
            setQuestionDetailsShowColorIcon("black");
          }}
          onMouseOut={() => {
            setQuestionDetailsShowColorIcon("white");
          }}
          className={`items-center flex gap-5 text-[3vw] sm:text-sm lg:text-lg md:text-sm border-[1px] border-slate-500 bg-[transparent] transition duration-300 p-3 mx-5 mb-5 rounded-md hover:text-black hover:border-[transparent] ${
            props.isDarkTheme ? "hover:bg-slate-300 " : "hover:bg-black hover:text-white "
          }`}
        >
          مشاهده و پاسخ به این سؤال | مشکل
          <MdOpenInNew
            className="transition duration-300"
            size={20}
          />
        </button>
        {/* <CodeEditor /> */}
      </div>
    </div>
  );
}
