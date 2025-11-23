import { RxInstagramLogo } from "react-icons/rx";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { LiaTelegramPlane } from "react-icons/lia";
import { TbBrandYoutube } from "react-icons/tb";
import { ReactComponent as TecamaQrCode } from "../../../assets/qrcode/tecama-qrcode.svg";
import "../../../styles/responsive/footer_res.css";

export default function LandingPageFooter({ isDarkTheme }) {
  return (
    <div className={`landing-page-footer-info flex items-center relative justify-between mx-[10px] transition-all duration-200 lg:mx-[10rem] mt-[150px] 2xl:mt-[20px]`}>
      <div className={`rounded-xl ${isDarkTheme? "bg-gradient-to-l text-white from-[#20253E] to-slate-800": "bg-white border-[1px] border-slate-300 text-black"} p-5 w-[100%] inside-data`}>
        <h1 className="text-xl font-[400]">
          تکاما را در شبکه‌های اجتماعی دنبال کنید
        </h1>
        <p className="text-[4.5vw] text-justify sm:text-lg w-[50rem] mt-2 social-text">
          شبکه‌های اجتماعی تکاما سریع‌ترین روش دسترسی به اخبار فناوری، علم و
          کامپیوتر است. اگر می‌خواهید به‌روز باشید، شبکه‌های اجتماعی تکاما را
          دنبال کنید.
        </p>
        <div className={`flex items-center gap-5 mt-2 ${isDarkTheme? "text-[#18B2FA]": "text-blue-600"}`}>
          <RxInstagramLogo
            
            className="cursor-pointer"
            size={35}
          />
          <BsTwitterX  className="cursor-pointer" size={30} />
          <CiLinkedin  className="cursor-pointer" size={35} />
          <LiaTelegramPlane
            
            className="cursor-pointer"
            size={33}
          />
          <TbBrandYoutube
            
            className="cursor-pointer"
            size={33}
          />
        </div>
      </div>
      <TecamaQrCode
        width={200}
        height={200}
        className={`qrcode absolute left-0 rounded-xl ${isDarkTheme? "bg-slate-900": "bg-white border-[1px] border-slate-300"} p-5`}
      />
    </div>
  );
}
