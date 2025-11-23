import { SiSpringCreators } from "react-icons/si";
import { IoIosStar } from "react-icons/io";

export default function AppRankingContainer(props){
    return <div className="border-white border-[1px] p-5 rounded-md">
    <div className="flex items-center gap-2">
      <div
        className="w-[5vw] h-[5vw] app-image rounded-[5px] bg-white"
        style={{
          backgroundImage:
            "url(https://assets.myket.ir/icons/xlarge/08cb2245-2e76-4490-b491-766fa77f70ae.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="mr-[10px]">
        <h1 className="text-white font-bold app-name text-[1.5vw]">سروش پلاس</h1>
        <div className="h-[3px]"></div>
        <div className="flex items-center">
          <p className="text-white  app-company-title text-[1vw]">سازندگان </p>
          <div className="w-[5px]"></div>
          <SiSpringCreators size={15} color="white" />
          <div className="w-[5px]"></div>
          <p className="text-blue-300 app-company text-[1vw] cursor-pointer hover:text-blue-50 transition-all duration-200">
            شرکت سروش پلاس
          </p>
        </div>
        <div className="h-[3px]"></div>
        <p className="text-gray-300 text-sm ">
          رایگان - فاقد تبلیغ درون برنامه‌ای
        </p>
      </div>
    </div>
    <div className="flex shrink-0 justify-center items-center gap-[2rem] mt-[3rem]">
      <div>
        <div className="bg-white rounded-sm text-black flex justify-center rank-number text-[1.3vw] font-sans">
          #1
        </div>
        <div className="h-[8px]"></div>
        <p className="text-white text-[1vw] rank-number-txt text-center">رتبۀ اول</p>
      </div>
      <span className="w-[1px] h-[30px] bg-white rounded-lg"></span>
      <div>
        <div className="border-white border-[2px] install-number rounded-sm text-white flex justify-center text-center text-[1vw] p-[6px]">
          10 میلیون
        </div>
        <div className="h-[8px]"></div>
        <p className="text-white text-md text-center install-number-txt">تعداد نصب</p>
      </div>
      <span className="w-[1px] h-[30px] bg-white rounded-lg"></span>
      <div>
        <div className="border-white border-[2px] rounded-sm text-white flex justify-center user-vote text-[1vw] items-center p-[5px] font-mono">
          <IoIosStar size={20} color="white" className="mt-[-5px]" />
          <div className="w-[3px]"></div>
          <p> 4.5</p>
        </div>
        <div className="h-[8px]"></div>
          <p className="text-white user-vote-txt text-[1vw] text-center">رای کاربران</p>
      </div>
    </div>
  </div>
}