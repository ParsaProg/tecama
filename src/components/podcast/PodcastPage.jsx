import { IoPlayOutline } from "react-icons/io5";
import { BsWifi } from "react-icons/bs";
import { Calendar, Clock } from "lucide-react";
import { FaApple } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { RiSoundcloudFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { Input } from "../ui/input";
import { RiSendPlaneLine } from "react-icons/ri";
import { useState } from "react";
import { motion } from "framer-motion";

export default function PodcastPage({ isDarkTheme }) {
  const [email, setEmail] = useState("");
  const episodes = [
    {
      id: 1,
      title: "آینده توسعه هوش مصنوعی",
      description:
        "در این قسمت درباره آخرین پیشرفت‌های هوش مصنوعی و معنای آن برای توسعه‌دهندگان بحث می‌کنیم.",
      duration: "۴۲:۱۸",
      date: "۲۱ فروردین ۱۴۰۴",
      image:
        "https://cdn.leonardo.ai/users/a851d49a-d991-4b88-bf68-b3d5575d792e/generations/d9843953-4930-429b-b9c5-6a01d581c51e/Leonardo_Phoenix_10_A_futuristic_vibrant_digital_art_illustrat_3.jpg",
      category: "هوش مصنوعی",
    },
    {
      id: 2,
      title: "وب۳ و اینترنت غیرمتمرکز",
      description: "بررسی چگونگی تغییر شکل آینده وب توسط فناوری بلاکچین.",
      duration: "۳۸:۴۵",
      date: "۱۴ فروردین ۱۴۰۴",
      image:
        "https://cdn.leonardo.ai/users/a851d49a-d991-4b88-bf68-b3d5575d792e/generations/d9843953-4930-429b-b9c5-6a01d581c51e/Leonardo_Phoenix_10_A_futuristic_vibrant_digital_art_illustrat_3.jpg",
      category: "بلاکچین",
    },
    {
      id: 3,
      title: "تکامل فریم‌ورک‌های فرانت‌اند",
      description:
        "از جی‌کوئری تا ری‌اکت و فراتر - چگونه توسعه فرانت‌اند در طول سال‌ها متحول شده است.",
      duration: "۴۵:۲۲",
      date: "۷ فروردین ۱۴۰۴",
      image:
        "https://cdn.leonardo.ai/users/a851d49a-d991-4b88-bf68-b3d5575d792e/generations/d9843953-4930-429b-b9c5-6a01d581c51e/Leonardo_Phoenix_10_A_futuristic_vibrant_digital_art_illustrat_3.jpg",
      category: "توسعه وب",
    },
    {
      id: 4,
      title: "محاسبات کوانتومی به زبان ساده",
      description:
        "تجزیه و تحلیل دنیای پیچیده محاسبات کوانتومی به مفاهیم قابل درک.",
      duration: "۵۱:۰۷",
      date: "۲۹ اسفند ۱۴۰۳",
      image:
        "https://cdn.leonardo.ai/users/a851d49a-d991-4b88-bf68-b3d5575d792e/generations/d9843953-4930-429b-b9c5-6a01d581c51e/Leonardo_Phoenix_10_A_futuristic_vibrant_digital_art_illustrat_3.jpg",
      category: "کوانتوم",
    },
  ];
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
      className={`max-w-7xl w-full px-4 mx-auto ${
        isDarkTheme ? "text-white" : "text-gray-800"
      }`}
    >
      {/* Hero Section */}
      <div
        className={`overflow-hidden relative rounded-2xl w-full h-auto md:h-[650px] mt-[50px] flex flex-col md:flex-row items-center justify-between p-6 md:px-8 gap-6 ${
          isDarkTheme ? "bg-[#2e2e32a2]" : "bg-gray-100"
        }`}
      >
        <div
          className={`z-20 w-[200px] h-[200px] absolute top-[-20px] left-[-20px] blur-3xl rounded-full ${
            isDarkTheme ? "bg-purple-950" : "bg-purple-200"
          }`}
        ></div>
        <div
          className={`z-20 w-[200px] h-[200px] absolute bottom-[-20px] right-[-20px] rounded-full blur-3xl ${
            isDarkTheme ? "bg-cyan-900" : "bg-cyan-200"
          }`}
        ></div>

        <div className="flex flex-col items-start gap-y-4 w-full md:w-1/2">
          <h1
            className={`font-bold text-4xl md:text-5xl z-[99] ${
              isDarkTheme ? "text-white" : "text-gray-800"
            }`}
          >
            پادکست تک‌ویو
          </h1>
          <h2
            className={`font-[400] text-lg md:text-xl z-[99] ${
              isDarkTheme ? "text-slate-400" : "text-gray-600"
            }`}
          >
            کاوش در لبه‌های برنده تکنولوژی و نوآوری
          </h2>
          <div className="flex flex-wrap items-center gap-3 z-[99]">
            <button
              className={`p-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-x-2 ${
                isDarkTheme
                  ? "bg-purple-700 hover:bg-purple-900 text-white"
                  : "bg-purple-600 hover:bg-purple-700 text-white"
              }`}
            >
              <IoPlayOutline size={20} />
              آخرین قسمت
            </button>
            <button
              className={`p-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-x-2 ${
                isDarkTheme
                  ? "bg-black border-slate-600 hover:bg-slate-900 text-white"
                  : "bg-white border-gray-300 hover:bg-gray-200 text-gray-800"
              } border-[1px]`}
            >
              <BsWifi size={20} className="rotate-[45deg]" />
              اشتراک
            </button>
          </div>
        </div>

        <img
          className="z-[99] rounded-xl w-full md:w-[400px] lg:w-[600px] h-auto object-cover"
          src="https://github.com/ParsaProg/tecama_images/blob/main/podcast-modern.jpg?raw=true"
          alt="iran-podcat, tecama-podcast"
        />
      </div>

      {/* Episodes Section */}
      <section className="py-12 w-full">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-y-4">
          <h2
            className={`text-2xl font-bold tracking-tight ${
              isDarkTheme ? "text-white" : "text-gray-800"
            }`}
          >
            آخرین قسمت‌ها
          </h2>
          <div
            className={`hover:text-purple-300 text-sm ${
              isDarkTheme ? "text-purple-400" : "text-purple-600"
            }`}
          >
            مشاهده همه قسمت‌ها
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {episodes.map((episode) => (
            <div
              key={episode.id}
              className={`transition-all duration-200 rounded-lg overflow-hidden cursor-pointer ${
                isDarkTheme
                  ? "bg-slate-900 border-slate-700 hover:border-slate-500"
                  : "bg-white border-gray-200 hover:border-gray-400"
              } border-[1px]`}
            >
              <div className="flex flex-col md:flex-row">
                <img
                  src={episode.image}
                  alt={episode.title}
                  className="h-[200px] w-full md:w-[200px] object-cover"
                />
                <div className="p-5 flex flex-col items-start justify-start gap-y-2">
                  <div
                    className={`py-1.5 px-3 rounded-full text-sm ${
                      isDarkTheme
                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                        : "bg-purple-500 hover:bg-purple-600 text-white"
                    }`}
                  >
                    {episode.category}
                  </div>
                  <h3
                    className={`text-lg font-semibold ${
                      isDarkTheme ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {episode.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      isDarkTheme ? "text-zinc-400" : "text-gray-600"
                    }`}
                  >
                    {episode.description}
                  </p>
                  <div
                    className={`flex items-center text-xs ${
                      isDarkTheme ? "text-zinc-500" : "text-gray-500"
                    }`}
                  >
                    <span className="flex items-center">
                      <Clock className="ml-1 h-3 w-3" />
                      {episode.duration}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Calendar className="ml-1 h-3 w-3" />
                      {episode.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subscription Section */}
      <section className="flex flex-col lg:flex-row items-stretch gap-6 mt-6 w-full">
        {/* Platforms */}
        <div
          className={`transition-all duration-200 w-full cursor-pointer border-[1px] rounded-lg p-5 flex flex-col gap-y-3 ${
            isDarkTheme
              ? "bg-slate-900 border-slate-800 hover:border-slate-600"
              : "bg-white border-gray-200 hover:border-gray-400"
          }`}
        >
          <h1
            className={`font-bold text-2xl ${
              isDarkTheme ? "text-white" : "text-gray-800"
            }`}
          >
            اشتراک در تک‌ویو
          </h1>
          <p
            className={`font-[400] text-md ${
              isDarkTheme ? "text-slate-400" : "text-gray-600"
            }`}
          >
            هیچ قسمتی را از دست ندهید. پادکست ما را در پلتفرم‌های مورد علاقه خود
            دنبال کنید.
          </p>
          <div className="flex flex-wrap md:flex-nowrap items-center gap-3 mt-3">
            <div
              className={`border-[1px] rounded-md flex-1 h-[100px] py-5 flex flex-col items-center justify-center gap-y-3 ${
                isDarkTheme
                  ? "bg-slate-800 border-slate-500 text-white"
                  : "bg-gray-100 border-gray-300 text-gray-800"
              }`}
            >
              <FaSpotify size={25} />
              اسپاتیفای
            </div>
            <div
              className={`border-[1px] rounded-md flex-1 h-[100px] py-5 flex flex-col items-center justify-center gap-y-3 ${
                isDarkTheme
                  ? "bg-slate-800 border-slate-500 text-white"
                  : "bg-gray-100 border-gray-300 text-gray-800"
              }`}
            >
              <FaApple size={25} />
              اپل
            </div>
            <div
              className={`border-[1px] rounded-md flex-1 h-[100px] py-5 flex flex-col items-center justify-center gap-y-3 ${
                isDarkTheme
                  ? "bg-slate-800 border-slate-500 text-white"
                  : "bg-gray-100 border-gray-300 text-gray-800"
              }`}
            >
              <RiSoundcloudFill size={25} />
              ساند کلاد
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div
          className={`transition-all duration-200 w-full cursor-pointer border-[1px] rounded-lg p-5 flex flex-col gap-y-3 ${
            isDarkTheme
              ? "bg-slate-900 border-slate-800 hover:border-slate-600"
              : "bg-white border-gray-200 hover:border-gray-400"
          }`}
        >
          <h1
            className={`font-bold text-2xl ${
              isDarkTheme ? "text-white" : "text-gray-800"
            }`}
          >
            دریافت اعلان‌های قسمت جدید
          </h1>
          <p
            className={`font-[400] text-md ${
              isDarkTheme ? "text-slate-400" : "text-gray-600"
            }`}
          >
            برای اطلاع از انتشار قسمت‌های جدید، در خبرنامه ما ثبت‌نام کنید.
          </p>
          <div className="flex items-center gap-3 w-full">
            <div className="relative rounded-lg flex items-center w-full">
              <Input
                theme={isDarkTheme}
                value={email}
                setstatetext={setEmail}
                id="email"
                placeholder="ایمیل خود را وارد کنید"
                type="email"
                className={
                  isDarkTheme
                    ? "bg-slate-800 text-white"
                    : "bg-white text-gray-800"
                }
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <FaRegUser size={20} color={isDarkTheme ? "white" : "gray"} />
              </div>
            </div>
            <button
              className={`transition-all duration-200 border-none outline-none rounded-md p-3 ${
                isDarkTheme
                  ? "bg-purple-700 hover:bg-purple-900 text-white"
                  : "bg-purple-600 hover:bg-purple-700 text-white"
              }`}
            >
              <RiSendPlaneLine size={23} />
            </button>
          </div>
          <p
            className={`font-[400] text-md ${
              isDarkTheme ? "text-slate-400" : "text-gray-600"
            }`}
          >
            ما بعد از انتشار هر پادکست اطلاعات آن را به همراه لینک مشاهده به
            ایمیل وارد شده ارسال می‌کنیم.
          </p>
        </div>
      </section>
    </motion.div>
  );
}
