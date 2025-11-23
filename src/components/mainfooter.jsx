import { Link } from "react-router-dom";

export default function MainFooter(props) {
  return (
    <section
      style={props.isDark ? { color: "white" } : { color: "black" }}
      className="pb-[20px] mt-[150px] z-[30] flex justify-center flex-col items-center transition-all duration-5000 w-[100%]"
    >
      <div
        style={{ flexWrap: "nowrap", flexShrink: "0px" }}
        className="items-center text-center mx-auto flex lg:flex-row flex-col lg:text-start lg:items-start lg:justify-center gap-x-[100px] pt-[20px] mt-[20px]"
      >
        <section className="m-auto lg:text-justify">
          <div className="flex relative m-auto">
            <div className="hidden lg:block absolute z-[-1] mx-[-0.7rem] opacity-[0.5] mt-[10px] w-[1.5rem] h-[1.5rem] bg-[#0177DA] rounded-full"></div>
            <h1 className="m-auto lg:m-0  font-bold text-2xl hover:text-[#18B2FA] cursor-pointer transition-all duration-200">
              دربارۀ سامانۀ تکاما
            </h1>
          </div>
          <p className="text-lg sm:w-[500px] lg:p-0 mt-1 md:px-5 px-3">
            تکاما وب سایتی برای آموزش برنامه نویسی با سبکی نو و به دور از چالش
            های یادگیری است من کنار شماهستم تا با برترین دوره‌ها و آموزش های
            آمیخته با تجربیات چند ساله خودم در دنیای بی کران برنامه نویسی وارد
            بهترین شرکت ها و موقعیت های شغلی شوید
          </p>
          <p className="text-lg ==">سال تاسیس ۱۴۰۴</p>
        </section>
        <section className="lg:mt-0 mt-10 m-auto ">
          <div className="flex relative">
            <div className="hidden lg:block absolute z-[-1] mx-[-0.7rem] opacity-[0.5] mt-[10px] w-[1.5rem] h-[1.5rem] bg-[#0177DA] rounded-full"></div>
            <h1 className="m-auto lg:m-0  font-bold text-2xl hover:text-[#18B2FA] cursor-pointer transition-all duration-200">
              بخش‌های سایت
            </h1>
          </div>
          <Link
            to={"/articles"}
            className="block text-lg mt-1 hover:text-[#18B2FA] cursor-pointer transition-all duration-200"
          >
            مقالات علمی
          </Link>
          <Link
            to={"/courses"}
            className="block text-lg mt-1 hover:text-[#18B2FA] cursor-pointer transition-all duration-200"
          >
            دوره‌های آموزشی
          </Link>
          <Link to={"/weblog"} className="block text-lg mt-1 hover:text-[#18B2FA] cursor-pointer transition-all duration-200">
            وبلاگ علمی و خبری
          </Link>
          <Link to={"/poll"} className=" block text-lg mt-1 hover:text-[#18B2FA] cursor-pointer transition-all duration-200">
            نظرسنجی‌های برنامه‌نویسی
          </Link>
          <Link to={"/exams"} className="block text-lg mt-1 hover:text-[#18B2FA] cursor-pointer transition-all duration-200">
            آزمون‌های آنلاین
          </Link>
          <Link to={"/problems"} className="block text-lg mt-1 hover:text-[#18B2FA] cursor-pointer transition-all duration-200">
            {" "}
            سوال و جواب‌های برنامه‌نویسی{" "}
          </Link>
        </section>
        <section className="lg:mt-0 mt-10">
          <div className="flex relative">
            <div className="hidden lg:block absolute z-[-1] mx-[-0.7rem]  mt-[10px] w-[1.5rem] h-[1.5rem] bg-red-800 rounded-full"></div>
            <h1 className="m-auto lg:m-0  font-bold text-2xl hover:text-[#18B2FA] cursor-pointer transition-all duration-200">
              برنامه‌نویس و گرافیست
            </h1>
          </div>
          <p className=" text-xl mt-3">پارسا‌ شعبانی</p>
        </section>
      </div>
      <p
        className={`${
          props.isDark ? "text-gray-400" : "text-gray-800"
        } text-center text-md mt-10 lg:p-0 p-5`}
      >
        تمامی حقوق این سایت متعلق به پارسا‌شعبانی بوده و هرگونه کپی برداری
        غیرمجاز خواهد بود. ©
      </p>
    </section>
  );
}
