import { MdDateRange } from "react-icons/md";
import { TbStopwatch } from "react-icons/tb";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaXTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa6";
import { FiLink } from "react-icons/fi";
import { CiBookmark } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";
import { MdOutlineArticle } from "react-icons/md";
import GetDataFromLocationPathName from "../../functions/getDatafromLocationPathname";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import LottieAnimation from "../../assets/lottie/Animation - 1746438530444.json";
import { useLocation, useNavigate } from "react-router-dom";
import convertToFarsiNumbers from "../../functions/convertNumbersToFarsi";
import { motion } from "framer-motion";

export default function NewsDetailsPage({ isDarkTheme, newsData, API_KEY }) {
  const apiEndPoint = "https://tecama-api.vercel.app/api/news";
  const [isNewsFound, setIsNewsFound] = useState();
  const [mainNewsData, setMainNewsData] = useState(null);
  const [mainNewsDataCats, setMainNewsDataCats] = useState([]);
  const [relatedArticle, setRelatedArticle] = useState([]);
  const location = useLocation();
  const navigator = useNavigate();

  GetDataFromLocationPathName(
    newsData,
    setIsNewsFound,
    setMainNewsData,
    apiEndPoint,
    API_KEY,
    location,
    6,
    ""
  );

  useEffect(() => {
    if (isNewsFound && mainNewsData) {
      const currentCats = mainNewsData.cats;
      if (newsData) {
        newsData.map((news, newsIndex) => {
          news.cats.map((cat, catIndex) => {
            for (let i = 0; i <= currentCats.length - 1; i++) {
              if (
                cat === currentCats[i] &&
                news.titleText !== mainNewsData.titleText
              ) {
                setRelatedArticle((prev) => [
                  ...prev,
                  {
                    ...news, // Spread all properties of news
                  },
                ]);
              }
            }
          });
        });
      }
    }
  }, [isNewsFound]);

  if (!isNewsFound) {
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

  const cats = ["سخت‌افزار", "تراشه‌ها", "هوش مصنوعی"];

  const informationText = `
    شرکت چینی UNIS (از زیرمجموعه Tsinghua Unigroup) از سری حافظه‌های S5 خود با فناوری PCIe 5.0 رونمایی کرد...
    (خلاصه شده برای نمایش، متن کامل را در صورت نیاز جایگزین کنید)
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: 50,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
      className={`mt-10 flex flex-col lg:flex-row items-start justify-start mx-auto w-[95%] lg:gap-x-[50px] gap-y-10 ${
        isDarkTheme ? "text-white" : "text-gray-800"
      }`}
    >
      <section className="flex flex-col items-start gap-y-2 w-full lg:w-[70%]">
        <div
          className={`px-3 py-2 ${
            isDarkTheme ? "bg-slate-800" : "bg-gray-200"
          } rounded-md border-[1px] ${
            isDarkTheme ? "border-slate-500" : "border-gray-400"
          }`}
        >
          تکنولوژی
        </div>

        <h1 className="font-bold text-2xl mt-3">{mainNewsData.titleText}</h1>

        <h5
          className={`font-[500] text-lg ${
            isDarkTheme ? "text-slate-400" : "text-gray-600"
          }`}
        >
          {mainNewsData.desc}
        </h5>

        <div className="flex items-center justify-start gap-x-3 mt-3">
          <div
            className="w-[50px] h-[50px] rounded-full border-[2px] border-[#b3bac5]"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url(${mainNewsData.publisherImage})`,
            }}
          />
          <div className="flex flex-col gap-y-2">
            <h1 className="font-bold text-xl">{mainNewsData.publisherName}</h1>
            <div className="flex items-center gap-x-3">
              <h3
                className={`flex items-center gap-x-1 ${
                  isDarkTheme ? "text-slate-400" : "text-gray-500"
                } text-sm`}
              >
                <MdDateRange size={20} />
                {convertToFarsiNumbers(mainNewsData.publishTime.toString())}
              </h3>
            </div>
          </div>
        </div>

        <div className="flex items-center flex-wrap gap-3 mt-5">
          <h1 className="font-bold text-xl">اشتراک‌گذاری با:</h1>
          {[RiTelegram2Fill, FaXTwitter, FaWhatsapp, FaLinkedin, FiLink].map(
            (Icon, idx) => (
              <Icon
                key={idx}
                size={25}
                className={`cursor-pointer ${
                  isDarkTheme
                    ? "text-slate-400 hover:text-slate-50"
                    : "text-gray-500 hover:text-gray-800"
                } transition-all duration-200`}
              />
            )
          )}
          <h1>|</h1>
          <CiBookmark
            size={25}
            className={`cursor-pointer ${
              isDarkTheme
                ? "text-slate-400 hover:text-slate-50"
                : "text-gray-500 hover:text-gray-800"
            } transition-all duration-200`}
          />
        </div>

        <img
          src={mainNewsData.titleImage}
          alt="news title"
          className="rounded-md w-full h-auto max-h-[500px] object-cover mt-8"
        />

        <p
          className={`${
            isDarkTheme ? "text-slate-300" : "text-gray-700"
          } font-[400] text-justify text-xl leading-[40px] whitespace-pre-line`}
        >
          {informationText}
        </p>

        <div className="flex items-center flex-wrap gap-3 mt-5">
          <h1 className="font-bold text-xl">اشتراک‌گذاری با:</h1>
          {[RiTelegram2Fill, FaXTwitter, FaWhatsapp, FaLinkedin, FiLink].map(
            (Icon, idx) => (
              <Icon
                key={idx}
                size={25}
                className={`cursor-pointer ${
                  isDarkTheme
                    ? "text-slate-400 hover:text-slate-50"
                    : "text-gray-500 hover:text-gray-800"
                } transition-all duration-200`}
              />
            )
          )}
          <h1>|</h1>
          <CiBookmark
            size={25}
            className={`cursor-pointer ${
              isDarkTheme
                ? "text-slate-400 hover:text-slate-50"
                : "text-gray-500 hover:text-gray-800"
            } transition-all duration-200`}
          />
        </div>

        <div className="flex mt-5 items-center gap-3 flex-wrap">
          <h1 className="text-3xl font-thin">#</h1>
          {mainNewsData.cats.map((cat, index) => (
            <div
              key={index}
              className={`cursor-pointer rounded-md ${
                isDarkTheme
                  ? "bg-slate-800 border-slate-600"
                  : "bg-gray-200 border-gray-400"
              } p-2 border-[1px] text-md`}
            >
              {cat}
            </div>
          ))}
        </div>

        <div
          className={`mt-5 p-5 flex flex-col items-start rounded-md ${
            isDarkTheme
              ? "bg-slate-900 border-slate-700"
              : "bg-gray-100 border-gray-300"
          } border-[1px]`}
        >
          <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-3">
            <div className="flex items-center gap-x-2">
              <div
                className="w-[45px] h-[45px] rounded-full border-[2px] border-[#b3bac5]"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url(${mainNewsData.publisherImage})`,
                }}
              />
              <h1 className="font-bold text-xl">
                {mainNewsData.publisherName}
              </h1>
            </div>
            <div
              className={`flex ${
                isDarkTheme ? "text-slate-400" : "text-gray-500"
              } items-center gap-x-2`}
            >
              <RiTelegram2Fill
                size={25}
                className={`hover:${
                  isDarkTheme ? "text-white" : "text-black"
                } transition-all cursor-pointer duration-200`}
              />
              <FaXTwitter
                size={25}
                className={`hover:${
                  isDarkTheme ? "text-white" : "text-black"
                } transition-all cursor-pointer duration-200`}
              />
            </div>
          </section>
          <p
            className={`${
              isDarkTheme ? "text-slate-300" : "text-gray-700"
            } font-[500] max-w-full mt-3`}
          >
            پارسا شعبانی برنامه‌نویس وب، عاشق تکنولوژی و یادگیری مداوم...
          </p>
          <p className="text-center w-full text-blue-600 font-[500] mt-5 cursor-pointer hover:underline hover:underline-offset-4 flex items-center justify-center gap-x-1">
            <MdOutlineArticle size={18} /> مشاهدۀ کلیۀ مقالات منتشر شده
          </p>
        </div>

        <div className="mt-5 w-full max-w-full">
          <h1 className="font-bold text-xl">افزودن دیدگاه و نظر</h1>
          <div className="relative rounded-md flex items-start w-full max-w-[451px] h-[100px] mt-3">
            <textarea
              placeholder="دیدگاه خود را بنویسید"
              maxLength={400}
              id="comment-field"
              className={` w-full h-full rounded-md border ${
                isDarkTheme
                  ? "form-inputs border-slate-400 bg-transparent text-white"
                  : "form-inputs2 border-gray-400 bg-white text-gray-800"
              } px-3 py-2 text-sm placeholder:${
                isDarkTheme ? "text-slate-400" : "text-gray-500"
              } focus-visible:ring-2 focus-visible:ring-white outline-offset-4`}
            />
            <div
              className={`absolute top-4 right-3 ${
                isDarkTheme ? "text-white" : "text-gray-800"
              }`}
            >
              <TiMessages size={20} />
            </div>
          </div>
          <button
            className="mt-5 bg-[#2563EB] hover:bg-[#2f2ba1] transition-all duration-200 flex items-center justify-center w-[110px] h-10 rounded-md text-white font-medium text-md"
            type="submit"
          >
            ارسال دیدگاه
          </button>
        </div>
      </section>

      <section
        className={`flex flex-col w-full lg:w-[30%] ${
          isDarkTheme ? "bg-slate-800" : "bg-gray-200"
        } p-5 rounded-md`}
      >
        <h1 className="font-bold text-xl">
          {relatedArticle.length === 0
            ? "اخبار مرتبطی وجود ندارد"
            : "اخبار مرتبط"}
        </h1>
        {relatedArticle.map((article, index) => (
          <div
            onClick={() => {
              navigator(`/news/${article.titleText}`);
            }}
            key={index}
            className={`${
              isDarkTheme
                ? "bg-slate-900 border-slate-500"
                : "bg-white border-gray-300"
            } mt-5 border-[1.6px] flex flex-col gap-y-3 w-full rounded-md p-3 cursor-pointer`}
          >
            <img
              src={article.titleImage}
              className="w-full h-[200px] object-cover rounded-md"
            />
            <h1 className="font-bold text-lg">{article.titleText}</h1>
            <h2
              className={`font-[500] ${
                isDarkTheme ? "text-slate-200" : "text-gray-700"
              } text-md`}
            >
              {article.publishTime}
            </h2>
          </div>
        ))}
      </section>
    </motion.div>
  );
}
