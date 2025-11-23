import { motion } from "framer-motion";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaArrowRight, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLinkOutline } from "react-icons/io5";
import { ReactComponent as TecamaLogo } from "../../assets/logo/tecama-logo.svg";
import { FaHandsClapping } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";
import { CiSaveUp2 } from "react-icons/ci";
import { CiSaveDown2 } from "react-icons/ci";
import { IoPlayCircleOutline } from "react-icons/io5";
import { CodeBlock } from "../ui/code-block";
import "../../styles/responsive/artcileDetail_res.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LottieAnimation from "../../assets/lottie/Animation - 1746438530444.json";
import Lottie from "lottie-react";
import GetDataFromLocationPathName from "../../functions/getDatafromLocationPathname";

export default function ArticleDetailsPage({
  isDarkTheme,
  articlesData,
  API_KEY,
}) {
  const [isArticleFound, setIsArticleFound] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const [mainArticlesData, setMainArticlesData] = useState(null);
  const codetext = `import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [pathname]);

  return null;
}`;
  const apiEndPoint = "https://tecama-api.vercel.app/api/articles";

  GetDataFromLocationPathName(
    articlesData,
    setIsArticleFound,
    setMainArticlesData,
    apiEndPoint,
    API_KEY,
    location,
    10,
    "data"
  );

  if (!isArticleFound) {
    return (
      <div
        className={`mt-5 flex items-center justify-center text-center flex-col`}
      >
        <div style={{ width: "300px", height: "170px" }}>
          <Lottie animationData={LottieAnimation} loop={true} autoplay={true} />
        </div>
        <h1 className={`text-xl ${isDarkTheme ? "text-white" : "text-black"}`}>
          در حال بارگیری اطلاعات ...
        </h1>
      </div>
    ); // or a loading spinner, or nothing while redirecting
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{
        opacity: 0,
        scale: 0.9,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="w-[80%] article-detail-container m-auto relative"
    >
      <div
        onClick={() => {
          navigate("/articles");
        }}
        className={`flex items-center gap-x-2 cursor-pointer transition-all duration-200 bg-slate-900 absolute top-[-60px] ${
          isDarkTheme
            ? "border-[#2E3C51] bg-slate-300 text-white"
            : "text-black bg-white border-slate-300"
        } border-[1px]  py-2 rounded-full px-3`}
      >
        <FaArrowRight size={20} />
        برگشت به صفحۀ مقالات
      </div>
      <div
        className={`${
          isDarkTheme
            ? "bg-slate-900 border-[#2E3C51] text-white"
            : "text-black bg-white border-slate-300"
        } mt-[65px] article-details-page rounded-xl h-auto pb-[30px] border-[1px]`}
      >
        <div
          className="w-[100%] h-[700px] rounded-t-xl title-image"
          style={{
            backgroundImage: `url(${mainArticlesData.articleImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="content mt-[20px] lg:mx-[20px] mr-[15px] w-[95%] flex">
          <div className="right-side-icons flex flex-col items-center gap-y-5">
            <div
              className={`rounded-lg mb-[30px] ${
                isDarkTheme
                  ? "bg-[#16213a]  border-[#2E3C51]"
                  : " border-slate-300 bg-gray-100"
              } border-[1px] p-3`}
            >
              <TecamaLogo width={25} height={25} />
            </div>
            <div className="rounded-lg bg-[#2563EB] p-3 cursor-pointer transition-all duration-200 border-[0.5px] border-transparent">
              <BsTwitterX color="white" size={25} />
            </div>
            <div className="rounded-lg bg-[#2563EB] p-3 cursor-pointer transition-all duration-200 border-[0.5px] border-transparent">
              <FaLinkedin color="white" size={25} />
            </div>
            <div className="rounded-lg bg-[#2563EB] p-3 cursor-pointer transition-all duration-200 border-[0.5px] border-transparent">
              <LiaTelegramPlane color="white" size={25} />
            </div>
            <div className="rounded-lg bg-[#2563EB] p-3 cursor-pointer transition-all duration-200 border-[0.5px] border-transparent">
              <IoLinkOutline color="white" size={25} />
            </div>
            <div className="rounded-lg bg-[#2563EB] p-3 cursor-pointer transition-all duration-200 border-[0.5px] border-transparent">
              <MdEmail color="white" size={25} />
            </div>
          </div>
          <div
            className={`${
              isDarkTheme ? "text-white" : "text-black"
            } text-justify lg:px-[50px] flex flex-col items-start`}
          >
            <div>
              <h1 className="text-2xl ml-[15px] font-bold">
                {mainArticlesData.titleText}
              </h1>
              <h3
                className={`${
                  isDarkTheme ? "text-blue-400" : "text-blue-600"
                } publisher-time-icons flex items-center mt-[10px]`}
              >
                <div className="flex items-center">
                  <div className="flex items-center gap-x-2">
                    <p
                      className={`transition-all duration-200 ${
                        isDarkTheme ? "hover:text-white" : "hover:text-black"
                      } cursor-pointer`}
                    >
                      پارسا شعبانی،
                    </p>
                    <p
                      className={`transition-all duration-200 ${
                        isDarkTheme ? "hover:text-white" : "hover:text-black"
                      } cursor-pointer`}
                    >
                      {" "}
                      تیم کامپیوتری تکاما،
                    </p>
                  </div>
                  <p
                    className={`${
                      isDarkTheme ? "text-slate-400" : "text-slate-800"
                    } mr-[10px]`}
                  >
                    ۵ بهمن ۱۴۰۳
                  </p>
                </div>
                <div className="flex items-center justify-center icons gap-x-5 mr-[50px]">
                  <FaComment
                    className="cursor-pointer"
                    size={20}
                    color={isDarkTheme ? "#BFC7D2" : "black"}
                  />
                  <FaHandsClapping
                    className="cursor-pointer"
                    size={20}
                    color={isDarkTheme ? "#BFC7D2" : "black"}
                  />
                  <CiSaveDown2
                    className="cursor-pointer"
                    strokeWidth={1}
                    size={25}
                    color={isDarkTheme ? "#BFC7D2" : "black"}
                  />
                  <CiSaveUp2
                    className="cursor-pointer"
                    strokeWidth={1}
                    size={25}
                    color={isDarkTheme ? "#BFC7D2" : "black"}
                  />
                  <div
                    className={`flex gap-x-1 border-[1px] ${
                      isDarkTheme
                        ? "border-[#2E3C51]  hover:bg-[#242d3bb7]"
                        : " hover:bg-slate-100 border-slate-300"
                    } p-2 transition-all cursor-pointer duration-200 rounded-md items-center`}
                  >
                    <IoPlayCircleOutline
                      strokeWidth={1}
                      size={25}
                      color={isDarkTheme ? "#BFC7D2" : "black"}
                    />
                    <p
                      className={isDarkTheme ? "text-[#dadee2]" : "text-black"}
                    >
                      روخوانی مقاله
                    </p>
                  </div>
                </div>
              </h3>
            </div>
            <div className="mt-[50px] w-[95%] font-[400] leading-[45px]">
              <h1 className="text-3xl">بازیابی زمان و تمرکز</h1>
              <p
                className={`${
                  isDarkTheme ? "text-[#dadee2]" : "text-black"
                } text-xl mt-[10px] leading-[45px]`}
              >
                هر جلسه توسعه با هدف متمرکز ماندن شروع می شود. قطع جریان رشد شما
                را مختل می کند و شما را ناامید می کند. تعویض کار، ماشین‌های کند،
                خطاهای گیج‌کننده - این عوامل حواس‌پرتی ما را از آنچه ما
                توسعه‌دهندگان به بهترین شکل انجام می‌دهیم دور می‌کند: ساخت و
                ارسال. به همین دلیل است که پروژه تکاما را ایجاد کردیم و امسال در
                تکاما آن را به روی کاربران سراسر جهان باز کردیم. ما می‌خواستیم
                هر کسی را قادر کنیم تا در{" "}
                <strong
                  className={`${
                    isDarkTheme
                      ? "text-blue-500 hover:text-white"
                      : "text-blue-600 hover:text-black"
                  } cursor-pointer transition-all duration-200 `}
                >
                  دنیای توسعه مبتنی بر هوش مصنوعی
                </strong>
                ، ادغام‌های یکپارچه و دسترسی آسان به قالب‌ها برای طیف گسترده‌ای
                از چارچوب‌ها و زبان‌ها غوطه‌ور شود. ما به بازخورد شما گوش
                داده‌ایم و روی ویژگی‌ها و پیشرفت‌های جدید کار می‌کنیم تا به شما
                در بهینه‌سازی گردش کارتان کمک کنیم. برای آشنایی با
                به‌روزرسانی‌های IDX که به شما کمک می‌کند با اصطکاک کمتر سریع‌تر
                کار کنید، ادامه مطلب را بخوانید.
              </p>
              <h1 className="text-3xl mt-[50px] ">
                هوش مصنوعی مدرن گوگل در اندروید استودیو
              </h1>
              <p
                className={`${
                  isDarkTheme ? "text-[#dadee2]" : "text-black"
                } text-xl mt-[10px] leading-[45px]`}
              >
                اندروید استودیو به زودی به تکاما می آید. تنها با چند کلیک و
                مستقیماً در مرورگر خود، می‌توانید فضای کاری را راه‌اندازی کنید
                که Android Studio را اجرا می‌کند تا به سرعت برنامه‌نویسی، ساخت و
                آزمایش برنامه‌های اندرویدی بومی را شروع کند. به لیست انتظار
                بپیوندید تا یکی از اولین افرادی باشید که Android Studio ما را در
                تکاما امتحان می کند.
              </p>
              <div
                className="w-[100%] h-[500px] rounded-lg my-[20px] title-image"
                style={{
                  backgroundImage: `url(https://images.ctfassets.net/um5csblqkmvt/2aiOTQ8PKSCd43zVETyqNj/907e47073f94ccb5f5c65f281128a1f5/unnamed-5.png)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <h1 className="text-3xl mt-[50px]">مدیریت مخفی ابری</h1>
              <p
                className={`${
                  isDarkTheme ? "text-[#dadee2]" : "text-black"
                } text-xl mt-[10px] leading-[45px]`}
              >
                یکی از اهداف ما در تکاما این است که به شما کمک کنیم تا محیط
                توسعه خود را سریع راه اندازی کنید، اما گاهی اوقات برای اجرای
                ایمن پروژه به کلیدهای API، گذرواژه ها و/یا گواهی نیاز دارید. به
                همین دلیل است که Cloud Secret Manager را به پنل ادغام IDX اضافه
                کرده ایم. مستقیماً در IDX، می‌توانید اطلاعات حساس را از Cloud
                Secret Manager ذخیره و بازیابی کنید، و شروع سریع پروژه‌ها در
                تیم‌ها را برای شما آسان‌تر و ایمن‌تر می‌کند.
              </p>
              <h1 className="text-3xl mt-[50px]">
                یک کتابخانه جدید از راه حل های انتها به انتهاس
              </h1>
              <p
                className={`${
                  isDarkTheme ? "text-[#dadee2]" : "text-black"
                } text-xl mt-[10px] leading-[45px]`}
              >
                ما 10 الگوی راه حل انتها به انتها را اضافه کرده ایم که همگی با
                Gemini فعال شده اند، که بهترین شیوه ها را هنگام ساخت برنامه هایی
                که وسعت و عمق فناوری های ارائه شده توسط Google را ترکیب می کنند،
                نشان می دهند. می‌توانید از آن‌ها برای دیدن معماری استفاده کنید
                که هنگام ساخت GenAI در برنامه‌ها استفاده کرده‌ایم. به طور خاص،
                برنامه یک برنامه سفر واقعی، نشان می‌دهد که چگونه می‌توانید{" "}
                <strong
                  className={`${
                    isDarkTheme
                      ? "text-blue-500 hover:text-white"
                      : "text-blue-600 hover:text-black"
                  } cursor-pointer transition-all duration-200 `}
                >
                  برترین خدمات Compass
                </strong>{" "}
                توسعه‌دهنده Google را برای ساخت برنامه‌های مبتنی بر هوش مصنوعی
                برای Flutter و Next.js ترکیب کنید.
              </p>
              <div
                className="w-[100%] h-[500px] rounded-lg my-[20px] title-image"
                style={{
                  backgroundImage: `url(https://images.ctfassets.net/um5csblqkmvt/6x2wBSSza9FOVIGROp35tc/e437ea3cfe5aa05bfc00d2052327aa3e/interactive-chat.gif)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <h1 className="text-3xl mt-[50px]">پشتیبانی React Native</h1>
              <p
                className={`${
                  isDarkTheme ? "text-[#dadee2]" : "text-black"
                } text-xl mt-[10px] leading-[45px]`}
              >
                <strong
                  className={`${
                    isDarkTheme
                      ? "text-blue-500 hover:text-white"
                      : "text-blue-600 hover:text-black"
                  } cursor-pointer transition-all duration-200 `}
                >
                  یکی از ویژگی های درخواستی ما پشتیبانی از {""}
                </strong>
                React Native بوده است. بنابراین، از امروز، پیش‌نمایش اولیه
                پشتیبانی از React Native (با Expo) را در دسترس شما قرار داده‌ایم
                تا آن را امتحان کنید. می‌توانید برنامه React Native خود را به
                طور کامل در داخل ئکاما پیش‌نمایش و آزمایش کنید، یا می‌توانید کد
                QR تولید شده را اسکن کرده و برنامه را روی دستگاه تلفن همراه
                فیزیکی خود نیز آزمایش کنید.
              </p>

              <div
                className={`w-[100%] h-[350px] mt-[30px] rounded-lg border-[1px] mb-[20px] ${
                  isDarkTheme ? " border-[#2E3C51]" : "border-slate-300"
                }`}
              >
                <CodeBlock
                  isDarkTheme={isDarkTheme}
                  language="js"
                  filename="scrollToTop.js"
                  code={codetext}
                />
              </div>
              <h1 className="text-3xl">ساختن با هم</h1>
              <p
                className={`${
                  isDarkTheme ? "text-[#dadee2]" : "text-black"
                } text-xl mt-[10px] leading-[45px]`}
              >
                هدف ما از Project IDX همیشه این بوده است که به شما قدرت دهیم تا
                بهترین کاری را که انجام می دهید انجام دهید: ساخت و ارسال. هدف ما
                دائما به حداقل رساندن بیشتر اختلالات، ساده کردن گردش کار شما و
                در نهایت کمک به شما برای ایجاد نرم افزار استثنایی – سریع و
                کارآمد است. برای ادامه ساختن یک تجربه توسعه‌دهنده واقعاً یکپارچه
                که نیازهای شما را منعکس می‌کند، به کمک شما نیاز داریم. لطفاً
                جدیدترین ویژگی‌های موجود در این{" "}
                <strong
                  className={`${
                    isDarkTheme
                      ? "text-blue-500 hover:text-white"
                      : "text-blue-600 hover:text-black"
                  } cursor-pointer transition-all duration-200 `}
                >
                  پورتال تکاما
                </strong>{" "}
                را بررسی کنید و نظرات و بازخورد خود را از{" "}
                <strong
                  className={`${
                    isDarkTheme
                      ? "text-blue-500 hover:text-white"
                      : "text-blue-600 hover:text-black"
                  } cursor-pointer transition-all duration-200 `}
                >
                  انجمن‌های گفتوگو{" "}
                </strong>{" "}
                درخواست‌های ویژگی به اشتراک بگذارید. برای اطلاعات بیشتر در مورد
                ویژگی های ذکر شده در بالا، صفحه مستندات ما را بررسی کنید. اگر
                قبلاً این کار را نکرده اید، از وب سایت ما دیدن کنید تا تکاما را
                امتحان کنید و در سفر ما به ما بپیوندید. ما نمی توانیم صبر کنیم
                تا ببینیم با تکاما چه چیزی ایجاد می کنید!
              </p>
              <div className="icons-2">
                <div className="rounded-lg bg-[#2563EB] p-3 cursor-pointer transition-all duration-200 border-[0.5px] border-transparent">
                  <BsTwitterX color="white" size={25} />
                </div>
                <div className="rounded-lg bg-[#2563EB] p-3 cursor-pointer transition-all duration-200 border-[0.5px] border-transparent">
                  <FaLinkedin color="white" size={25} />
                </div>
                <div className="rounded-lg bg-[#2563EB] p-3 cursor-pointer transition-all duration-200 border-[0.5px] border-transparent">
                  <LiaTelegramPlane color="white" size={25} />
                </div>
                <div className="rounded-lg bg-[#2563EB] p-3 cursor-pointer transition-all duration-200 border-[0.5px] border-transparent">
                  <IoLinkOutline color="white" size={25} />
                </div>
                <div className="rounded-lg bg-[#2563EB] p-3 cursor-pointer transition-all duration-200 border-[0.5px] border-transparent">
                  <MdEmail color="white" size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
