import "../../../styles/topLandingPage.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Meteors } from "../../ui/meteors";
import { IoLogoGithub } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa"; 
import { FaCode } from "react-icons/fa6";
import { FiCpu } from "react-icons/fi";
import { PiNewspaperClipping } from "react-icons/pi";
import TecImage from "../../../assets/images/tec-image.png";
import {ReactComponent as FlutterLogo} from "../../../assets/icons/flutter-logo.svg";
import {ReactComponent as NodeJs} from "../../../assets/icons/node-js-logo.svg";
import {ReactComponent as VueJs} from "../../../assets/icons/vue-js-logo.svg";
import {ReactComponent as SwiftLogo} from "../../../assets/icons/swift-logo.svg";
import { FaJsSquare } from "react-icons/fa";
import {ReactComponent as HtmlLogo} from "../../../assets/icons/html-logo.svg";
import {ReactComponent as NestLogo} from "../../../assets/icons/nest-logo.svg";

export default function TopLandingSection({ isDarkTheme }) {
  return (
    <>
      <div
        className={`shrink-0 flex items-center xl:gap-x-[50px] justify-center overflow-hidden top-landing-section relative m-auto w-[100%]`}
      >
        <div className="md:mr-[30px]">
          <div className="overflow-visible absolute left-[50px] md:left-[400px] opacity-[0.5] md:top-0">
            <Meteors number={50} />
          </div>
          <div className="z-30 items-center text-center mt-[30px] md:mt-[50px]">
            <h1
              className={`${
                isDarkTheme ? "text-white" : "text-black"
              } font-bold text-5xl text-[7vw] md:text-3xl lg:text-5xl`}
            >
              به سامانۀ تکاما خوش آمدید
            </h1>
            <h1
              className={`z-30 mt-[10px] ${
                isDarkTheme ? "text-white" : "text-black"
              } font-bold text-5xl text-[5vw] md:text-2xl lg:text-3xl`}
            >
              کد بنویس. پیشرفت کن. یادبگیر.
            </h1>
            <p
              className={`z-30 mt-[10px] ${
                isDarkTheme ? "text-white" : "text-slate-800"
              } p-2 text-xl md:text-2xl`}
            >
              پلتفرم آموزشی تخصصی برنامه‌نویسی با محتوای کاربردی و به‌روز
            </p>
            <div className="z-30 flex flex-col w-full md:flex-row gap-x-5 justify-center items-center">
              <Link className="w-[300px]" to="/register">
                <button className=" text-white bg-gradient-to-l from-[#2563EB] to-[#764fd2] transition-all w-full duration-300 ease-out text-lg px-3 mt-5 py-2 text-center items-center justify-center rounded-xl flex gap-2">
                  <h2 className="text-md">شروع یادگیری | ورود یا عضویت</h2>
                  <MdOutlineKeyboardArrowRight
                    color="white"
                    className="rotate-[180deg]"
                    size={25}
                  />
                </button>
              </Link>
              <a className="w-[300px]" href="https://github.com/ParsaProg/tecama" target="_blank">
                <button className={`${isDarkTheme? "bg-[#0A0C0B] text-white border-slate-500": "bg-[#ffffff]  border-slate-500 text-black"} w-full border-[1px] outline-none text-lg px-3 mt-5 py-2 text-center rounded-xl flex justify-center items-center gap-3`}>
                  <h1>مشاهدۀ گیت‌هاب تکاما</h1>
                  <IoLogoGithub size={25} />
                </button>
              </a>
            </div>
            <img
            alt="tec-image"
            className="top-image my-[20px]"
            width={600}
            height={600}
            src={TecImage}
          />
            <div className="w-full m-auto sm:w-auto mt-[20px] my-[30px] gap-x-5 gap-y-5 sm:flex sm:flex-row grid grid-cols-2 items-center justify-center">
              <div
                className={`${
                  isDarkTheme
                    ? "bg-gradient-to-t from-[#2661ea25] to-transparent"
                    : "bg-gradient-to-t from-[#2564eb] to-[#2564eb32]"
                } sm:m-0 cursor-pointer transition-all duration-200 gap-y-[5px] shadow-lg p-5 hover:shadow-[0_1px_20px_0.9px_#2662EA] rounded-md border-[1px] w-full ${
                  isDarkTheme ? "border-slate-600" : "border-[#2564eb6f]"
                } flex flex-col items-center`}
              >
                <div
                  className={`rounded-full p-3 ${
                    isDarkTheme ? "bg-[#2564eb38]" : "bg-[#2564ebdd]"
                  }`}
                >
                  <FaCode size={20} color={isDarkTheme ? "#2563EB" : "white"} />
                </div>
                <h1
                  className={`${
                    isDarkTheme ? "text-white" : "text-white"
                  } text-lg mt-[5px]`}
                >
                  آموزش عملی
                </h1>
              </div>
              <div
                className={`${
                  isDarkTheme
                    ? "bg-gradient-to-t from-[#2661ea25] to-transparent"
                    : "bg-gradient-to-t from-[#2564eb] to-[#2564eb32]"
                } w-full cursor-pointer transition-all duration-200 gap-y-[5px] shadow-lg p-5 hover:shadow-[0_1px_20px_0.9px_#2662EA] rounded-md border-[1px] ${
                  isDarkTheme ? "border-slate-600" : "border-[#2564eb6f]"
                } flex flex-col items-center`}
              >
                <div
                  className={`rounded-full p-3 ${
                    isDarkTheme ? "bg-[#2564eb38]" : "bg-[#2564ebdd]"
                  }`}
                >
                  <PiNewspaperClipping
                    size={20}
                    color={isDarkTheme ? "#2563EB" : "white"}
                  />
                </div>
                <h1
                  className={`${
                    isDarkTheme ? "text-white" : "text-white"
                  } text-lg sm:text-lg mt-[5px]`}
                >
                  اخبار تکنولوژی
                </h1>
              </div>
              <div
                className={`${
                  isDarkTheme
                    ? "bg-gradient-to-t from-[#2661ea25] to-transparent"
                    : "bg-gradient-to-t from-[#2564eb] to-[#2564eb32]"
                } w-full cursor-pointer transition-all duration-200 gap-y-[5px] shadow-lg p-5 hover:shadow-[0_1px_20px_0.9px_#2662EA] rounded-md border-[1px] ${
                  isDarkTheme ? "border-slate-600" : "border-[#2564eb6f]"
                } flex flex-col items-center m-auto`}
              >
                <div
                  className={`rounded-full p-3 ${
                    isDarkTheme ? "bg-[#2564eb38]" : "bg-[#2564ebdd]"
                  }`}
                >
                  <FiCpu size={20} color={isDarkTheme ? "#2563EB" : "white"} />
                </div>
                <h1
                  className={`${
                    isDarkTheme ? "text-white" : "text-white"
                  } text-lg mt-[5px]`}
                >
                  تکنولوژی مدرن
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="z-50 relative image-and-icons">
          <img
          className="bottom-image"
            alt="tec-image"
            width={600}
            height={600}
            src={TecImage}
          />
          <div className="icon-container absolute flex items-center justify-center rounded-full w-[80px] h-[80px] bg-transparent top-[20px] right-[80px] shadow-blue-500 shadow-md">
            <FaReact size={40} color="#55BED5" />
          </div>
          <div className="icon-container absolute flex items-center justify-center rounded-full w-[80px] h-[80px] bg-transparent top-[150px] right-[0px] shadow-blue-500 shadow-md">
            <FlutterLogo width={35} height={35} color="#55BED5" />
          </div>
          <div className="icon-container absolute flex items-center justify-center rounded-full w-[60px] h-[60px] bg-transparent top-[300px] right-[40px] shadow-blue-500 shadow-md">
            <NestLogo width={25} height={25} color="#55BED5" />
          </div>
          <div className="icon-container absolute flex items-center justify-center rounded-full w-[60px] h-[60px] bg-transparent top-[16px] left-[90px] shadow-blue-500 shadow-md">
            <FaJsSquare size={25} color="#EFD81C" />
          </div>
          <div className="icon-container absolute flex items-center justify-center rounded-full w-[60px] h-[60px] bg-transparent top-[16px] left-[170px] shadow-blue-500 shadow-md">
            <NodeJs width={30} height={30} color="#EFD81C" />
          </div>
          <div className="icon-container absolute flex items-center justify-center rounded-full w-[80px] h-[80px] bg-transparent top-[90px] left-[10px] shadow-blue-500 shadow-md">
            <VueJs width={35} height={35}  color="#EFD81C" />
          </div>
          <div className="icon-container absolute flex items-center justify-center rounded-full w-[70px] h-[70px] bg-transparent top-[200px] left-[-10px] shadow-blue-500 shadow-md">
            <SwiftLogo width={30} height={30}  />
          </div>
          <div className="icon-container absolute flex items-center justify-center rounded-full w-[70px] h-[70px] bg-transparent top-[300px] left-[-10px] shadow-blue-500 shadow-md">
            <HtmlLogo width={30} height={30}  />
          </div>
        </div>
      </div>
    </>
  );
}
